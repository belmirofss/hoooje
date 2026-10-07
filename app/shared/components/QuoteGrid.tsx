"use client";

import { useEffect, useState } from "react";
import type { Category } from "../data/pairs";
import { QuoteCard, type QuoteItem } from "./QuoteCard";
import { normalize } from "../helpers/normalize";

type Tab = "todas" | Category;

const TABS: { id: Tab; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "moedas", label: "Moedas" },
  { id: "cripto", label: "Cripto" },
  { id: "metais", label: "Ouro & Prata" },
];

const tabFromHash = (): Tab | null => {
  const hash = window.location.hash.slice(1);
  return TABS.some((tab) => tab.id === hash) ? (hash as Tab) : null;
};

export const QuoteGrid = ({ items }: { items: QuoteItem[] }) => {
  const [tab, setTab] = useState<Tab>("todas");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const sync = () => setTab((current) => tabFromHash() ?? current);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const q = normalize(query);
  const visible = items.filter(
    (item) =>
      (tab === "todas" || item.category === tab) &&
      (!q || normalize(`${item.name} ${item.quoteName}`).includes(q))
  );

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-[44px]">
            Todas as cotações
          </h2>
          <p className="mt-1 text-muted" aria-live="polite">
            {visible.length} {visible.length === 1 ? "cotação" : "cotações"} ·
            toque para ver detalhes e converter
          </p>
        </div>
        <label className="flex w-full items-center gap-2 rounded-2xl border-[2.5px] border-ink bg-white px-4 sm:w-64">
          <span className="sr-only">Filtrar cotações</span>
          <SearchIcon />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrar…"
            className="min-w-0 flex-1 bg-transparent py-3 text-base outline-none"
          />
        </label>
      </div>

      <div
        role="tablist"
        aria-label="Categorias"
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pt-0.5 pb-1.5 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {TABS.map(({ id, label }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(id)}
              className={`min-h-11 shrink-0 cursor-pointer rounded-full border-[2.5px] border-ink px-4 font-bold ${
                active ? "bg-ink text-pop-yellow" : "bg-white shadow-pop-sm"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item) => (
            <QuoteCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <p className="rounded-[20px] border-[2.5px] border-dashed border-ink p-8 text-center text-lg">
          Nada por aqui. Tente “dólar” ou “bitcoin”.
        </p>
      )}
    </div>
  );
};

export const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);
