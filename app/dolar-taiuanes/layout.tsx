import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Taiuanês",
  description: "Cotação do Dólar Taiuanês hoje para Real",
  keywords: ["cotação", "dólar taiuanês", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
