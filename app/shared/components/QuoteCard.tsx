import Link from "next/link";
import type { Category } from "../data/pairs";
import { formatPercent } from "../helpers/formatPercent";

export type QuoteItem = {
  slug: string;
  name: string;
  quoteName: string;
  category: Category;
  symbol: string;
  color: string;
  value: string | null;
  pct: number | null;
};

export const Badge = ({
  symbol,
  color,
  size = "md",
}: {
  symbol: string;
  color: string;
  size?: "md" | "lg";
}) => (
  <span
    aria-hidden="true"
    style={{ background: color }}
    className={`inline-flex shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink font-extrabold ${
      size === "lg"
        ? "h-14 min-w-14 px-1.5 text-base"
        : "h-11 min-w-11 px-1 text-sm"
    }`}
  >
    {symbol}
  </span>
);

export const ChangePill = ({
  pct,
  suffix = "",
  className = "",
}: {
  pct: number | null;
  suffix?: string;
  className?: string;
}) => {
  if (pct === null || Number.isNaN(pct)) return null;
  const up = pct >= 0;
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 font-bold whitespace-nowrap ${
        up ? "bg-up-bg text-up-fg" : "bg-down-bg text-down-fg"
      } ${className}`}
    >
      <span aria-hidden="true">{up ? "▲" : "▼"} </span>
      {formatPercent(pct)}
      {suffix}
    </span>
  );
};

// Compact list row on phones, stacked card from sm up.
export const QuoteCard = ({ item }: { item: QuoteItem }) => (
  <Link
    href={`/${item.slug}`}
    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 rounded-2xl border-[2.5px] border-ink bg-white px-3.5 py-3 shadow-pop-sm transition [grid-template-areas:'badge_name_value'_'badge_name_pill'] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-pop-hover sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-y-3 sm:rounded-[20px] sm:p-5 sm:shadow-pop sm:[grid-template-areas:'badge_pill'_'name_name'_'value_value']"
  >
    <span className="[grid-area:badge]">
      <Badge symbol={item.symbol} color={item.color} />
    </span>
    <ChangePill
      pct={item.pct}
      className="justify-self-end text-[13px] [grid-area:pill] max-sm:bg-transparent max-sm:p-0 sm:text-sm"
    />
    <span className="font-bold [grid-area:name] sm:font-semibold sm:text-neutral-700">
      {item.name} → {item.quoteName}
    </span>
    <span className="justify-self-end text-lg leading-tight font-extrabold tracking-tight break-words [grid-area:value] sm:justify-self-start sm:text-[28px]">
      {item.value ?? "—"}
    </span>
  </Link>
);
