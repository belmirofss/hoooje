import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Coroa Dinamarquesa",
  description: "Cotação do Coroa Dinamarquesa hoje para Real",
  keywords: ["cotação", "coroa dinamarquesa", "real", "câmbio", "dinamarca"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
