import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hooje | Euro",
  description: "Cotação do Euro hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
