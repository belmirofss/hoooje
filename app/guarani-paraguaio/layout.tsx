import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Guarani Paraguaio",
  description: "Cotação do Guarani Paraguaio hoje para Real",
  keywords: ["cotação", "guarani paraguaio", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
