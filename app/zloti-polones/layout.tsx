import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Zlóti Polonês",
  description: "Cotação do Zlóti Polonês hoje para Real",
  keywords: ["cotação", "zlóti polonês", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
