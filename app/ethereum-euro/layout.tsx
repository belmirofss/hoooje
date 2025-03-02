import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Ethereum para Euro",
  description: "Cotação do Ethereum hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
