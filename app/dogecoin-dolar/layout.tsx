import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dogecoin para Dólar",
  description: "Cotação do Dogecoin hoje para Dólar",
  keywords: ["cotação", "dogecoin", "dólar", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
