import type { Metadata } from "next";
import { Lato, Honk } from "next/font/google";
import "./globals.css";

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const honkSans = Honk({
  variable: "--font-honk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoooje",
  description:
    "Cotações atualizadas de moedas e criptomoedas, como Dólar, Euro, Libra, Bitcoin, Ethereum, entre várias outras. Preços de ouro e prata. Também acompanhe as taxas econômicas, como a taxa Selic e a inflação.",
  keywords: [
    "cotação",
    "moeda",
    "criptomoeda",
    "ouro",
    "prata",
    "taxa selic",
    "inflação",
    "dólar",
    "euro",
    "libra",
    "bitcoin",
    "ethereum",
    "câmbio",
    "taxas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${latoSans.variable} ${honkSans.variable} antialiased`}>
        <div className="h-full w-full flex flex-row justify-center p-6">
          <main className="w-full md:max-w-xl flex flex-col">
            <span className={`${honkSans.className} text-4xl`}>HOOOJE</span>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
