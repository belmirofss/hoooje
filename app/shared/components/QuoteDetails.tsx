"use client";

import type { QuoteCurrency } from "../data/pairs";
import { formatNumber, formatQuote, formatTime } from "../helpers/formatQuote";
import { Converter } from "./Converter";
import { useQuote, useQuotesLoading } from "./LiveQuotes";
import { ChangePill } from "./QuoteCard";

type Props = { code: string; currency: QuoteCurrency; decimals: number };

export const QuoteHeadline = ({ code, currency, decimals }: Props) => {
  const quote = useQuote(code);
  const loading = useQuotesLoading();

  if (!quote) {
    return (
      <p className="text-xl font-semibold">
        {loading
          ? "Carregando cotação…"
          : "Cotação indisponível no momento. Tente de novo em instantes."}
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-4">
        <span className="text-6xl leading-none font-extrabold tracking-[-0.045em] break-all sm:text-8xl">
          {formatQuote(quote.ask, currency, decimals)}
        </span>
        <ChangePill
          pct={Number(quote.pctChange)}
          className="border-[2.5px] border-ink text-lg sm:text-xl"
        />
      </div>
      <p className="text-[15px] text-muted">
        Valor de venda · atualizado hoje às {formatTime(quote.timestamp)}{" "}
        (Brasília)
      </p>
    </>
  );
};

// Plain-language recap of the numbers; it's what search snippets pick up.
export const QuoteSummary = ({
  code,
  currency,
  decimals,
  name,
}: Props & { name: string }) => {
  const quote = useQuote(code);
  if (!quote) return null;

  const fmt = (value: string) => formatQuote(value, currency, decimals);
  const pct = Number(quote.pctChange);
  const change = pct
    ? `${pct > 0 ? "alta" : "queda"} de ${formatNumber(Math.abs(pct))}% no dia`
    : "estável no dia";

  return (
    <p className="text-lg leading-relaxed">
      Hoje, 1 {name} vale {fmt(quote.ask)} na venda e {fmt(quote.bid)} na
      compra, {change}. A máxima foi de {fmt(quote.high)} e a mínima, de{" "}
      {fmt(quote.low)}.
    </p>
  );
};

export const QuoteSidebar = ({
  code,
  currency,
  decimals,
  baseCode,
  baseName,
  quoteName,
  showIof,
  precise,
}: Props & {
  baseCode: string;
  baseName: string;
  quoteName: string;
  showIof: boolean;
  precise: boolean;
}) => {
  const quote = useQuote(code);
  if (!quote) return null;

  const fmt = (value: string | number) =>
    formatQuote(value, currency, decimals);

  return (
    <>
      <Converter
        rate={Number(quote.ask)}
        baseCode={baseCode}
        baseName={baseName}
        quote={currency}
        quoteName={quoteName}
        showIof={showIof}
        precise={precise}
      />

      <section className="rounded-[26px] border-[2.5px] border-ink bg-white p-6 shadow-pop-lg">
        <h2 className="mb-3 text-[22px] font-extrabold">Hoje em números</h2>
        <dl className="grid grid-cols-2 gap-3">
          <Stat label="Compra" value={fmt(quote.bid)} />
          <Stat label="Venda" value={fmt(quote.ask)} />
          <Stat label="Máxima" value={fmt(quote.high)} tone="up" />
          <Stat label="Mínima" value={fmt(quote.low)} tone="down" />
          <Stat
            label="Variação"
            value={`${Number(quote.varBid) >= 0 ? "+" : "−"}${fmt(Math.abs(Number(quote.varBid)))}`}
          />
          <Stat label="Atualizado" value={formatTime(quote.timestamp)} />
        </dl>
      </section>
    </>
  );
};

const STAT_TONES = {
  neutral: "bg-neutral-100 text-muted",
  up: "bg-up-bg text-up-fg",
  down: "bg-down-bg text-down-fg",
};

const Stat = ({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: keyof typeof STAT_TONES;
}) => (
  <div className={`rounded-2xl p-3 ${STAT_TONES[tone]}`}>
    <dt className="text-[13px]">{label}</dt>
    <dd className="text-lg font-extrabold break-words text-ink">{value}</dd>
  </div>
);
