import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aurast.com";

  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/galerija", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/tim", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/kontakt", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/karijera", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/zakazivanje", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/politika-privatnosti", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/uslovi-koriscenja", priority: 0.3, changeFreq: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
