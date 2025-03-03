import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Real para Euro",
  description: "Cotação do Real hoje para Euro",
  keywords: ["cotação", "real", "euro", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
