import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const courses = [
  {
    name: "竹 -TAKE-",
    price: "¥12,000",
    recommended: false,
    image: "/images/menu-1.jpg",
    items: ["本日の前菜", "厳選3種盛り合わせ", "上タン塩・カルビ・赤身", "〆の一品（ご飯物 or 冷麺）", "デザート"],
  },
  {
    name: "松 -MATSU-",
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
    name: "極 -KIWAMI-",
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
  { name: "特選ロース", price: "¥4,800", note: "きめ細やかな霜降りの一皿" },
  { name: "上ハラミ", price: "¥3,600", note: "赤身の旨みと柔らかな噛み心地" },
  { name: "シャトーブリアン", price: "¥7,800", note: "一頭からわずかな極上部位" },
  { name: "特選ユッケ", price: "¥2,800", note: "職人が手切りで仕上げる一品" },
  { name: "特製冷麺", price: "¥1,600", note: "〆に人気の自家製麺" },
  { name: "厳選ワインペアリング", price: "¥3,500〜", note: "ソムリエ厳選の一杯" },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Menu"
          title="コースと逸品、その日の一枚から。"
          subtitle="仕入れによって内容は変わります。おまかせコースを軸に、その日いちばんの部位を単品でもお愉しみいただけます。表示は全て税込・サービス料別途10%を頂戴しております。"
        />

        <div className="mt-16 grid gap-8 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
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
                    alt={`${course.name}コースの一例`}
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
                    className="mt-8 block rounded-full border border-gold/50 py-3 text-center text-sm tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
                  >
                    このコースを予約する
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
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
                    src="/images/placeholder-square.svg"
                    alt={`${item.name}のイメージ写真（準備中・実写真に差し替え予定）`}
                    className="aspect-square w-full"
                  />
                  <h4 className="mt-3 text-sm font-medium text-ivory">{item.name}</h4>
                  <p className="text-xs text-ivory-muted">{item.note}</p>
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
