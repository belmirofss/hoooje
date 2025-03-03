import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rublo para Euro",
  description: "Cotação do Rublo hoje para Euro",
  keywords: ["cotação", "rublo", "euro", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
