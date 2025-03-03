import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Won Sul-Coreano",
  description: "Cotação do Won Sul-Coreano hoje para Real",
  keywords: ["cotação", "won sul-coreano", "real", "moeda", "câmbio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
