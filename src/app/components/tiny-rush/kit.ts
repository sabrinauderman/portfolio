// Game objects and HUD components captured from the live Tiny Rush build.
const files = import.meta.glob("../../../assets/tiny-rush/kit/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function kit(name: string): string {
  const src = files[`../../../assets/tiny-rush/kit/${name}.jpg`];
  if (!src) throw new Error(`Missing Tiny Rush kit image: ${name}`);
  return src;
}
