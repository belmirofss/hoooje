import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Dólar Turismo",
  description: "Cotação do Dólar Turismo hoje para Real",
  keywords: ["cotação", "dólar turismo", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
