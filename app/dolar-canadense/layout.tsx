import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Canadense",
  description: "Cotação do Dólar Canadense hoje para Real",
  keywords: ["cotação", "dólar canadense", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
