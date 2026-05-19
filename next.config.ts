import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.neon.tech" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
