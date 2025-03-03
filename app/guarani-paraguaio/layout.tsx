import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Guarani Paraguaio",
  description: "Cotação do Guarani Paraguaio hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
