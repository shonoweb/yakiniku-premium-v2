"use client";

import Image from "next/image";
import { useReservation } from "@/components/ReservationProvider";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { courseNames } from "@/lib/site-config";

const courses = [
  {
    name: courseNames[0],
    price: "¥12,000",
    recommended: false,
    image: "/images/menu-1.jpg",
    items: ["本日の前菜", "厳選3種盛り合わせ", "上タン塩・カルビ・赤身", "〆の一品（ご飯物 or 冷麺）", "デザート"],
  },
  {
    name: courseNames[1],
    price: "¥18,000",
    recommended: true,
    image: "/images/menu-2.jpg",
    items: [
      "本日の先付・お造り",
      "希少部位5種盛り合わせ",
      "シャトーブリアン",
      "特上カルビ・特選ロース",
      "〆の一品（ご飯物 or 冷麺）",
      "デザート・水菓子",
    ],
  },
  {
    name: courseNames[2],
    price: "¥28,000",
    recommended: false,
    image: "/images/menu-3.jpg",
    items: [
      "先付・お造り 二種",
      "希少部位7種盛り合わせ",
      "シャトーブリアン食べ比べ",
      "A5黒毛和牛 特選盛り",
      "〆の一品（ご飯物 or 冷麺）",
      "特製デザートコース",
    ],
  },
];

const alaCarte = [
  {
    name: "特選ロース",
    price: "¥4,800",
    note: "きめ細やかな霜降りの一皿",
    image: "/images/menu-tokusen-loin.jpg",
    alt: "黒毛和牛の特選ロース",
  },
  {
    name: "上ハラミ",
    price: "¥3,600",
    note: "赤身の旨みと柔らかな噛み心地",
    image: "/images/menu-jyo-harami.jpg",
    alt: "黒毛和牛の上ハラミ",
  },
  {
    name: "シャトーブリアン",
    price: "¥7,800",
    note: "一頭からわずかな極上部位",
    image: "/images/menu-chateaubriand.jpg",
    alt: "黒毛和牛のシャトーブリアン",
  },
  {
    name: "特選タン",
    price: "¥3,800",
    note: "厚切りで愉しむ、上質な旨み",
    image: "/images/menu-tokusen-tan.jpg",
    alt: "特選タン",
  },
  {
    name: "サーロイン焼きすき",
    price: "¥4,500",
    note: "濃厚な卵黄と味わう、極上の一枚",
    image: "/images/menu-sirloin-sukiyaki.jpg",
    alt: "サーロイン焼きすき",
  },
  {
    name: "厳選和牛盛り合わせ",
    price: "¥8,800",
    note: "選び抜いた黒毛和牛を、一皿に",
    image: "/images/menu-wagyu-assortment.jpg",
    alt: "厳選黒毛和牛盛り合わせ",
  },
];

export default function Menu() {
  const { selectCourse } = useReservation();

  return (
    <section id="menu" className="relative bg-ink-soft py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Menu"
          title="コースと逸品、その日の一枚から。"
          subtitle="仕入れによって内容は変わります。おまかせコースを軸に、その日いちばんの部位を単品でもお愉しみいただけます。表示は全て税込・サービス料別途10%を頂戴しております。"
        />

        <div className="mt-14 grid gap-8 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {courses.map((course, i) => (
            <Reveal key={course.name} delay={i * 0.12} className="h-full">
              <div
                className={`group flex h-full flex-col overflow-hidden border ${
                  course.recommended
                    ? "border-gold bg-ink shadow-[0_0_40px_-15px_rgba(201,161,90,0.5)]"
                    : "border-ink-line bg-ink/60"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4]">
                  <Image
                    src={course.image}
                    alt={`黒毛和牛 ${course.name}コースの一例`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                  />
                  {course.recommended ? (
                    <span className="absolute top-5 left-5 rounded-full bg-gold px-3 py-1 text-xs tracking-widest text-ink">
                      おすすめ
                    </span>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-ivory">{course.name}</h3>
                    <p className="mt-1 font-display text-3xl text-gold">{course.price}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <ul className="flex flex-1 flex-col gap-3 text-sm leading-relaxed text-ivory-muted">
                    {course.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => selectCourse(course.name)}
                    className="mt-8 block rounded-full border border-gold/50 py-3 text-center text-sm tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
                  >
                    このコースを予約する
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 sm:mt-24">
          <Reveal>
            <h3 className="font-display text-sm uppercase tracking-[0.35em] text-gold">
              A la carte
            </h3>
            <p className="mt-2 text-ivory-muted">一皿から愉しむ、単品のご紹介（一例）</p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {alaCarte.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.06} as="li">
                <div className="group">
                  <PlaceholderImage
                    src={item.image ?? "/images/placeholder-square.svg"}
                    alt={
                      item.image
                        ? item.alt
                        : `${item.name}のイメージ写真（準備中・実写真に差し替え予定）`
                    }
                    className="aspect-square w-full"
                  />
                  <h4 className="mt-3 text-base font-medium text-ivory sm:text-sm">{item.name}</h4>
                  <p className="text-sm text-ivory-muted sm:text-xs">{item.note}</p>
                  <p className="mt-1 font-display text-gold">{item.price}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
