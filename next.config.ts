import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened over Tailscale, not just localhost —
  // otherwise Next blocks its JS chunks and the page never hydrates.
  allowedDevOrigins: ["100.64.140.20"],
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
