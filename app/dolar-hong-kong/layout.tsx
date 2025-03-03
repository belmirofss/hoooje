import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar de Hong Kong",
  description: "Cotação do Dólar de Hong Kong hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
