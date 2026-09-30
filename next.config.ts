import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Emits /page/index.html so Apache serves each route from public_html.
  trailingSlash: true,
};

export default nextConfig;
