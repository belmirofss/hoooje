import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rublo",
  description: "Cotação do Rublo hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
