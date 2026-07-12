"use client";

import {useUmami} from "@/hooks/use-umami";
import type {AnalyticsEvent} from "@/types/analytics";
import Link from "next/link";
import * as React from "react";

type LinkProps = React.ComponentProps<typeof Link>;

/**
 * Drop-in replacement for `next/link` that fires an Umami event on click.
 * Any link across the site can opt into analytics with a single, type-safe
 * prop, e.g. `track={{ name: 'external_link_click', data: { url, text, location } }}`.
 *
 * Note: this wraps next/link, so it only handles internal routes/anchors the
 * way Link normally does. For plain external links (github, linkedin, etc.)
 * use a regular <a> tag and call `useUmami().trackEvent` in its onClick.
 */
export function TrackedLink({
  track,
  onClick,
  ...props
}: LinkProps & {track?: AnalyticsEvent}) {
  const {trackEvent} = useUmami();

  return (
    <Link
      {...props}
      onClick={(event) => {
        if (track) {
          trackEvent(track);
        }
        onClick?.(event);
      }}
    />
  );
}
