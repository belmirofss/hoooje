import Link from "next/link";
import { SearchBox } from "./shared/components/SearchBox";
import { badgeColor, getPair, pairLabel, pairs } from "./shared/data/pairs";

const SUGGESTIONS = ["dolar", "euro", "bitcoin", "ouro"];

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-10 text-center">
      <div className="relative h-48 w-64">
        <div className="absolute inset-0 flex -rotate-6 items-center justify-center rounded-[28px] border-[2.5px] border-ink bg-white shadow-pop-lg">
          <span className="font-honk text-[120px] leading-none">404</span>
        </div>
        <span
          aria-hidden="true"
          className="absolute -top-3.5 -right-2.5 rotate-8 rounded-full border-[2.5px] border-ink bg-pop-pink px-3 py-1.5 font-extrabold"
        >
          ▼ 100%
        </span>
      </div>
      <h1 className="mt-3 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
        Essa moeda saiu de circulação.
      </h1>
      <p className="text-lg">
        A página não existe — mas a cotação que você procura deve estar aqui:
      </p>
      <SearchBox
        placeholder="Buscar moeda ou cripto"
        entries={pairs.map((pair) => ({
          slug: pair.slug,
          label: pairLabel(pair),
        }))}
      />
      <div className="flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((slug) => {
          const pair = getPair(slug)!;
          return (
            <Link
              key={slug}
              href={`/${slug}`}
              style={{ background: badgeColor(pair) }}
              className="rounded-full border-[2.5px] border-ink px-4 py-2.5 font-bold"
            >
              {pair.name}
            </Link>
          );
        })}
      </div>
      <Link
        href="/"
        className="mt-2 rounded-2xl bg-ink px-6 py-4 text-lg font-extrabold text-pop-yellow"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
