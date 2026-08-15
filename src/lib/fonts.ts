import { Archivo_Black, Inter, Cairo } from "next/font/google";

/**
 * Display face — Archivo Black. Bold, wide grotesk, used for headlines,
 * stat numbers, and shout-y micro-labels. Open counters and natural
 * letterspacing keep it legible even in long headlines — swapped in from
 * Anton (2026-08-14) after it read as too tight/condensed. Latin only (no
 * Arabic glyphs), so Arabic headlines fall back to Cairo's black weight.
 */
export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

/**
 * Body face — Inter. Clean, neutral, does the actual reading work.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

/**
 * Arabic face — Cairo. Variable weight so it can stand in for both the
 * display face (900) and the body face (400/600) in RTL contexts.
 */
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
});
