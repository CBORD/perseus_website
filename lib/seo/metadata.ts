import type { Metadata } from "next";

const siteUrl = "https://example.com";
const siteName = "Website Foundation";
const titleTemplate = "%s | Website Foundation";

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: titleTemplate
  },
  description: "A scalable starter architecture for modern websites.",
  metadataBase: new URL(siteUrl)
};
