/**
 * next/og の ImageResponse は日本語グリフを内蔵していないため、
 * Google Fonts の css2 API から必要な文字だけを含むサブセットフォントを都度取得する。
 * （Vercel公式が案内している OG 画像用の日本語フォント読み込み手法）
 */
export async function loadGoogleFont(text: string, weight = 700) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((res) => res.text());
  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];

  if (!fontUrl) {
    throw new Error("Failed to resolve Google Font URL for OG image");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}
