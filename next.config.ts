import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/crm-app',
  reactStrictMode: true,
  // Emotionの設定
  compiler: {
    emotion: true,
  },
  // 外部パッケージの設定
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
