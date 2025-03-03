import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar de Hong Kong",
  description: "Cotação do Dólar de Hong Kong hoje para Real",
  keywords: ["cotação", "dólar de hong kong", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
