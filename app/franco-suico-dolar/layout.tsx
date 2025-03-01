import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Franco Suiço para Dólar",
  description: "Cotação do Franco Suiço hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
