import Link from "next/link";
import { pairLabel, pairs } from "../data/pairs";

const POPULAR = pairs.filter((pair) => pair.popular);

export const Footer = () => {
  return (
    <footer className="mt-12 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-8">
        <Link href="/" className="font-honk text-4xl leading-none">
          HOOOJE
        </Link>
        <p className="max-w-lg text-[15px] text-neutral-300">
          Dados da AwesomeAPI, atualizados a cada minuto. Valores de referência.
        </p>
        <nav aria-label="Cotações mais buscadas" className="w-full">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-neutral-300">
            {POPULAR.map((pair) => (
              <li key={pair.slug}>
                <Link href={`/${pair.slug}`} className="hover:text-white">
                  {pairLabel(pair)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
