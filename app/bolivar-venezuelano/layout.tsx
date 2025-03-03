import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Bolívar Venezuelano",
  description: "Cotação do Bolívar Venezuelano hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
