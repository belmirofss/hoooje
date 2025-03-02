import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Litecoin para Dólar",
  description: "Cotação do Litecoin hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
