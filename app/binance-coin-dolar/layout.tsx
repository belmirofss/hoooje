import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Binance Coin para Dólar",
  description: "Cotação do Binance Coin hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
