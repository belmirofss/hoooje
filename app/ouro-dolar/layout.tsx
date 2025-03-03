import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Ouro para Dólar",
  description: "Cotação da Onça de Ouro hoje para Dólar",
  keywords: ["cotação", "onça de ouro", "dólar", "ouro", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
