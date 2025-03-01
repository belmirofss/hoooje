import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Argentino",
  description: "Cotação do Peso Argentino hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
