import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;

export default async function Image() {
  const text = `${siteConfig.shortName}${siteConfig.nameEn}${siteConfig.tagline}`;
  const notoSansJP = await loadGoogleFont(text, 700);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #100e0b 0%, #0a0a0a 55%, #050505 100%)",
          color: "#f3ede0",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 14,
            color: "#e4c98a",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {siteConfig.nameEn}
        </div>
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700, display: "flex" }}>
          {siteConfig.shortName}
        </div>
        <div style={{ marginTop: 26, width: 90, height: 2, background: "#c9a15a", display: "flex" }} />
        <div style={{ marginTop: 30, fontSize: 26, color: "#b6ae9d", display: "flex" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans JP", data: notoSansJP, weight: 700, style: "normal" }],
    }
  );
}
