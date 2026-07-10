import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use Turbopack for significantly faster dev compilation
  turbopack: {},

  // Limit source map generation in dev — major compile time saver
  productionBrowserSourceMaps: false,

  // Reduce memory pressure from image optimization
  images: {
    // Only optimize formats actually used
    formats: ["image/webp"],
    // Reduce concurrent image workers
    dangerouslyAllowSVG: true,
  },

  // Keep gsap out of server-side bundling
  serverExternalPackages: ["gsap"],
};

export default nextConfig;
