import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Neozelandês",
  description: "Cotação doDólar Neozelandês hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
