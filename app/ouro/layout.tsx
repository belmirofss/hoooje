import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Onça de Ouro",
  description: "Cotação da Onça de Ouro hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
