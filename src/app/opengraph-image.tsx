import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/utils";

export const alt = "Portfolio preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const host = siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#818cf8" }}>
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#a1a1aa",
              maxWidth: 940,
            }}
          >
            {site.headline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8b8b94" }}>
          {host}
        </div>
      </div>
    ),
    { ...size },
  );
}
