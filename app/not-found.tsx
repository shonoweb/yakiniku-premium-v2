import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-display text-sm tracking-[0.4em] text-gold-soft uppercase">
        404
      </span>
      <h1 className="mt-6 text-3xl font-medium text-ivory sm:text-4xl">
        お探しのページが見つかりませんでした。
      </h1>
      <p className="mt-6 max-w-md text-balance leading-relaxed text-ivory-muted">
        ページが移動または削除された可能性がございます。
        <br />
        お手数ですが、トップページより改めてお探しください。
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm tracking-widest text-ink transition-colors duration-300 hover:bg-gold-soft"
      >
        {siteConfig.shortName} トップへ戻る
      </Link>
    </section>
  );
}
