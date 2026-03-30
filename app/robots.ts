import type { MetadataRoute } from "next";
import { baseAppUrl } from "@/lib/base-app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseAppUrl}/sitemap.xml`,
    host: baseAppUrl,
  };
}
