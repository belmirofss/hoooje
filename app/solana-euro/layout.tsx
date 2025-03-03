import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Solana para Euro",
  description: "Cotação do Solana hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
