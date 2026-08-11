/**
 * サイト全体で使用するダミーデータ。
 * 実店舗の情報が確定したら、このファイルの値だけを差し替えれば全ページに反映される。
 */

/**
 * 本番URL。実際のドメインが決まったら、Vercel等の環境変数
 * `NEXT_PUBLIC_SITE_URL`（例: https://akari-yakiniku.jp）を設定するだけでよい。
 * 未設定時（ローカル開発など）は localhost にフォールバックする。
 * metadataBase / canonical / OGP / JSON-LD / sitemap / robots が全てここを参照する。
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const siteConfig = {
  name: "焼肉 燈 -AKARI-",
  nameEn: "YAKINIKU AKARI",
  shortName: "燈 -AKARI-",
  tagline: "炭火が灯す、極上の一夜。",
  description:
    "厳選した黒毛和牛を最良の状態で。東京・南青山の隠れ家で、炭火焼肉の神髄を味わう会員制サロンのような一軒。特別な夜のための、静謐な空間をご用意しております。",
  /** 検索結果・OGP・JSON-LD用のdescription（サイト内表示文とは別に管理） */
  metaDescription:
    "東京・南青山の高級焼肉店「焼肉 燈 -AKARI-」。厳選した黒毛和牛と炭火焼肉を、落ち着いた上質な空間でお楽しみいただけます。記念日・接待・特別な日のディナーにもご利用ください。",
  url: SITE_URL,
  ogImage: "/opengraph-image",
  telephone: "03-0000-0000",
  telephoneDisplay: "03-0000-0000",
  email: "info@akari-yakiniku.example.jp",
  address: {
    postalCode: "〒107-0062",
    region: "東京都",
    locality: "港区南青山",
    street: "1-2-3 〇〇ビルディング B1F",
    full: "〒107-0062 東京都港区南青山1-2-3 〇〇ビルディング B1F",
  },
  access: {
    station: "東京メトロ銀座線「外苑前駅」3番出口より徒歩4分",
    parking: "提携駐車場あり（ご来店のお客様は2時間まで無料）",
  },
  hours: [
    { label: "ディナー", time: "17:00 - 23:00（L.O. 22:00）" },
    { label: "定休日", time: "毎週月曜日・年末年始" },
  ],
  sns: {
    instagram: "https://www.instagram.com/",
    line: "https://line.me/",
  },
  priceRange: "¥¥¥¥",
  reservationNote: "ご予約はお電話、またはフォームより承っております。",
} as const;

/**
 * Menuセクションのコース名（予約フォームのコース選択と共有する単一の情報源）。
 * コースの詳細内容（価格・内容・写真）は components/sections/Menu.tsx 側で管理する。
 */
export const courseNames = ["竹 -TAKE-", "松 -MATSU-", "極 -KIWAMI-"] as const;

export const navLinks = [
  { href: "#about", label: "About", labelJa: "当店について" },
  { href: "#menu", label: "Menu", labelJa: "メニュー" },
  { href: "#gallery", label: "Gallery", labelJa: "ギャラリー" },
  { href: "#access", label: "Access", labelJa: "アクセス" },
  { href: "#contact", label: "Contact", labelJa: "ご予約・お問い合わせ" },
] as const;
