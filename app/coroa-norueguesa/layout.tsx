import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoooje | Coroa Norueguesa",
  description: "Cotação do Coroa Norueguesa hoje para Real",
  keywords: ["cotação", "coroa norueguesa", "real", "câmbio", "noruega"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
