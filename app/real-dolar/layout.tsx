import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Real para Dólar",
  description: "Cotação do Real hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
