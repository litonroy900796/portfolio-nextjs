import { ImageResponse } from "next/og";
import { SocialCard } from "@/lib/og-image";
import { SITE_NAME, AUTHOR } from "@/lib/seo";

export const alt = `${SITE_NAME} — ${AUTHOR.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialCard />, { ...size });
}
