import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      <span className="font-display text-sm tracking-[0.35em] text-gold uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-medium text-ivory sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-6 h-px w-16 bg-gradient-to-r from-gold-soft to-gold-deep"
      />
      {subtitle ? (
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ivory-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
