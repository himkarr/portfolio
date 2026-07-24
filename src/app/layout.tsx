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

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});

export {metadata};

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
