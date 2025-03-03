import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Bitcoin para Euro",
  description: "Cotação do Bitcoin hoje para Euro",
  keywords: ["cotação", "bitcoin", "euro", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
