import { ECO_BAR_ITEMS } from "@/data/eco";

/**
 * EcoBar — scrolling marquee announcement strip at the very top of the page.
 * Reads ECO_BAR_ITEMS from data; accepts no logic props.
 */
export default function EcoBar() {
  const doubled = [...ECO_BAR_ITEMS, ...ECO_BAR_ITEMS];

  return (
    <div className="eco-bar" role="marquee" aria-label="Eco software philosophy">
      <div className="eco-bar-track">
        {doubled.map((item, i) => (
          <span key={i} className="eco-bar-item">
            {item}
            <span style={{ color: "rgba(255,255,255,.3)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
