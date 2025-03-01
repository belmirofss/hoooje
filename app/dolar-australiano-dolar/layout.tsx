import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Australiano para Dólar",
  description: "Cotação do Dólar Australiano hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
