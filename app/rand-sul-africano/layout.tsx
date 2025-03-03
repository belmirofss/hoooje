import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rand Sul-Africano",
  description: "Cotação do Rand Sul-Africano hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
