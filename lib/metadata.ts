import type { Metadata } from "next"

import {
  SHARE_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/data/site"

// Next merges metadata shallowly, so a page's `openGraph`/`twitter` replace
// the layout's entirely — including the file-based share images from `app/`
// — so every page has to carry the shared fields itself.
export function pageMetadata({
  path,
  title,
  description = SITE_DESCRIPTION,
}: {
  path: string
  title?: string
  description?: string
}): Metadata {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_TITLE

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: SHARE_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image.jpg", alt: SHARE_IMAGE_ALT }],
    },
  }
}
