import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  ...(process.env.KAMEN_STATIC_PREVIEW === "1" ? {
    output: "export" as const,
    basePath: "/kamen-house-design-experiment",
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
