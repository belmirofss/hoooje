import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Franco Suiço",
  description: "Cotação do Franco Suiço hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
