import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Prata",
  description: "Cotação da Onça de Prata hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
