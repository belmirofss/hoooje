import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Litecoin",
  description: "Cotação do Litecoin hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
