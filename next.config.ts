import type { NextConfig } from "next";

import { DISCORD_INVITE_URL, MODCORD_INVITE_URL } from "./lib/data/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Lets the dev server be opened over Tailscale, not just localhost —
  // otherwise Next blocks its JS chunks and the page never hydrates.
  allowedDevOrigins: ["100.64.140.20"],
  // Temporary (307) so browsers never cache the invite if it changes.
  async redirects() {
    return [
      { source: "/discord", destination: DISCORD_INVITE_URL, permanent: false },
      {
        source: "/modcord/invite",
        destination: MODCORD_INVITE_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
