import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://conjecture.school";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/lessons/ep01`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/design`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
