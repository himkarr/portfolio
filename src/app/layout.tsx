import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {geistMono, geistSans} from "@/lib/fonts";
import {metadata} from "@/config/metadata";
import {ThemeProvider} from "@/components/common/ThemeProviders";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import {Analytics} from "@vercel/analytics/next";
import UmamiAnalytics from "@/components/analytics/UmamiAnalytics";
import {TooltipProvider} from "@/components/ui/tooltip";
import {siteConfig} from "@/config/site";
import {socialLinks} from "@/config/social";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});

export {metadata};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.fullName,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      jobTitle: siteConfig.title,
      description: siteConfig.longDescription,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: siteConfig.location,
      },
      sameAs: [
        socialLinks.github,
        socialLinks.linkedin,
        socialLinks.twitter,
        socialLinks.tryhackme,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.fullName}'s Portfolio`,
      description: siteConfig.description,
      publisher: {"@id": `${siteConfig.url}/#person`},
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      >
        <body className="min-h-full flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
          />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </TooltipProvider>
        </ThemeProvider>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-10 bg-gradient-to-t from-background via-background/70 to-transparent backdrop-blur-sm"
        />
        <UmamiAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
