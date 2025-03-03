import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Euro para Dólar",
  description: "Cotação do Euro hoje para Dólar",
  keywords: ["cotação", "euro", "dólar", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
