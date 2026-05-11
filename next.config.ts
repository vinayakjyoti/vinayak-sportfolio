import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid OneDrive lock contention on `.next/trace` by using a separate build dir.
  distDir: ".next-cache",
};

export default nextConfig;
