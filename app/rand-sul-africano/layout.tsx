import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Rand Sul-Africano",
  description: "Cotação do Rand Sul-Africano hoje para Real",
  keywords: ["cotação", "rand sul-africano", "real", "câmbio", "áfrica do sul"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
