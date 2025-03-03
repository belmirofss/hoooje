import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Zlóti Polonês",
  description: "Cotação do Zlóti Polonês hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
