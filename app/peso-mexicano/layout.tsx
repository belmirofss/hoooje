import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Peso Mexicano",
  description: "Cotação do Peso Mexicano hoje para Real",
  keywords: ["cotação", "peso mexicano", "real", "câmbio", "méxico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
