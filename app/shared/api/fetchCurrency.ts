import { unstable_cache } from "next/cache";
import { pairs } from "../data/pairs";

const API_URL =
  process.env.QUOTES_API_URL || "https://economia.awesomeapi.com.br";

// Without a key AwesomeAPI rate-limits per IP, and Vercel's IPs are shared,
// so unauthenticated calls often get HTTP 429. Free key: awesomeapi.com.br
const API_TOKEN = process.env.AWESOMEAPI_TOKEN;

const BATCH_SIZE = 20;

// Every page reads the same batches of every pair, so they are fetched a
// handful of times per minute instead of once per page.
const BATCHES: string[][] = [];
for (let i = 0; i < pairs.length; i += BATCH_SIZE) {
  BATCHES.push(pairs.slice(i, i + BATCH_SIZE).map((pair) => pair.code));
}

export type Quote = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

export type HistoryPoint = { time: number; value: number };

class ApiError extends Error {
  constructor(
    public status: number,
    path: string
  ) {
    super(`${status} on ${path}`);
  }
}

const responseKey = (code: string) => code.replace("-", "");

const getJson = async (path: string, revalidate: number) => {
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

const fetchOne = async (code: string): Promise<Quote | null> => {
  try {
    const data = await getJson(`/last/${code}`, 60);
    return data[responseKey(code)] ?? null;
  } catch {
    return null;
  }
};

const fetchBatch = async (batch: string[]) => {
  try {
    const data = await getJson(`/last/${batch.join(",")}`, 60);
    return batch.map((code) => [code, data[responseKey(code)] ?? null]);
  } catch (error) {
    // One unknown pair 404s the whole batch, so then go one by one. Any other
    // failure (429, 5xx) would only fail again, twenty times over.
    if (error instanceof ApiError && error.status === 404) {
      return Promise.all(
        batch.map(async (code) => [code, await fetchOne(code)])
      );
    }
    return batch.map((code) => [code, null]);
  }
};

let pending: Promise<Record<string, Quote | null>> | null = null;

// Cached as a whole so a failing batch (only successful fetches are cached)
// isn't retried by every page render, and concurrent misses share one load.
export const fetchQuotes = unstable_cache(
  () =>
    (pending ??= Promise.all(BATCHES.map(fetchBatch))
      .then((results) => Object.fromEntries(results.flat()))
      .finally(() => (pending = null))),
  ["quotes"],
  { revalidate: 60 }
);

export const fetchHistory = async (
  code: string,
  days = 360
): Promise<HistoryPoint[]> => {
  try {
    const data: { bid: string; timestamp: string }[] = await getJson(
      `/json/daily/${code}/${days}`,
      3600
    );
    return data
      .map((point) => ({
        time: Number(point.timestamp) * 1000,
        value: Number(point.bid),
      }))
      .filter((point) => Number.isFinite(point.value) && point.time > 0)
      .sort((a, b) => a.time - b.time);
  } catch {
    return [];
  }
};
