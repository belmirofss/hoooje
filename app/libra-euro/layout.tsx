import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Libra para Euro",
  description: "Cotação do Libra hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
