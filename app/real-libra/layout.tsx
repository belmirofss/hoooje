import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Real para Libra",
  description: "Cotação do Real hoje para Libra",
  keywords: ["cotação", "real", "libra", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
