import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Sol do Peru",
  description: "Cotação do Sol do Peru hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
