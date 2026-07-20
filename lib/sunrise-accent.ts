/** Logo navy: PROJECT SUNRISE mark (~#0b1f3a). */
export const LOGO_NAVY = "#0b1f3a";
export const BLUEPRINT_BLUE = "#2563eb";

/** Dawn → full sunrise keyframes (excl. Blueprint THE FIX blue). */
const SUNRISE_STOPS: { t: number; h: number; s: number; l: number }[] = [
  { t: 0, h: 220, s: 58, l: 28 }, // early dawn — deep navy
  { t: 0.14, h: 338, s: 52, l: 42 }, // rose / pink dawn
  { t: 0.28, h: 14, s: 75, l: 44 }, // dark orange dawn
  { t: 0.42, h: 22, s: 86, l: 50 }, // coral
  { t: 0.56, h: 30, s: 90, l: 52 }, // mid sunrise orange
  { t: 0.7, h: 38, s: 88, l: 55 }, // gold
  { t: 0.85, h: 46, s: 84, l: 58 }, // bright gold
  { t: 1, h: 52, s: 78, l: 62 }, // full sunrise — soft yellow light
];

function lerp(a: number, b: number, u: number) {
  return a + (b - a) * u;
}

function lerpHue(a: number, b: number, u: number) {
  let d = b - a;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return (a + d * u + 360) % 360;
}

/**
 * Early dawn → mid sunrise → full sunrise across an indexed sequence.
 * Blueprint should use BLUEPRINT_BLUE instead (not this sequence).
 */
export function sunriseAccent(index: number, total: number) {
  const t = total <= 1 ? 0 : index / (total - 1);
  let i = 0;
  while (i < SUNRISE_STOPS.length - 2 && t > SUNRISE_STOPS[i + 1].t) i += 1;
  const a = SUNRISE_STOPS[i];
  const b = SUNRISE_STOPS[i + 1];
  const u = (t - a.t) / (b.t - a.t || 1);
  const h = lerpHue(a.h, b.h, u);
  const s = lerp(a.s, b.s, u);
  const l = lerp(a.l, b.l, u);
  // Stronger left wash in dark dawn so the stripe reads on white.
  const washA = 0.08 + (1 - t) * 0.07;
  return {
    accent: `hsl(${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%)`,
    wash: `hsl(${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}% / ${washA.toFixed(3)})`,
  };
}

export function blueprintAccent() {
  return { accent: BLUEPRINT_BLUE, wash: "rgba(37, 99, 235, 0.12)" };
}
