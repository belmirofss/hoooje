import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | XRP",
  description: "Cotação do XRP hoje para Real",
  keywords: ["cotação", "xrp", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
