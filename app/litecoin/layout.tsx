import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Litecoin",
  description: "Cotação do Litecoin hoje para Real",
  keywords: ["cotação", "litecoin", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
