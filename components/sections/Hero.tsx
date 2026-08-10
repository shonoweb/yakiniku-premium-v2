"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgWrapRef.current || !sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(imgWrapRef.current, {
        y: 90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div
        ref={imgWrapRef}
        className="absolute inset-x-0 -top-[15%] h-[130%] w-full will-change-transform"
      >
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
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-sm uppercase tracking-[0.5em] text-gold-soft"
        >
          {siteConfig.nameEn}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-4xl leading-snug font-medium text-ivory text-balance sm:text-5xl lg:text-6xl"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory-muted text-balance sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
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
        </motion.div>
      </div>
    </section>
  );
}
