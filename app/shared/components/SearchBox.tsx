"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { normalize } from "../helpers/normalize";
import { SearchIcon } from "./QuoteGrid";

export type SearchEntry = { slug: string; label: string };

const MAX_RESULTS = 6;

export const SearchBox = ({
  entries,
  placeholder = "Busque: dólar, bitcoin, iene…",
}: {
  entries: SearchEntry[];
  placeholder?: string;
}) => {
  const router = useRouter();
  const inputId = useId();
  const listId = useId();
  const [query, setQuery] = useState("");

  const q = normalize(query);
  const results = q
    ? entries
        .filter((entry) => normalize(entry.label).includes(q))
        .slice(0, MAX_RESULTS)
    : [];

  return (
    <form
      role="search"
      className="relative w-full max-w-xl"
      onSubmit={(event) => {
        event.preventDefault();
        if (results[0]) router.push(`/${results[0].slug}`);
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        Buscar moeda
      </label>
      <div className="flex items-center gap-3 rounded-[18px] border-[2.5px] border-ink bg-white py-2 pr-2 pl-4 shadow-pop">
        <SearchIcon />
        <input
          id={inputId}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          aria-controls={listId}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-lg outline-none"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-pop-blue px-4 py-3 font-bold text-white sm:px-5"
        >
          Buscar
        </button>
      </div>
      {q ? (
        <ul
          id={listId}
          className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-[18px] border-[2.5px] border-ink bg-white shadow-pop"
        >
          {results.length ? (
            results.map((entry) => (
              <li
                key={entry.slug}
                className="border-b-2 border-ink/10 last:border-0"
              >
                <Link
                  href={`/${entry.slug}`}
                  className="block px-4 py-3 font-semibold hover:bg-pop-yellow"
                >
                  {entry.label}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-muted">Nenhuma moeda encontrada.</li>
          )}
        </ul>
      ) : null}
    </form>
  );
};
