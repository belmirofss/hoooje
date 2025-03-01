import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Australiano",
  description: "Cotação do Dólar Australiano hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
