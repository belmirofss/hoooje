import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Baht Tailandês",
  description: "Cotação do Baht Tailandês hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
