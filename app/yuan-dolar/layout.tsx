import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Yuan para Dólar",
  description: "Cotação do Iene hoje para Dólar",
  keywords: ["cotação", "yuan", "dólar", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
