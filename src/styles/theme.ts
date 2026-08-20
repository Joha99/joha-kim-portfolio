export const theme = {
  colors: {
    bg: "#ffffff",
    fg: "#111111",
    fgMuted: "#6b7280",
    border: "#e5e7eb",
    accent: "#111111",
    accentFg: "#ffffff",
    surface: "#f9fafb",
  },
  fonts: {
    sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    mono: "ui-monospace, 'SF Mono', Consolas, monospace",
  },
} as const;

export type Theme = typeof theme;
