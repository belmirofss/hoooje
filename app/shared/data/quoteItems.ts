import type { Quote } from "../api/fetchCurrency";
import type { QuoteItem } from "../components/QuoteCard";
import { formatQuote } from "../helpers/formatQuote";
import { Pair, QUOTE_NAMES, badgeColor, badgeSymbol } from "./pairs";

export const toQuoteItem = (pair: Pair, quote: Quote | null): QuoteItem => ({
  slug: pair.slug,
  name: pair.name,
  quoteName: QUOTE_NAMES[pair.quote],
  category: pair.category,
  symbol: badgeSymbol(pair),
  color: badgeColor(pair),
  value: quote ? formatQuote(quote.ask, pair.quote, pair.decimals) : null,
  pct: quote ? Number(quote.pctChange) : null,
});
