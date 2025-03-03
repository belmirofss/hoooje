import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Uruguaio",
  description: "Cotação do Peso Uruguaio hoje para Real",
  keywords: ["cotação", "peso uruguaio", "real", "câmbio", "uruguai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
