import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Ethereum",
  description: "Cotação do Ethereum hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
