import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜東京・南青山の高級焼肉店`,
    template: `%s｜${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: ["焼肉", "高級焼肉", "南青山", "黒毛和牛", "接待", "記念日", "個室", "炭火焼肉"],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}｜東京・南青山の高級焼肉店`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜東京・南青山の高級焼肉店`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  image: [`${siteConfig.url}${siteConfig.ogImage}`],
  url: siteConfig.url,
  telephone: siteConfig.telephone,
  priceRange: siteConfig.priceRange,
  servesCuisine: "Yakiniku",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode.replace("〒", ""),
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  sameAs: [siteConfig.sns.instagram, siteConfig.sns.line],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-ivory">
        {/*
          ページの初回読み込み・リロード時に必ずHeroセクション(最上部)から
          表示されるようにするスクリプト。ブラウザ標準のスクロール位置復元や、
          過去のアンカークリックで残ったURLハッシュ(#contact等)により
          中間セクションから表示されてしまう事象を、ハイドレーション前・
          同期的に無効化することで防ぐ。以降のナビゲーションリンク
          (href="#section")によるクリック時のアンカースクロールは、
          ブラウザ標準の動作としてこの後も通常通り機能する。
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history){history.scrollRestoration='manual'}if(location.hash){history.replaceState(null,'',location.pathname+location.search)}window.scrollTo(0,0)}catch(e){}",
          }}
        />
        {/*
          OSの「動きを減らす」設定をハイドレーション前・同期的に反映するスクリプト。
          React state経由(useReducedMotion等)だとSSR時点の初期値に固定され
          反映されないことがあるため、DOM操作で確実性を担保する。
          対応するCSSは globals.css の `.reduce-motion [data-reveal]` を参照。
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduce-motion')}}catch(e){}",
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-ink"
        >
          本文へスキップ
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
