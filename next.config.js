/** @type {import('next').NextConfig} */

import withPlugins from "next-compose-plugins";
import withPWA from "next-pwa";
import withOptimizedImages from "next-optimized-images";

const nextConfig = {
  reactStrictMode: true,
};

export default withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: "default",
          quality: 90,
        },
      },
    ],
  ],
  nextConfig,
);
