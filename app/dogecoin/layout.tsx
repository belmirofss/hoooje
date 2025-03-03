import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dogecoin",
  description: "Cotação do Dogecoin hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
