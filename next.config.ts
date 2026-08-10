import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ローカルのプレースホルダーSVGを next/image で最適化配信するための許可設定。
    // 外部/ユーザー入力のSVGは扱わないため安全。
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
