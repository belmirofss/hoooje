import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dinar Sérvio",
  description: "Cotação do Dinar Sérvio hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
