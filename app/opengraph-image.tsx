import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: site.themeColor,
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#c9a227",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 920,
            fontSize: 42,
            lineHeight: 1.35,
          }}
        >
          {site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
