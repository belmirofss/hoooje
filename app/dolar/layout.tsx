import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar",
  description: "Cotação do Dólar hoje para Real",
  keywords: ["cotação", "dólar", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
