import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Solana",
  description: "Cotação do Solana hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
