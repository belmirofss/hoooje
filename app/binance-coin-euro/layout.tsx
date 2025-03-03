import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Binance Coin para Euro",
  description: "Cotação do Binance Coin hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
