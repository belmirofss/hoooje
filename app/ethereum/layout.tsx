import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Ethereum",
  description: "Cotação do Ethereum hoje para Real",
  keywords: ["cotação", "ethereum", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
