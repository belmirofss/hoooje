import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Taiuanês",
  description: "Cotação do Dólar Taiuanês hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
