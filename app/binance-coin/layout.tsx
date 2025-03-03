import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Binance Coin",
  description: "Cotação do Binance Coin hoje para Real",
  keywords: ["cotação", "binance coin", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
