const configuredUrl =
  process.env.NEXT_PUBLIC_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://localhost:3000";

const url = configuredUrl.startsWith("http")
  ? configuredUrl
  : `https://${configuredUrl}`;

export const siteConfig = {
  // Basic Information
  name: "Himanshu",
  fullName: "Himanshu Kaushik",
  username: "himkar",

  // Professional
  title: "AppSec Eng.",
  subtitle: "AI Software Engineer",

  description:
    "Building secure applications, AI-powered security tools, and modern web experiences.",

  longDescription:
    "I’m an Application Security practitioner focused on offensive security, source code auditing, and vulnerability research. I specialize in identifying business logic flaws, dissecting web/API architectures, and building automated security tooling.",

  // Website
  // Set NEXT_PUBLIC_URL in Vercel to the canonical domain, e.g. https://example.com.
  // Vercel's deployment URL is used as a fallback until a custom domain is connected.
  url: url.replace(/\/$/, ""),

  ogImage: "/meta/portfolio.png",

  // Contact
  email: "himkarsingh@proton.me",

  // Location
  location: "India",

  // Resume
  resume: "/resume",

  // Theme
  themeColor: "#09090B",

  // SEO
  keywords: [
    "Himkar",
    "Application Security",
    "Cyber Security",
    "AppSec",
    "GenAI",
    "AI",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
} as const;
