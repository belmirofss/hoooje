import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Bitcoin para Dólar",
  description: "Cotação do Bitcoin hoje para Dólar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
