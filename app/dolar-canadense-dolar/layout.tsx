import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Canadense para Dólar",
  description: "Cotação do Dólar Canadense hoje para Dólar",
  keywords: ["cotação", "dólar canadense", "dólar", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
