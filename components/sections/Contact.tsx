"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

const inputClass =
  "w-full border border-ivory/8 bg-ivory/[0.03] px-5 py-4 text-ivory placeholder:text-ivory-muted/40 transition-colors focus:border-gold/60 focus:bg-ivory/[0.05]";

const labelClass = "text-xs tracking-[0.15em] text-ivory-muted";

function RequiredMark() {
  return (
    <span className="ml-1 text-gold" aria-hidden="true">
      *
    </span>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // 送信APIは未実装。実装時は fetch/Server Action をここに接続する。
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Contact" title="ご予約・お問い合わせ" />

        <Reveal className="mx-auto mt-6 max-w-md text-center" delay={0.05}>
          <p className="leading-relaxed text-ivory-muted">
            大切な夜のお席をご用意いたします。記念日・接待・特別なお食事など、ご希望に合わせて最適なお席をご案内いたします。
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={0.1}>
          <div className="grid gap-8 border border-ivory/10 bg-ivory/[0.03] p-8 text-center sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-ivory/10 sm:p-10 sm:text-left">
            <div className="sm:pr-10">
              <p className="text-xs tracking-[0.3em] text-gold uppercase">ご予約専用</p>
              <a
                href={`tel:${siteConfig.telephone.replace(/-/g, "")}`}
                className="mt-3 block font-display text-2xl text-ivory transition-colors hover:text-gold sm:text-3xl"
              >
                {siteConfig.telephoneDisplay}
              </a>
            </div>
            <div className="sm:pl-10">
              <p className="text-xs tracking-[0.3em] text-gold uppercase">営業時間</p>
              <p className="mt-3 text-xl text-ivory">17:00 - 23:00</p>
              <p className="mt-1 text-sm text-ivory-muted">(L.O. 22:00)</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={0.2}>
          {submitted ? (
            <div
              role="status"
              className="border border-gold/40 bg-ink-soft px-6 py-12 text-center"
            >
              <p className="font-serif text-xl text-ivory">
                ご予約のお申し込みありがとうございます。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
                内容を確認のうえ、担当スタッフよりご連絡いたします。
                <br />
                ※本サイトはデモのため、実際の送信は行われておりません。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    お名前
                    <RequiredMark />
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={`mt-2 ${inputClass}`}
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    お電話番号
                    <RequiredMark />
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className={`mt-2 ${inputClass}`}
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  メールアドレス
                  <RequiredMark />
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`mt-2 ${inputClass}`}
                  placeholder="example@mail.com"
                />
              </div>

              <div className="grid gap-7 sm:grid-cols-3">
                <div>
                  <label htmlFor="date" className={labelClass}>
                    ご希望日
                    <RequiredMark />
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="time" className={labelClass}>
                    ご希望時間
                    <RequiredMark />
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    ご人数
                    <RequiredMark />
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={20}
                    required
                    className={`mt-2 ${inputClass}`}
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  ご要望・お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`mt-2 ${inputClass} resize-none`}
                  placeholder="記念日のお祝い、苦手な食材、アレルギーなど、お気軽にご記入ください。"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gold py-4 text-sm tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-gold-soft sm:w-fit sm:px-14"
              >
                予約を申し込む
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
