const API_URL =
  process.env.QUOTES_API_URL || "https://economia.awesomeapi.com.br";

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

export type HistoryPoint = { time: number; value: number };

const responseKey = (code: string) => code.replace("-", "");

const getJson = async (path: string, revalidate: number) => {
  const response = await fetch(`${API_URL}${path}`, { next: { revalidate } });
  if (!response.ok) throw new Error(`${response.status} on ${path}`);
  return response.json();
};

export const fetchCurrency = async (code: string): Promise<Quote | null> => {
  try {
    const data = await getJson(`/last/${code}`, 60);
    return data[responseKey(code)] ?? null;
  } catch {
    return null;
  }
};

export const fetchCurrencies = async (
  codes: string[]
): Promise<Record<string, Quote | null>> => {
  const unique = [...new Set(codes)];
  const batches: string[][] = [];
  for (let i = 0; i < unique.length; i += BATCH_SIZE) {
    batches.push(unique.slice(i, i + BATCH_SIZE));
  }

  const results = await Promise.all(
    batches.map(async (batch) => {
      try {
        const data = await getJson(`/last/${batch.join(",")}`, 60);
        return batch.map((code) => [code, data[responseKey(code)] ?? null]);
      } catch {
        // One unknown pair fails the whole batch, so fall back to one by one.
        return Promise.all(
          batch.map(async (code) => [code, await fetchCurrency(code)])
        );
      }
    })
  );

  return Object.fromEntries(results.flat());
};

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
