import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Baht Tailandês",
  description: "Cotação do Baht Tailandês hoje para Real",
  keywords: ["cotação", "baht tailandês", "real", "câmbio", "tailândia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
