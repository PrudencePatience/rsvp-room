import type { MetadataRoute } from "next";
import { baseAppUrl } from "@/lib/base-app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseAppUrl, priority: 1 },
    { url: `${baseAppUrl}/rsvp`, priority: 0.9 },
    { url: `${baseAppUrl}/my-events`, priority: 0.8 },
    { url: `${baseAppUrl}/about`, priority: 0.7 },
    { url: `${baseAppUrl}/event/atelier-night`, priority: 0.8 },
    { url: `${baseAppUrl}/event/morning-grid`, priority: 0.8 },
    { url: `${baseAppUrl}/event/signal-room`, priority: 0.8 },
  ];
}
