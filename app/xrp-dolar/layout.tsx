import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | XRP para Dólar",
  description: "Cotação do XRP hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
