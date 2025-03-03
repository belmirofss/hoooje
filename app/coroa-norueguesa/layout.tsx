import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Coroa Norueguesa",
  description: "Cotação do Coroa Norueguesa hoje para Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
