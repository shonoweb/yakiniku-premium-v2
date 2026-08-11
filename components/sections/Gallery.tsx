"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    src: "/images/gallery-1.jpg",
    alt: "厳選した黒毛和牛の盛り合わせ",
    caption: "厳選部位の饗宴",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "職人が焼き上げる炭火焼肉",
    caption: "職人の目利き",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "落ち着いた個室のしつらえ",
    caption: "静謐な個室",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "炭火が生む一皿の仕上がり",
    caption: "炭火が生む一皿",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const targets = gsap.utils.toArray<HTMLElement>(
      ".gallery-item",
      containerRef.current
    );

    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          }),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="relative bg-ink py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Gallery"
          title="炭と器、静けさの中の一皿。"
          subtitle="店内の設えから、その日の一皿まで。"
        />

        <ul
          ref={containerRef}
          className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:mt-16 sm:auto-rows-[240px] sm:grid-cols-4 lg:mt-20 lg:gap-5"
        >
          {items.map((item, i) => (
            <li
              key={item.src}
              data-reveal
              className={`gallery-item group relative overflow-hidden opacity-0 ${item.span ?? ""}`}
              style={{ transform: "translateY(2.5rem)" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={i === 0}
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10 transition-[box-shadow] group-hover:ring-gold/40"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 left-5 translate-y-2 text-sm tracking-[0.15em] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                {item.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
