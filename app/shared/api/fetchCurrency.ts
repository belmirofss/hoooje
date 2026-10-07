import { unstable_cache } from "next/cache";
import { pairs } from "../data/pairs";
import {
  API_URL,
  ApiError,
  chunk,
  fetchBatch,
  historyPath,
  toHistory,
  type HistoryPoint,
  type Quotes,
} from "./quotes";

// Optional. Without a key AwesomeAPI rate-limits per IP and Vercel's IPs are
// shared, so server calls can get HTTP 429; the browser then fills the gaps.
const API_TOKEN = process.env.AWESOMEAPI_TOKEN;

// A free key gets 100k requests a month. At most 4 quote batches every 2
// minutes plus each pair's history every 6 hours stays under that; the
// browser refreshes the quotes every minute on its own quota anyway.
const QUOTES_TTL = 120;
const HISTORY_TTL = 6 * 60 * 60;

// Every page reads the same batches of every pair, so they are fetched a
// handful of times per minute instead of once per page.
const BATCHES = chunk(pairs.map((pair) => pair.code));

const getJson = (revalidate: number) => async (path: string) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: API_TOKEN ? { "x-api-key": API_TOKEN } : undefined,
    next: { revalidate },
  });
  if (!response.ok) {
    const error = new ApiError(response.status, path);
    console.error(`AwesomeAPI: ${error.message}`);
    throw error;
  }
  return response.json();
};

let pending: Promise<Quotes> | null = null;

// Cached as a whole so a failing batch (only successful fetches are cached)
// isn't retried by every page render, and concurrent misses share one load.
export const fetchQuotes = unstable_cache(
  () =>
    (pending ??= Promise.all(
      BATCHES.map((batch) => fetchBatch(getJson(QUOTES_TTL), batch))
    )
      .then((results) => Object.fromEntries(results.flat()))
      .finally(() => (pending = null))),
  ["quotes"],
  { revalidate: QUOTES_TTL }
);

export const fetchHistory = async (code: string): Promise<HistoryPoint[]> => {
  try {
    return toHistory(await getJson(HISTORY_TTL)(historyPath(code)));
  } catch {
    return [];
  }
};
