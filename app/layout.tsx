import type { Metadata } from "next";
import { Bricolage_Grotesque, Honk } from "next/font/google";
import "./globals.css";
import { AdSense } from "./shared/components/AdSense";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const honk = Honk({
  variable: "--font-honk-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoooje - Cotações de moedas e criptomoedas",
  description:
    "Cotações atualizadas de moedas e criptomoedas. Acompanhe o Dólar, Euro, Bitcoin, Ethereum e taxas econômicas como Selic e inflação.",
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
  other: {
    "google-adsense-account": process.env.PUBLISHER_ID || "",
  },
  alternates: {
    canonical: "./",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${honk.variable}`}>
      <head>
        <AdSense />
      </head>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.G_ID || ""} />
    </html>
  );
}
