import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rúpia Indiana",
  description: "Cotação do Rúpia Indiana hoje para Real",
  keywords: ["cotação", "rupia indiana", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
