"use client";

import { useReservation } from "@/components/ReservationProvider";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  const { clearCourse } = useReservation();

  return (
    <footer className="relative border-t border-ink-line bg-ink pt-12 pb-16 sm:pt-14 [content-visibility:auto] [contain-intrinsic-height:auto_970px] lg:[contain-intrinsic-height:auto_530px]">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
          <div>
            <p className="font-serif text-2xl text-ivory">{siteConfig.shortName}</p>
            <p className="mt-2 text-sm text-ivory-muted">炭火焼肉 燈</p>

            <div className="mt-6 text-sm leading-relaxed text-ivory-muted">
              <p>{siteConfig.address.postalCode}</p>
              <p>
                {siteConfig.address.region}
                {siteConfig.address.locality}
                {siteConfig.address.street}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-[0.25em] text-gold uppercase">Tel</p>
              <a
                href={`tel:${siteConfig.telephone.replace(/-/g, "")}`}
                className="mt-1 inline-block text-ivory transition-colors hover:text-gold"
              >
                {siteConfig.telephoneDisplay}
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-[0.25em] text-gold uppercase">営業時間</p>
              <p className="mt-1 text-ivory">17:00 - 23:00</p>
              <p className="text-sm text-ivory-muted">(L.O. 22:00)</p>
            </div>
          </div>

          <nav aria-label="フッターナビゲーション">
            <p className="text-sm tracking-widest text-gold">Menu</p>
            <ul className="mt-2 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm text-ivory-muted transition-colors hover:text-gold"
                  >
                    {link.labelJa}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm tracking-widest text-gold">Follow</p>
            <div className="mt-4 flex gap-4">
              <a
                href={siteConfig.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagramで見る"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ivory-muted transition-colors hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href={siteConfig.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE公式アカウントを開く"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ivory-muted transition-colors hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                  <path
                    d="M12 3.5c5 0 9 3.2 9 7.2 0 4-4 7.2-9 7.2-.9 0-1.7-.1-2.5-.3L5.6 20l1-3.2C4.9 15.4 3 13.3 3 10.7c0-4 4-7.2 9-7.2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <a
              href="#contact"
              onClick={clearCourse}
              className="mt-6 inline-block rounded-full border border-gold/60 px-5 py-2 text-sm tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              ご予約はこちら
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-ink-line pt-8 sm:mt-16 sm:flex-row">
          <p className="text-xs tracking-wide text-ivory-muted">
            &copy; {year} {siteConfig.nameEn}. All Rights Reserved.
          </p>
          <a
            href="#top"
            className="py-1 text-xs tracking-widest text-ivory-muted transition-colors hover:text-gold"
          >
            ページトップへ ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
