import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | XRP",
  description: "Cotação do XRP hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
