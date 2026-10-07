import type { QuoteCurrency } from "../data/pairs";
import { formatCurrencyBRL } from "./formatCurrencyBRL";
import { formatCurrencyEUR } from "./formatCurrencyEUR";
import { formatCurrencyGBP } from "./formatCurrencyGBP";
import { formatCurrencyUSD } from "./formatCurrencyUSD";

export { formatNumber, formatPercent } from "./formatPercent";

const FORMATTERS: Record<
  QuoteCurrency,
  (value: number | string | undefined, minimumFractionDigits?: number) => string
> = {
  BRL: formatCurrencyBRL,
  USD: formatCurrencyUSD,
  EUR: formatCurrencyEUR,
  GBP: formatCurrencyGBP,
};

export const formatQuote = (
  value: number | string | undefined,
  currency: QuoteCurrency,
  decimals = 2
) => FORMATTERS[currency](value, decimals);

export const formatTime = (timestamp: number | string) =>
  new Date(Number(timestamp) * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

export const formatToday = (date = new Date()) => {
  const label = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "America/Sao_Paulo",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
};
