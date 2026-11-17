import { ImageResponse } from "next/og";
import { LOGO_LINE, LOGO_SPARK, LOGO_VIEWBOX, LOGO_WORD } from "@/components/logo-paths";

export const alt = "enyday: more than brushing. more than basics.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "#9eadf4",
          gap: 48,
        }}
      >
        <svg viewBox={LOGO_VIEWBOX} width={760} height={240}>
          <path d={LOGO_WORD} fill="#263197" fillRule="evenodd" />
          <path d={LOGO_LINE} fill="#f6f4f0" />
          <path d={LOGO_SPARK} fill="#f6f4f0" />
        </svg>
        <div style={{ display: "flex", fontSize: 44, color: "#f6f4f0", letterSpacing: -1 }}>
          more than brushing. more than basics.
        </div>
      </div>
    ),
    size,
  );
}
