import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const story = [
  { text: "産地やブランドだけでは選ばない。" },
  { text: "肉本来の状態を見極め、\nその日に最も美しい一皿だけを\nお客様のもとへ届ける。" },
  { text: "炭火の香り、焼き上がる瞬間、\n大切な人と過ごす時間。" },
  { text: "焼肉 燈 -AKARI- は、\n特別な夜のための一軒です。", accent: true },
];

const features = [
  {
    num: "01",
    title: "素材へのこだわり",
    body: "全国から選び抜いた黒毛和牛。その時もっとも美しい状態の肉だけを仕入れています。",
  },
  {
    num: "02",
    title: "炭火の技",
    body: "火入れは料理の完成を決める最後の工程。炭火ならではの香りと旨味を引き出します。",
  },
  {
    num: "03",
    title: "記憶に残る空間",
    body: "静かな個室と落ち着いた照明。食事だけではなく、時間そのものを楽しむ空間を。",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="About" title="一頭の和牛と向き合う、静かな時間。" />

        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-8 lg:mt-16">
          {story.map((line, i) => (
            <Reveal key={line.text} delay={i * 0.12}>
              <p
                className={
                  line.accent
                    ? "font-serif text-xl leading-loose text-gold sm:text-2xl"
                    : "text-lg leading-loose text-ivory-muted sm:text-xl"
                }
                style={{ whiteSpace: "pre-line" }}
              >
                {line.text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8 lg:mt-28 lg:gap-16">
          {features.map((f, i) => (
            <Reveal key={f.num} delay={i * 0.12}>
              <div
                className={`flex flex-col items-center gap-4 text-center ${
                  i > 0
                    ? "border-t border-ink-line pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8"
                    : ""
                }`}
              >
                <span className="font-display text-3xl text-gold-deep">{f.num}</span>
                <h3 className="text-xl font-medium text-ivory">{f.title}</h3>
                <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                <p className="leading-loose text-ivory-muted sm:leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
