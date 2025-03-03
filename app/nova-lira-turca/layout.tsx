import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Nova Lira Turca",
  description: "Cotação do Nova Lira Turca hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
