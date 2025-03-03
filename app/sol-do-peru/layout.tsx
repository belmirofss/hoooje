import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Sol do Peru",
  description: "Cotação do Sol do Peru hoje para Real",
  keywords: ["cotação", "sol do peru", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
