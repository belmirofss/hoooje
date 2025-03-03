import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Real para Libra",
  description: "Cotação do Real hoje para Libra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
