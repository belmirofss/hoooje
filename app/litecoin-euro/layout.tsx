import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Litecoin para Euro",
  description: "Cotação do Litecoin hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
