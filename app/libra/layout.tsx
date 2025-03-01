import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Libra",
  description: "Cotação do Libra hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
