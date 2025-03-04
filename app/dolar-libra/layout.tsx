import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar para Libra",
  description: "Cotação do Dólar hoje para Libra",
  keywords: ["cotação", "dolar", "libra", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
