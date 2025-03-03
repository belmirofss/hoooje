import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Australiano",
  description: "Cotação do Dólar Australiano hoje para Real",
  keywords: ["cotação", "dólar australiano", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
