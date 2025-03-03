import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Coroa Sueca",
  description: "Cotação do Coroa Sueca hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
