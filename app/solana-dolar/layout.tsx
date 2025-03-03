import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Solana para Dólar",
  description: "Cotação do Solana hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
