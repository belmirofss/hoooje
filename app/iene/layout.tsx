import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Iene",
  description: "Cotação do Iene hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
