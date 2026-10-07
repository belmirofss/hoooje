"use client";

import { useState } from "react";
import type { HistoryPoint } from "../api/fetchCurrency";
import type { QuoteCurrency } from "../data/pairs";
import { formatQuote } from "../helpers/formatQuote";
import { formatPercent } from "../helpers/formatPercent";

const DAY = 24 * 60 * 60 * 1000;
const WIDTH = 800;
const HEIGHT = 260;
const PAD = 16;

const PERIODS = [
  { id: "7D", days: 7 },
  { id: "30D", days: 30 },
  { id: "6M", days: 182 },
  { id: "1A", days: 365 },
];

const formatDate = (time: number) =>
  new Date(time).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    timeZone: "America/Sao_Paulo",
  });

export const HistoryChart = ({
  points,
  currency,
  decimals,
  name,
}: {
  points: HistoryPoint[];
  currency: QuoteCurrency;
  decimals: number;
  name: string;
}) => {
  const [period, setPeriod] = useState("30D");
  const days = PERIODS.find((item) => item.id === period)!.days;
  const last = points[points.length - 1];
  const visible = last
    ? points.filter((point) => point.time >= last.time - days * DAY)
    : [];

  if (visible.length < 2) {
    return <p className="text-muted">Histórico indisponível para este par.</p>;
  }

  const values = visible.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const y = (value: number) =>
    PAD + (HEIGHT - 2 * PAD) * (1 - (value - min) / (max - min || 1));
  const x = (index: number) => (index * WIDTH) / (visible.length - 1);
  const line = visible
    .map(
      (point, i) =>
        `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(point.value).toFixed(1)}`
    )
    .join(" ");
  const change = (values[values.length - 1] / values[0] - 1) * 100;
  const up = change >= 0;
  const fmt = (value: number) => formatQuote(value, currency, decimals);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15px] text-muted">
          No período:{" "}
          <b className={up ? "text-up-fg" : "text-down-fg"}>
            {up ? "▲" : "▼"} {formatPercent(change)}
          </b>{" "}
          · mín. {fmt(min)} · máx. {fmt(max)}
        </p>
        <div
          role="tablist"
          aria-label="Período"
          className="flex gap-1.5 rounded-full border-[2.5px] border-ink bg-neutral-100 p-1"
        >
          {PERIODS.map((item) => {
            const active = item.id === period;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setPeriod(item.id)}
                className={`min-h-10 min-w-13 cursor-pointer rounded-full font-bold ${
                  active ? "bg-ink text-pop-yellow" : ""
                }`}
              >
                {item.id}
              </button>
            );
          })}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`Gráfico de ${name}: de ${fmt(values[0])} a ${fmt(values[values.length - 1])} no período`}
        className="block h-56 w-full rounded-2xl bg-neutral-50 sm:h-72"
      >
        <path
          d={`${line} L${WIDTH} ${HEIGHT} L0 ${HEIGHT} Z`}
          fill="var(--color-pop-sky)"
          opacity="0.55"
        />
        <path
          d={line}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex justify-between text-sm text-muted">
        <span>{formatDate(visible[0].time)}</span>
        <span>{formatDate(last.time)}</span>
      </div>
    </div>
  );
};
