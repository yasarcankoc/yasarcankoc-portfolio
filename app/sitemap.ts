import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /sitemap.xml olarak servis edilir. Tek sayfalık site — tek kayıt yeter;
// ileride alt sayfalar (örn. /blog) eklenirse buraya kayıt ekle.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
