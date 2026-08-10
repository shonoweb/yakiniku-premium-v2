import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          border: "2px solid #c9a15a",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontFamily: "Georgia, serif",
            color: "#e4c98a",
            display: "flex",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
