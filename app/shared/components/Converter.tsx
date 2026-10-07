"use client";

import { useState } from "react";
import type { QuoteCurrency } from "../data/pairs";
import { formatQuote } from "../helpers/formatQuote";
import { formatNumber } from "../helpers/formatPercent";

const IOF_CARD = 0.035;

const parseAmount = (raw: string) => {
  const text = raw.trim();
  const normalized = text.includes(",")
    ? text.replace(/\./g, "").replace(",", ".")
    : text;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : 0;
};

const defaultAmount = (rate: number) =>
  rate < 0.01 ? "1000" : rate > 1000 ? "1" : "100";

type Props = {
  rate: number;
  baseCode: string;
  baseName: string;
  quote: QuoteCurrency;
  quoteName: string;
  showIof: boolean;
  precise: boolean;
};

export const Converter = ({
  rate,
  baseCode,
  baseName,
  quote,
  quoteName,
  showIof,
  precise,
}: Props) => {
  const [amount, setAmount] = useState(() => defaultAmount(rate));
  const [reversed, setReversed] = useState(false);

  const value = parseAmount(amount);
  const result = reversed ? value / rate : value * rate;
  const formatted = reversed
    ? `${formatNumber(result, precise ? 8 : 2)} ${baseCode}`
    : formatQuote(result, quote, result !== 0 && result < 1 ? 4 : 2);

  const from = reversed
    ? `${quoteName} (${quote})`
    : `${baseName} (${baseCode})`;
  const to = reversed ? `${baseName} (${baseCode})` : `${quoteName} (${quote})`;

  return (
    <section
      id="converter"
      className="flex scroll-mt-6 flex-col gap-3.5 rounded-[26px] border-[2.5px] border-ink bg-pop-blue p-6 text-white shadow-pop-lg"
    >
      <h2 className="text-2xl font-extrabold">Converter</h2>
      <label htmlFor="converter-amount" className="text-sm font-semibold">
        Você tem · {from}
      </label>
      <input
        id="converter-amount"
        inputMode="decimal"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        className="min-w-0 rounded-2xl border-[2.5px] border-ink bg-white px-4 py-3 text-3xl font-extrabold text-ink outline-none"
      />
      <button
        type="button"
        onClick={() => setReversed((current) => !current)}
        aria-label="Inverter moedas"
        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center self-center rounded-full border-[2.5px] border-ink bg-pop-yellow text-ink"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4" />
        </svg>
      </button>
      <span className="text-sm font-semibold">Você recebe · {to}</span>
      <output
        htmlFor="converter-amount"
        aria-live="polite"
        className="rounded-2xl border-[2.5px] border-ink bg-pop-yellow px-4 py-3 text-3xl font-extrabold break-words text-ink"
      >
        {formatted}
      </output>
      {showIof && !reversed ? (
        <p className="text-sm text-blue-100">
          Com IOF de cartão (3,5%):{" "}
          <b className="text-white">
            {formatQuote(result * (1 + IOF_CARD), quote)}
          </b>
        </p>
      ) : null}
    </section>
  );
};
