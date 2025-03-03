import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Ouro",
  description: "Cotação da Onça de Ouro hoje para Real",
  keywords: ["cotação", "onça de ouro", "real", "ouro", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
