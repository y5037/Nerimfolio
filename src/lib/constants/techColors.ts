export const colorMap = {
  cyan: "text-cyan-400 border-cyan-400",
  pink: "text-pink-400 border-pink-400",
  yellow: "text-yellow-400 border-yellow-400",
  purple: "text-purple-400 border-purple-400",
  fuchsia: "text-fuchsia-400 border-fuchsia-400",
  emerald: "text-emerald-400 border-emerald-400",
  lime: "text-lime-400 border-lime-400",
  rose: "text-rose-400 border-rose-400",
  orange: "text-orange-400 border-orange-400",
  teal: "text-teal-400 border-teal-400",
  amber: "text-amber-400 border-amber-400",
} as const;

export type ColorKey = keyof typeof colorMap;