"use client";

import Script from "next/script";

type GoogleAnalyticsLazyProps = {
  gaId: string;
};

/**
 * 診断用A/Bテスト(perf/hero-lightweight-animation): @next/third-parties の
 * GoogleAnalytics は next/script を strategy指定なし(=デフォルトの
 * afterInteractive)で内部使用しており、strategyをカスタマイズするpropsは
 * 公開されていない。gtag初期化ロジック(dataLayer/gtag関数定義/'js'+'config'呼び出し)
 * と gtag.js の読み込みURLは @next/third-parties/google の実装(ga.js)と
 * 完全に同一のまま、strategyだけを lazyOnload に変更して読み込みタイミングの
 * 影響を検証する。Measurement ID・イベント名・dataLayer名は一切変更しない。
 */
export default function GoogleAnalyticsLazy({ gaId }: GoogleAnalyticsLazyProps) {
  return (
    <>
      <Script
        id="_next-ga-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window['dataLayer'] = window['dataLayer'] || [];
          function gtag(){window['dataLayer'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');`,
        }}
      />
      <Script id="_next-ga" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
    </>
  );
}
