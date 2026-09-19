import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ReservationProvider } from "@/components/ReservationProvider";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

/**
 * next/font/google はNoto Sans JP / Shippori Minchoに対して大量の
 * CJK unicode-range分割@font-faceを生成し、render-blocking CSSが
 * 肥大化する(未使用文字向けの宣言が大半を占める)。サイト内で実際に
 * 使用している文字だけを含むセルフホストサブセット(app/fonts/配下、
 * Google Fonts公式css2 API `text=`パラメータで生成しfonttoolsでWOFF2化。
 * lib/og-font.tsのOG画像生成と同じ手法)に置き換えている。
 * family名・weight・style・display・CSS変数名は元のGoogle Fonts版と同一。
 * サブセットに含まれない文字(フォーム入力時のユーザー入力等)は、
 * 既存のfont-family fallbackスタック(globals.cssのsans-serif/serif)へ
 * 自動的にフォールバックするため文字化けは発生しない。
 */
const notoSansJP = localFont({
  src: "./fonts/noto-sans-jp-subset.woff2",
  variable: "--font-noto-sans-jp",
  weight: "400",
  display: "swap",
});

const shipporiMincho = localFont({
  src: "./fonts/shippori-mincho-subset.woff2",
  variable: "--font-shippori-mincho",
  weight: "500",
  display: "swap",
});

const cormorantGaramond = localFont({
  src: "./fonts/cormorant-garamond-subset.woff2",
  variable: "--font-cormorant",
  weight: "400",
  style: "normal",
  display: "swap",
});

const seoTitle = `${siteConfig.name} | 東京・南青山の高級焼肉店`;

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.metaDescription,
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
    title: seoTitle,
    description: siteConfig.metaDescription,
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
    title: seoTitle,
    description: siteConfig.metaDescription,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
  description: siteConfig.metaDescription,
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
        <ReservationProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ReservationProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
