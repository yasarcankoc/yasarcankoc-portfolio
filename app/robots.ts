import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /robots.txt olarak servis edilir — arama motorlarına "her yeri tara" der
// ve sitemap'in yerini gösterir.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
