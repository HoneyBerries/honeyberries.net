import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://honeyberries.net"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/contact"]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }))
}
