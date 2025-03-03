import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Riyal Saudita",
  description: "Cotação do Riyal Saudita hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
