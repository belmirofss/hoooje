import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Honk } from "next/font/google";
import "./globals.css";
import { AdSense } from "./shared/components/AdSense";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";
import { SITE_URL } from "./shared/data/pairs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const honk = Honk({
  variable: "--font-honk-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Hoooje", template: "%s | Hoooje" },
  twitter: { card: "summary_large_image" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "google-adsense-account": process.env.PUBLISHER_ID || "",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffe45e",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${honk.variable}`}>
      <head>
        <AdSense />
      </head>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.G_ID || ""} />
    </html>
  );
}
