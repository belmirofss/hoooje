import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Litecoin para Euro",
  description: "Cotação do Litecoin hoje para Euro",
  keywords: ["cotação", "litecoin", "euro", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
