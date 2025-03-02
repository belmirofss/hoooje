import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Ethereum para Dólar",
  description: "Cotação do Ethereum hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
