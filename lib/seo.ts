import type { Metadata } from "next";

const BASE_URL = "https://grafostudio.com.br";

const OG_IMAGE = {
  url: `${BASE_URL}/brand/GRAFO_-_LOGO.png`,
  width: 1200,
  height: 630,
  alt: "Grafo Studio — Agência de Marketing Digital",
};

export function buildMetadata(args: {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
}): Metadata {
  const url = args.path ? `${BASE_URL}${args.path}` : BASE_URL;
  return {
    title: args.title,
    description: args.description,
    ...(args.keywords ? { keywords: args.keywords } : {}),
    openGraph: {
      title: args.title,
      description: args.description,
      type: "website",
      locale: "pt_BR",
      url,
      siteName: "Grafo Studio",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: [OG_IMAGE.url],
    },
  };
}
