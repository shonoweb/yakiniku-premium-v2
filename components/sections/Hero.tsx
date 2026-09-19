"use client";

import Image from "next/image";
import { useReservation } from "@/components/ReservationProvider";
import { siteConfig } from "@/lib/site-config";

/**
 * 診断用A/Bテスト（perf/hero-hydration-isolation）:
 * GSAP(ScrollTriggerパララックス) / Framer Motion(初期フェードイン)を
 * 一時的に完全停止し、Hero固有のJS実行量がLCP/main-threadにどの程度
 * 寄与しているかを検証する。最終的な見た目(opacity:1, transform無し)は
 * 変更前のアニメーション到達後の状態と同一になるよう、
 * plainな要素に置き換えている。本番デザイン変更ではない。
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
        <span className="font-display text-sm uppercase tracking-[0.5em] text-gold-soft">
          {siteConfig.nameEn}
        </span>

        <h1 className="mt-6 text-4xl leading-snug font-medium text-ivory text-balance sm:text-5xl lg:text-6xl">
          {siteConfig.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-muted text-balance sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
