/**
 * Leaf — custom SVG vector leaf used as a decorative element in the Hero section.
 * Accepts only props; never imports data or theme constants directly.
 */
export default function Leaf({ w = 72, h = 96, color = "#059669" }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 72 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Decorative leaf illustration"
    >
      <path d="M36 4C18 4 4 22 4 48c0 26 14 40 32 44 0 0 0-44 0-88Z"  fill={color} opacity=".65" />
      <path d="M36 4C54 4 68 22 68 48c0 26-14 40-32 44 0 0 0-44 0-88Z" fill={color} opacity=".4"  />
      <line x1="36" y1="8"  x2="36" y2="88" stroke={color} strokeWidth="1.5" opacity=".45" />
      <path d="M36 26C26 20 16 32 22 43"  stroke={color} strokeWidth="1"   fill="none" opacity=".35" />
      <path d="M36 52C46 46 56 58 50 68"  stroke={color} strokeWidth="1"   fill="none" opacity=".35" />
      <path d="M36 38C28 34 20 44 25 53"  stroke={color} strokeWidth=".8"  fill="none" opacity=".28" />
    </svg>
  );
}
