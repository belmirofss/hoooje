import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dogecoin",
  description: "Cotação do Dogecoin hoje para Real",
  keywords: ["cotação", "dogecoin", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
