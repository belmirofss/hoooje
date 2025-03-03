import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Coroa Dinamarquesa",
  description: "Cotação do Coroa Dinamarquesa hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
