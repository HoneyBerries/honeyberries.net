import { ImageResponse } from "next/og"

export const alt = "HoneyBerries — Computer Science Student & Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
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
          backgroundColor: "#0c0a09",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 80% 75%, rgba(236,72,153,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            backgroundImage: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          HoneyBerries
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "#d6d3d1",
          }}
        >
          Computer Science · Machine Learning · AI
        </div>
      </div>
    ),
    { ...size }
  )
}
