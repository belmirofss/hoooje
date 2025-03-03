import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rúpia Indiana",
  description: "Cotação do Rúpia Indiana hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
