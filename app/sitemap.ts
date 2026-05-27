import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://grafostudio.com.br";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicos/branding`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicos/trafego-pago`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicos/social-media`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicos/desenvolvimento-web`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicos/tecnologia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos-de-uso`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
