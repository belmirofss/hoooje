import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Mexicano",
  description: "Cotação do Peso Mexicano hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
