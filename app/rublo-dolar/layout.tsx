import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rublo para Dólar",
  description: "Cotação do Rublo hoje para Dólar",
  keywords: ["cotação", "rublo", "dólar", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
