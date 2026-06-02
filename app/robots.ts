import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://conjecture.school/sitemap.xml",
    host: "https://conjecture.school",
  };
}
