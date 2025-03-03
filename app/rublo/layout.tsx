import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rublo",
  description: "Cotação do Rublo hoje para Real",
  keywords: ["cotação", "rublo", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
