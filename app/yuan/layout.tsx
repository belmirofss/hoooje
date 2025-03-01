import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Yuan",
  description: "Cotação do Yuan hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
