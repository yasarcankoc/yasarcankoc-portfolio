import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_TITLE } from "@/lib/site";

// Sosyal medyada link paylaşılınca görünen kart görseli (1200x630).
// Fontlar assets/ altından okunuyor — ImageResponse'un varsayılan fontu
// Türkçe karakterleri (ş, ç) desteklemeyebilir, o yüzden latin-ext kapsamlı
// Space Grotesk TTF'leri build sırasında dosyadan yükleniyor.

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#12141A";
const paper = "#ECEDEF";
const fog = "#9CA3AF";
const mist = "#5B5F6B";
const signal = "#4A5FFF";
const wire = "#34C795";

export default async function Image() {
  const [medium, bold] = await Promise.all([
    readFile(join(process.cwd(), "assets/SpaceGrotesk-Medium.ttf")),
    readFile(join(process.cwd(), "assets/SpaceGrotesk-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ink,
          padding: 72,
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Terminal eyebrow — Hero'daki "$ whoami" ile aynı dil */}
        <div style={{ display: "flex", fontSize: 30, fontWeight: 500 }}>
          <div style={{ color: signal }}>$</div>
          <div style={{ color: fog, marginLeft: 14 }}>whoami</div>
        </div>

        {/* Ana blok */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: paper,
              letterSpacing: -3,
            }}
          >
            Yaşar Can Koç
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 500,
              color: signal,
              marginTop: 10,
            }}
          >
            Full-Stack Web Geliştirici
          </div>
          <div
            style={{
              fontSize: 27,
              fontWeight: 500,
              color: fog,
              marginTop: 26,
              maxWidth: 760,
              lineHeight: 1.45,
            }}
          >
            Gerçek kullanıcılara hizmet veren web uygulamaları — backend'den
            deploy'a kadar.
          </div>
        </div>

        {/* Alt satır: wordmark + domain (canlı nokta ile) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 500 }}>
            <div style={{ color: paper }}>yck</div>
            <div style={{ color: signal }}>.</div>
            <div style={{ color: paper }}>dev</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 999,
                backgroundColor: wire,
                display: "flex",
                marginRight: 14,
              }}
            />
            <div style={{ fontSize: 27, fontWeight: 500, color: mist }}>
              yasarcankoc.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
