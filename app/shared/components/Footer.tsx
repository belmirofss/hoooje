import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-12 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-8">
        <Link href="/" className="font-honk text-4xl leading-none">
          HOOOJE
        </Link>
        <p className="max-w-lg text-[15px] text-neutral-300">
          Dados da AwesomeAPI, atualizados a cada minuto. Valores de referência
          — confira com seu banco ou corretora antes de operar.
        </p>
      </div>
    </footer>
  );
};
