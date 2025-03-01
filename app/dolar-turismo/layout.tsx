import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Turismo",
  description: "Cotação do Dólar Turismo hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
