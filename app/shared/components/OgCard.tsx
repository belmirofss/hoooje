import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Social preview in the site's look: yellow page, white card, hard shadow.
export const ogImage = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 64,
        background: "#ffe45e",
        color: "#111111",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: "#ffffff",
          border: "6px solid #111111",
          borderRadius: 40,
          boxShadow: "14px 14px 0 #111111",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            padding: "10px 26px",
            borderRadius: 999,
            background: "#111111",
            color: "#ffe45e",
            fontSize: 34,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 44, letterSpacing: 4 }}>HOOOJE</div>
      </div>
    </div>,
    OG_SIZE
  );
