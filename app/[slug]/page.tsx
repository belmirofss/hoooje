import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchCurrencies,
  fetchCurrency,
  fetchHistory,
} from "../shared/api/fetchCurrency";
import { Converter } from "../shared/components/Converter";
import { HistoryChart } from "../shared/components/HistoryChart";
import { Badge, ChangePill, QuoteCard } from "../shared/components/QuoteCard";
import {
  CATEGORY_LABELS,
  Pair,
  QUOTE_NAMES,
  baseCode,
  badgeColor,
  badgeSymbol,
  getPair,
  pairs,
  relatedPairs,
} from "../shared/data/pairs";
import { toQuoteItem } from "../shared/data/quoteItems";
import { formatQuote, formatTime } from "../shared/helpers/formatQuote";

export const revalidate = 60;
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () =>
  pairs.map((pair) => ({ slug: pair.slug }));

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const pair = getPair((await params).slug);
  return pair ? pair.meta : {};
};

const QUOTE_SYMBOLS = { BRL: "R$", USD: "US$", EUR: "€", GBP: "£" };

export default async function QuotePage({ params }: Props) {
  const pair = getPair((await params).slug);
  if (!pair) notFound();

  const related = relatedPairs(pair);
  const [quote, history, relatedQuotes] = await Promise.all([
    fetchCurrency(pair.code),
    fetchHistory(pair.code),
    fetchCurrencies(related.map((other) => other.code)),
  ]);

  const quoteName = QUOTE_NAMES[pair.quote];
  const fmt = (value: string | number) =>
    formatQuote(value, pair.quote, pair.decimals);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 pt-2 sm:px-8">
      <nav aria-label="Trilha" className="text-[15px] font-semibold">
        <Link href="/" className="underline">
          Início
        </Link>{" "}
        /{" "}
        <a href={`/#${pair.category}`} className="underline">
          {CATEGORY_LABELS[pair.category]}
        </a>{" "}
        / {pair.name} → {quoteName}
      </nav>

      <div className="flex flex-wrap items-start gap-7">
        <div className="flex min-w-0 flex-[999_1_600px] flex-col gap-7">
          <section className="flex flex-col gap-4 rounded-[26px] border-[2.5px] border-ink bg-white p-6 shadow-pop-lg sm:p-8">
            <div className="flex items-center gap-2.5">
              <Badge
                symbol={badgeSymbol(pair)}
                color={badgeColor(pair)}
                size="lg"
              />
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 10h22M17 3l7 7-7 7" />
              </svg>
              <Badge
                symbol={QUOTE_SYMBOLS[pair.quote]}
                color="var(--color-pop-lime)"
                size="lg"
              />
            </div>
            <h1 className="text-2xl leading-snug font-semibold sm:text-3xl">
              A cotação {pair.article}{" "}
              <span className="rounded-md bg-pop-yellow px-1.5 font-extrabold">
                {pair.name}
              </span>{" "}
              em {quoteName} hoje é
            </h1>
            {quote ? (
              <>
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="text-6xl leading-none font-extrabold tracking-[-0.045em] break-all sm:text-8xl">
                    {fmt(quote.ask)}
                  </span>
                  <ChangePill
                    pct={Number(quote.pctChange)}
                    className="border-[2.5px] border-ink text-lg sm:text-xl"
                  />
                </div>
                <p className="text-[15px] text-muted">
                  Valor de venda · atualizado hoje às{" "}
                  {formatTime(quote.timestamp)} (Brasília)
                </p>
              </>
            ) : (
              <p className="text-xl font-semibold">
                Cotação indisponível no momento. Tente de novo em instantes.
              </p>
            )}
          </section>

          <section className="flex flex-col gap-4 rounded-[26px] border-[2.5px] border-ink bg-white p-6 shadow-pop-lg">
            <h2 className="text-2xl font-extrabold">Histórico</h2>
            <HistoryChart
              points={history}
              currency={pair.quote}
              decimals={pair.decimals}
              name={`${pair.name} em ${quoteName}`}
            />
          </section>
        </div>

        <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-7">
          {quote ? (
            <Converter
              rate={Number(quote.ask)}
              baseCode={baseCode(pair)}
              baseName={pair.name}
              quote={pair.quote}
              quoteName={quoteName}
              showIof={pair.quote === "BRL" && pair.category === "moedas"}
              precise={pair.category === "cripto"}
            />
          ) : null}

          {quote ? (
            <section className="rounded-[26px] border-[2.5px] border-ink bg-white p-6 shadow-pop-lg">
              <h2 className="mb-3 text-[22px] font-extrabold">
                Hoje em números
              </h2>
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
          ) : null}
        </aside>
      </div>

      {related.length ? (
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold">Veja também</h2>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {related.map((other) => (
              <QuoteCard
                key={other.slug}
                item={toQuoteItem(other, relatedQuotes[other.code])}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-[26px] border-[2.5px] border-ink bg-white px-6 py-2 sm:px-7">
        {faq(pair).map(({ question, answer }) => (
          <details
            key={question}
            className="group border-b-2 border-ink py-4 last:border-0"
          >
            <summary className="flex cursor-pointer justify-between gap-3 text-lg font-extrabold">
              {question}
              <span
                aria-hidden="true"
                className="text-2xl leading-none transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2.5 leading-relaxed text-neutral-700">{answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

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

const faq = (pair: Pair) => {
  const items = [
    {
      question: "Qual a diferença entre compra e venda?",
      answer:
        "Compra é quanto as instituições pagam pela moeda; venda é quanto você paga para comprá-la. O valor em destaque é o de venda.",
    },
  ];
  if (pair.name.startsWith("Dólar") && pair.category === "moedas") {
    items.push({
      question: "Qual a diferença entre dólar comercial e turismo?",
      answer:
        "O comercial é usado entre bancos e empresas. O turismo é o que você paga na casa de câmbio e inclui custos de logística e margem, por isso costuma ser mais caro.",
    });
  }
  if (pair.category === "metais") {
    items.push({
      question: "Quanto pesa uma onça?",
      answer:
        "A cotação de metais preciosos usa a onça troy, que equivale a cerca de 31,1 gramas.",
    });
  }
  items.push({
    question: "De onde vêm esses números?",
    answer:
      "Da AwesomeAPI, atualizada a cada minuto. São valores de referência: confira com seu banco ou corretora antes de operar.",
  });
  return items;
};
