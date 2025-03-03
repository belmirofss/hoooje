import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Uruguaio",
  description: "Cotação do Peso Uruguaio hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
