import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Solana",
  description: "Cotação do Solana hoje para Real",
  keywords: ["cotação", "solana", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
