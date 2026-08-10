import Image from "next/image";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** アスペクト比・角丸などレイアウトに関するクラスをここで指定する */
  className?: string;
};

/**
 * 実写真がない間の代替表示。
 * 差し替え時は呼び出し側で src と alt を実際の写真パスへ変更するだけでよい。
 */
export default function PlaceholderImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div className={`group relative overflow-hidden bg-ink-soft ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
    </div>
  );
}
