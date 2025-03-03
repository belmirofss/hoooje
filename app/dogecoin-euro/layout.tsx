import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dogecoin para Euro",
  description: "Cotação do Dogecoin hoje para Euro",
  keywords: ["cotação", "dogecoin", "euro", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
