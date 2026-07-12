import Script from "next/script";

/**
 * Loads the Umami analytics script, if configured.
 *
 * Set these in `.env.local` (see `.env.example`) once you've created a free
 * Umami Cloud site / self-hosted instance:
 *   NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
 *   NEXT_PUBLIC_UMAMI_ID=your-website-id
 *
 * Until then this renders nothing — no errors, no broken script tag.
 */
export default function UmamiAnalytics() {
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;

  if (!umamiSrc || !umamiId) {
    return null;
  }

  return (
    <Script
      id="umami-analytics"
      src={umamiSrc}
      data-website-id={umamiId}
      strategy="afterInteractive"
    />
  );
}
