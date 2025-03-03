import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Prata",
  description: "Cotação da Onça de Prata hoje para Real",
  keywords: ["cotação", "onça de prata", "real", "prata", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
