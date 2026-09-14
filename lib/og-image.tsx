import { readFileSync } from "node:fs";
import { join } from "node:path";
import { AUTHOR, THEME_COLOR } from "@/lib/seo";

const faviconSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/favicon.png")
).toString("base64")}`;

const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/logo.png")
).toString("base64")}`;

export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        background: "#0a0a0a",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={faviconSrc}
        width={88}
        height={88}
        style={{ marginBottom: 36 }}
      />
      <img src={logoSrc} width={460} height={230} />
      <div
        style={{
          display: "flex",
          fontSize: 34,
          color: THEME_COLOR,
          marginTop: 8,
        }}
      >
        {AUTHOR.jobTitle} — React &amp; Next.js
      </div>
    </div>
  );
}
