import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { PORTFOLIO } from "@/data";

// Update when site content changes; a per-request Date misleads crawlers.
const LAST_MODIFIED = new Date("2026-10-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioImages = PORTFOLIO.projects.map(
    (project: { images: { default: string } }) =>
      `${SITE_URL}${project.images.default}`
  );

  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/me.png`, `${SITE_URL}/hero_bg.jpg`, ...portfolioImages],
    },
  ];
}
