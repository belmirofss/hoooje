import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar para Euro",
  description: "Cotação do Dólar hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
