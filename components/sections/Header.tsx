"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReservation } from "@/components/ReservationProvider";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { clearCourse } = useReservation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          solid ? "border-b border-ink-line bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="font-serif text-xl tracking-widest text-ivory transition-colors group-hover:text-gold">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 font-display text-[10px] uppercase tracking-[0.4em] text-gold-soft">
              {siteConfig.nameEn}
            </span>
          </a>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-widest text-ivory-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold hover:after:w-full"
              >
                {link.labelJa}
              </a>
            ))}
            <a
              href="#contact"
              onClick={clearCourse}
              className="rounded-full border border-gold/60 px-5 py-2 text-sm tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              ご予約
            </a>
          </nav>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              id="mobile-menu"
              aria-label="モバイルナビゲーション"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-ink-line bg-ink/95 backdrop-blur-md lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg text-ivory transition-colors hover:text-gold"
                    >
                      {link.labelJa}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      setOpen(false);
                      clearCourse();
                    }}
                    className="block rounded-full border border-gold/60 px-5 py-3 text-center text-gold"
                  >
                    ご予約はこちら
                  </a>
                </li>
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      {/* ハンバーガーメニューはヘッダーの内側レイアウトから独立させ、
          スクロール状態やコンテナ幅に関わらず常に画面右上に固定表示する */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        className="fixed top-4 right-4 z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-gold/25 bg-ink/50 backdrop-blur-md transition-colors duration-300 hover:border-gold/50 sm:top-5 sm:right-5 lg:hidden"
      >
        <span
          className={`h-px w-4 bg-ivory transition-transform duration-300 ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-4 bg-ivory transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-px w-4 bg-ivory transition-transform duration-300 ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>
    </>
  );
}
