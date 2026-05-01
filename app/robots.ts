import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteConfig().baseUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
