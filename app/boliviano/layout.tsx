import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Boliviano",
  description: "Cotação do Boliviano hoje para Real",
  keywords: ["cotação", "boliviano", "real", "câmbio", "bolívia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
