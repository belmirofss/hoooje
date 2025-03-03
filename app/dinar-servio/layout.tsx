import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dinar Sérvio",
  description: "Cotação do Dinar Sérvio hoje para Real",
  keywords: ["cotação", "dinar sérvio", "real", "câmbio", "sérvia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
