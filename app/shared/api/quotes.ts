// Shared by the server fetchers and the browser fallback in LiveQuotes.

export const API_URL =
  process.env.NEXT_PUBLIC_QUOTES_API_URL ||
  "https://economia.awesomeapi.com.br";

export const HISTORY_DAYS = 360;

const BATCH_SIZE = 20;

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

export type Quotes = Record<string, Quote | null>;

export type HistoryPoint = { time: number; value: number };

export class ApiError extends Error {
  constructor(
    public status: number,
    path: string
  ) {
    super(`${status} on ${path}`);
  }
}

type GetJson = (path: string) => Promise<unknown>;

export const chunk = (codes: string[]) => {
  const batches: string[][] = [];
  for (let i = 0; i < codes.length; i += BATCH_SIZE) {
    batches.push(codes.slice(i, i + BATCH_SIZE));
  }
  return batches;
};

const responseKey = (code: string) => code.replace("-", "");

const fetchOne = async (getJson: GetJson, code: string) => {
  try {
    const data = (await getJson(`/last/${code}`)) as Quotes;
    return data[responseKey(code)] ?? null;
  } catch {
    return null;
  }
};

export const fetchBatch = async (
  getJson: GetJson,
  batch: string[]
): Promise<[string, Quote | null][]> => {
  try {
    const data = (await getJson(`/last/${batch.join(",")}`)) as Quotes;
    return batch.map((code) => [code, data[responseKey(code)] ?? null]);
  } catch (error) {
    // One unknown pair 404s the whole batch, so then go one by one. Any other
    // failure (429, 5xx) would only fail again, twenty times over.
    if (error instanceof ApiError && error.status === 404) {
      return Promise.all(
        batch.map(
          async (code): Promise<[string, Quote | null]> => [
            code,
            await fetchOne(getJson, code),
          ]
        )
      );
    }
    return batch.map((code) => [code, null]);
  }
};

export const historyPath = (code: string, days = HISTORY_DAYS) =>
  `/json/daily/${code}/${days}`;

export const toHistory = (data: unknown): HistoryPoint[] =>
  (data as { bid: string; timestamp: string }[])
    .map((point) => ({
      time: Number(point.timestamp) * 1000,
      value: Number(point.bid),
    }))
    .filter((point) => Number.isFinite(point.value) && point.time > 0)
    .sort((a, b) => a.time - b.time);
