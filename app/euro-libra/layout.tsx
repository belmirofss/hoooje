import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Euro para Libra",
  description: "Cotação do Euro hoje para Libra",
  keywords: ["cotação", "euro", "libra", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
