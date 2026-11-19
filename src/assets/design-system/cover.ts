// Project card cover for the Madbox Design System case: an inline SVG built
// from the system's own tokens, so no binary asset is needed.
const primary = ["#fff5f3", "#ffe8e3", "#ffd5cc", "#ffb8a8", "#ff8a73", "#ff6347", "#ff4526", "#e63312", "#c72b0f", "#a32610"];
const neutral = ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717"];
const semantic = ["#10b981", "#ef4444", "#f59e0b", "#3b82f6"];
const font = "system-ui,Arial,sans-serif";

const swatches = (colors: string[], y: number, stroke: boolean) =>
  colors
    .map(
      (c, i) =>
        `<rect x="${60 + i * 68}" y="${y}" width="64" height="72" rx="6" fill="${c}"${stroke ? ' stroke="#e5e5e5"' : ""}/>`,
    )
    .join("");

const svg = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">',
  '<rect width="800" height="600" fill="#fafafa"/>',
  `<text x="60" y="110" font-family="${font}" font-size="44" font-weight="700"><tspan fill="#ec4899">MAD</tspan><tspan fill="#f59e0b">BO</tspan><tspan fill="#ff6347">X</tspan></text>`,
  `<text x="62" y="140" font-family="${font}" font-size="14" letter-spacing="5" fill="#737373">DESIGN SYSTEM</text>`,
  swatches(primary, 200, true),
  swatches(neutral, 300, true),
  swatches(semantic, 400, false),
  `<rect x="400" y="412" width="150" height="48" rx="8" fill="#ff6347"/>`,
  `<text x="475" y="442" text-anchor="middle" font-family="${font}" font-size="16" font-weight="600" fill="#fff">Button</text>`,
  `<rect x="566" y="412" width="174" height="48" rx="8" fill="#fff" stroke="#e5e5e5"/>`,
  `<text x="653" y="442" text-anchor="middle" font-family="${font}" font-size="16" font-weight="600" fill="#171717">Outline</text>`,
  "</svg>",
].join("");

export default `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
