import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hooje | Dólar",
  description: "Cotação do dólar hoje para real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
