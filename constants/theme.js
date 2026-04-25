/**
 * COLOR_MAP — single source of truth for every colour used in the portfolio.
 * Never hardcode a hex value inside a component; always reference this map.
 */
export const COLOR_MAP = {
  /* Green palette */
  g50:    "#f0fdf4",
  g100:   "#dcfce7",
  g200:   "#bbf7d0",
  g300:   "#86efac",
  g400:   "#4ade80",
  g500:   "#22c55e",
  g600:   "#16a34a",
  g700:   "#15803d",
  g800:   "#166534",
  g900:   "#14532d",

  /* Contextual accents */
  teal:   "#0d9488",
  amber:  "#d97706",
  purple: "#7c3aed",
  blue:   "#2563eb",
  rose:   "#e11d48",

  /* Neutrals */
  white:        "#ffffff",
  bodyLight:    "#1a2e1a",
  bodyDark:     "#d1fae5",
  subLight:     "#4a7a4a",
  subDark:      "#86efac",
  mutedLight:   "#6b7280",
  mutedDark:    "#6ee7b7",
  bulletLight:  "#374151",
  bulletDark:   "#a7f3d0",
};

/** Design tokens as CSS-variable names — used when building inline style objects. */
export const CSS_VAR = {
  primary:     "var(--g600)",
  accent:      "var(--g400)",
  cardBg:      "var(--card-bg)",
  cardBorder:  "var(--card-border)",
  shadow:      "var(--shadow)",
  shadowHover: "var(--shadow-hover)",
  radius:      "var(--radius)",
  radiusSm:    "var(--radius-sm)",
  pad:         "var(--pad)",
};
