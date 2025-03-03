import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Prata para Euro",
  description: "Cotação da Onça de Prata hoje para Euro",
  keywords: ["cotação", "onça de prata", "euro", "prata", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
