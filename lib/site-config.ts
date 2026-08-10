/**
 * サイト全体で使用するダミーデータ。
 * 実店舗の情報が確定したら、このファイルの値だけを差し替えれば全ページに反映される。
 */

export const siteConfig = {
  name: "焼肉 燈 -AKARI-",
  nameEn: "YAKINIKU AKARI",
  shortName: "燈 -AKARI-",
  tagline: "炭火が灯す、極上の一夜。",
  description:
    "厳選した黒毛和牛を最良の状態で。東京・南青山の隠れ家で、炭火焼肉の神髄を味わう会員制サロンのような一軒。特別な夜のための、静謐な空間をご用意しております。",
  url: "https://akari-yakiniku.example.jp",
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

export const navLinks = [
  { href: "#about", label: "About", labelJa: "当店について" },
  { href: "#menu", label: "Menu", labelJa: "メニュー" },
  { href: "#gallery", label: "Gallery", labelJa: "ギャラリー" },
  { href: "#access", label: "Access", labelJa: "アクセス" },
  { href: "#contact", label: "Contact", labelJa: "ご予約・お問い合わせ" },
] as const;
