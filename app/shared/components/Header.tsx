import Link from "next/link";

const NAV = [
  { href: "/#moedas", label: "Moedas" },
  { href: "/#cripto", label: "Cripto" },
  { href: "/#metais", label: "Ouro & Prata" },
];

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 pt-5 pb-3 sm:px-8 sm:pt-6">
      <Link href="/" className="font-honk text-4xl leading-none sm:text-5xl">
        HOOOJE
      </Link>
      <nav
        aria-label="Principal"
        className="no-scrollbar -mx-4 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:w-auto sm:px-0"
      >
        {/* Plain anchors: the home grid listens to hashchange to switch tabs. */}
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border-[2.5px] border-ink bg-white px-4 py-2 font-semibold hover:text-pop-blue"
          >
            {item.label}
          </a>
        ))}
        <Link
          href="/dolar#converter"
          className="shrink-0 rounded-full border-[2.5px] border-ink bg-ink px-4 py-2 font-semibold text-pop-yellow"
        >
          Conversor
        </Link>
      </nav>
    </header>
  );
};
