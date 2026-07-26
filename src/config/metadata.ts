import type {Metadata} from "next";

import {siteConfig} from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{name: siteConfig.fullName}],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  applicationName: `${siteConfig.fullName}'s Portfolio`,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: `${siteConfig.fullName}'s Portfolio`,
    title: `${siteConfig.fullName} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1309,
        height: 1119,
        alt: `${siteConfig.fullName}'s portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | ${siteConfig.title}`,
    description: siteConfig.description,
    creator: "@himkarr",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
