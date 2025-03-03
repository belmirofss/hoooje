import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Colombiano",
  description: "Cotação do Peso Colombiano hoje para Real",
  keywords: ["cotação", "peso colombiano", "real", "câmbio", "colômbia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
