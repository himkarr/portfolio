import type { Metadata } from "next";

import { siteConfig } from "./site";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} | ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
};
