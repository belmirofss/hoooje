import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Chileno",
  description: "Cotação do Peso Chileno hoje para Real",
  keywords: ["cotação", "peso chileno", "real", "câmbio", "chile"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
