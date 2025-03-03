import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | XRP para Euro",
  description: "Cotação do XRP hoje para Euro",
  keywords: ["cotação", "xrp", "euro", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
