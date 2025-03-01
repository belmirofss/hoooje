import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Euro para Dólar",
  description: "Cotação do Euro hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
