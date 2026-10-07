import { fetchQuotes } from "./shared/api/fetchCurrency";
import { QuotesProvider } from "./shared/components/LiveQuotes";
import { Sticker } from "./shared/components/QuoteCard";
import { QuoteGrid } from "./shared/components/QuoteGrid";
import { SearchBox } from "./shared/components/SearchBox";
import { pairLabel, pairs } from "./shared/data/pairs";
import { toQuoteItem } from "./shared/data/quoteItems";
import { formatTime, formatToday } from "./shared/helpers/formatQuote";

export const revalidate = 60;

const STICKERS = [
  { slug: "dolar", className: "left-0 top-0 md:w-[270px] -rotate-3 bg-white" },
  {
    slug: "euro",
    className: "right-0 top-[40px] md:w-[240px] rotate-4 bg-pop-pink",
  },
  {
    slug: "bitcoin",
    className:
      "left-[40px] bottom-0 md:w-[340px] rotate-[1.5deg] bg-ink text-white",
  },
];

// Popular pairs first, then the rest by the priority they already had in the sitemap.
const ordered = [...pairs].sort(
  (a, b) => Number(!!b.popular) - Number(!!a.popular) || b.priority - a.priority
);

const CODES = ordered.map((pair) => pair.code);

export default async function Home() {
  const quotes = await fetchQuotes();
  const items = ordered.map(toQuoteItem);
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]));
  const updatedAt = quotes["USD-BRL"]?.timestamp;

  return (
    <QuotesProvider initial={quotes} codes={CODES}>
      <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-12 px-4 pt-6 pb-14 sm:px-8">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
          <span className="self-start rounded-full bg-ink px-3.5 py-1.5 text-sm font-semibold text-pop-yellow">
            {formatToday()}
            {updatedAt ? ` · atualizado às ${formatTime(updatedAt)}` : ""}
          </span>
          <h1 className="text-5xl leading-[0.95] font-extrabold tracking-[-0.03em] sm:text-7xl">
            Quanto vale o seu dinheiro hoje?
          </h1>
          <p className="max-w-lg text-lg leading-relaxed sm:text-xl">
            Cotação atualizada a cada minuto, sem enrolação.
          </p>
          <SearchBox
            entries={pairs.map((pair) => ({
              slug: pair.slug,
              label: pairLabel(pair),
            }))}
          />
        </div>

        {/* Mobile: swipeable row. Desktop: overlapping tilted stickers. */}
        <div className="no-scrollbar -mx-4 flex min-w-0 flex-[1_1_100%] snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:relative md:mx-0 md:block md:h-[540px] md:flex-[1_1_420px] md:overflow-visible md:px-0">
          {STICKERS.map(({ slug, className }) => (
            <Sticker key={slug} item={bySlug[slug]} className={className} />
          ))}
        </div>
      </section>

      <section className="border-y-[2.5px] border-ink bg-white">
        <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-8">
          {["moedas", "cripto", "metais", "cotacoes"].map((id) => (
            <span key={id} id={id} className="absolute top-0 scroll-mt-4" />
          ))}
          <QuoteGrid items={items} />
        </div>
      </section>
    </QuotesProvider>
  );
}
