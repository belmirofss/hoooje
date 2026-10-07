import type { QuoteItem } from "../components/QuoteCard";
import { Pair, QUOTE_NAMES, badgeColor, badgeSymbol } from "./pairs";

export const toQuoteItem = (pair: Pair): QuoteItem => ({
  slug: pair.slug,
  code: pair.code,
  name: pair.name,
  quoteName: QUOTE_NAMES[pair.quote],
  currency: pair.quote,
  decimals: pair.decimals,
  category: pair.category,
  symbol: badgeSymbol(pair),
  color: badgeColor(pair),
});
