import type { Metadata } from "next";

// A page's openGraph replaces the layout's instead of merging with it, so
// every page builds the whole thing here. URLs resolve against metadataBase.
export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: Metadata["title"] & {};
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    siteName: "Hoooje",
    locale: "pt_BR",
    url: path,
    title,
    description,
  },
});
