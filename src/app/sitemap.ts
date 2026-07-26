import type {MetadataRoute} from "next";

import {siteConfig} from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: siteConfig.url, changeFrequency: "monthly", priority: 1},
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/work`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/resume`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
