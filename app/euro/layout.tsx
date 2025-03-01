import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Euro",
  description: "Cotação do Euro hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
