import type { MetadataRoute } from "next";
import { getBrands, getIndustries, getSiteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteConfig().baseUrl;

  const industryPages = getIndustries().map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const brandPages = getBrands().map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/registry`, lastModified: new Date() },
    ...industryPages,
    ...brandPages,
  ];
}
