import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Franco Suiço",
  description: "Cotação do Franco Suiço hoje para Real",
  keywords: ["cotação", "franco suiço", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
