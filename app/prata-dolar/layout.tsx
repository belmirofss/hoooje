import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Prata para Dólar",
  description: "Cotação da Onça de Prata hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
