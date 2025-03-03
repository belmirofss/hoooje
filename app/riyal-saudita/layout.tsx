import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Riyal Saudita",
  description: "Cotação do Riyal Saudita hoje para Real",
  keywords: ["cotação", "riyal saudita", "real", "câmbio", "arábia saudita"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
