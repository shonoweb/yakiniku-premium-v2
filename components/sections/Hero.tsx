"use client";

import Image from "next/image";
import { useReservation } from "@/components/ReservationProvider";
import { siteConfig } from "@/lib/site-config";

/**
 * TEST1(perf/hero-lightweight-animation): eyebrow/h1/CTAの初回表示演出を
 * Framer Motionではなく純粋なCSS animation(globals.cssの--animate-hero-reveal)
 * で再現する。duration・delay・easing・移動量はFramer Motion版と同一値。
 * LCP要素である説明文<p>には一切アニメーションを付けず、常に即表示のまま。
 * prefers-reduced-motionはグローバルのanimation-duration上書きで自動的に無効化される。
 */
export default function Hero() {
  const { clearCourse } = useReservation();

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-x-0 -top-[15%] h-[130%] w-full will-change-transform">
        <Image
          src="/images/hero.jpg"
          alt="炭火で焼き上げる黒毛和牛"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* 画面全体を均一に暗くしすぎず、和牛や店内の質感が見える程度に留める下地 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10"
      />
      {/* 文字が乗る中央部分だけを重点的に読みやすくするビネット */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_58%_at_50%_46%,rgba(10,10,10,0.62)_0%,rgba(10,10,10,0)_72%)]"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span
          data-reveal
          className="animate-hero-reveal [animation-delay:0.2s] [--hero-reveal-y:16px] font-display text-sm uppercase tracking-[0.5em] text-gold-soft"
        >
          {siteConfig.nameEn}
        </span>

        <h1
          data-reveal
          className="animate-hero-reveal [animation-delay:0.4s] mt-6 text-4xl leading-snug font-medium text-ivory text-balance sm:text-5xl lg:text-6xl"
        >
          {siteConfig.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-muted text-balance sm:text-lg">
          {siteConfig.description}
        </p>

        <div
          data-reveal
          className="animate-hero-reveal [animation-delay:0.8s] mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            onClick={clearCourse}
            className="rounded-full bg-gold px-8 py-3 text-sm tracking-widest text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-soft"
          >
            ご予約はこちら
          </a>
          <a
            href="#menu"
            className="rounded-full border border-ivory/30 px-8 py-3 text-sm tracking-widest text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            メニューを見る
          </a>
        </div>
      </div>
    </section>
  );
}
