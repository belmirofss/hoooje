"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  API_URL,
  ApiError,
  chunk,
  fetchBatch,
  type Quote,
  type Quotes,
} from "../api/quotes";

const REFRESH_MS = 60_000;

export const browserJson = async (path: string) => {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) throw new ApiError(response.status, path);
  return response.json();
};

const QuotesContext = createContext<{ quotes: Quotes; loading: boolean }>({
  quotes: {},
  loading: false,
});

// The server render can come back empty when AwesomeAPI rate-limits Vercel's
// shared IPs. The visitor's browser has its own limit, so it fills the gaps
// and keeps the numbers fresh while the tab is open.
export const QuotesProvider = ({
  initial,
  codes,
  children,
}: {
  initial: Quotes;
  codes: string[];
  children: React.ReactNode;
}) => {
  const [quotes, setQuotes] = useState(initial);
  const [loading, setLoading] = useState(() =>
    codes.some((code) => !initial[code])
  );

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const results = await Promise.all(
        chunk(codes).map((batch) => fetchBatch(browserJson, batch))
      );
      if (cancelled) return;
      setQuotes((current) => {
        const next = { ...current };
        for (const [code, quote] of results.flat()) {
          if (quote) next[code] = quote;
        }
        return next;
      });
      setLoading(false);
    };

    if (codes.some((code) => !initial[code])) load();
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") load();
    }, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [codes, initial]);

  return (
    <QuotesContext.Provider value={{ quotes, loading }}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuote = (code: string): Quote | null =>
  useContext(QuotesContext).quotes[code] ?? null;

export const useQuotesLoading = () => useContext(QuotesContext).loading;
