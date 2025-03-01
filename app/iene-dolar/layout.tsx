import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Iene para Dólar",
  description: "Cotação do Iene hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
