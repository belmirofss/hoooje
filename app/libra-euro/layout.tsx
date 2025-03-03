import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Libra para Euro",
  description: "Cotação do Libra hoje para Euro",
  keywords: ["cotação", "libra", "euro", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
