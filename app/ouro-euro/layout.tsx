import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Ouro para Euro",
  description: "Cotação da Onça de Ouro hoje para Euro",
  keywords: ["cotação", "onça de ouro", "euro", "ouro", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
