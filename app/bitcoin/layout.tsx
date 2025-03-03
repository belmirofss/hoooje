import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Bitcoin",
  description: "Cotação do Bitcoin hoje para Real",
  keywords: ["cotação", "bitcoin", "real", "criptomoeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
