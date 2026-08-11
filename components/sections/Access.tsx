"use client";

import { useReservation } from "@/components/ReservationProvider";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

const infoCards = [
  {
    label: "Location",
    primary: siteConfig.address.full,
  },
  {
    label: "Opening Hours",
    primary: "17:00 - 23:00",
    secondary: `L.O. 22:00　${siteConfig.hours[1]?.label}：${siteConfig.hours[1]?.time}`,
  },
  {
    label: "Access",
    primary: siteConfig.access.station,
    secondary: siteConfig.access.parking,
  },
  {
    label: "Contact",
    primary: siteConfig.telephoneDisplay,
    href: `tel:${siteConfig.telephone.replace(/-/g, "")}`,
  },
];

export default function Access() {
  const { clearCourse } = useReservation();

  return (
    <section id="access" className="relative bg-ink-soft py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Access" title="特別な夜へ、静かな入口。" align="left" />

        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src="/images/access.jpg"
              alt={`${siteConfig.name} 外観`}
              className="aspect-[4/3] w-full"
            />
          </Reveal>

          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((card, i) => (
                <Reveal key={card.label} delay={0.1 + i * 0.1}>
                  <div className="h-full border border-ink-line bg-ink/60 p-6">
                    <span className="font-display text-xs tracking-[0.3em] text-gold uppercase">
                      {card.label}
                    </span>
                    <p className="mt-3 leading-relaxed text-ivory">
                      {card.href ? (
                        <a href={card.href} className="transition-colors hover:text-gold">
                          {card.primary}
                        </a>
                      ) : (
                        card.primary
                      )}
                    </p>
                    {card.secondary ? (
                      <p className="mt-1 text-sm leading-relaxed text-ivory-muted">
                        {card.secondary}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-ivory-muted">
                  {siteConfig.reservationNote}
                </p>
                <a
                  href="#contact"
                  onClick={clearCourse}
                  className="inline-block shrink-0 rounded-full bg-gold px-8 py-3 text-center text-sm tracking-widest text-ink transition-colors duration-300 hover:bg-gold-soft"
                >
                  ご予約はこちら
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
