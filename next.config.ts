import type { NextConfig } from "next";

const repoName = "anniversary-invitation";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
