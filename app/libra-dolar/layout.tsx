import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Libra para Dólar",
  description: "Cotação do Libra hoje para Dólar",
  keywords: ["cotação", "libra", "dólar", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
