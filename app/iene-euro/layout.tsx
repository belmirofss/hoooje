import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Iene para Euro",
  description: "Cotação do Iene hoje para Euro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
