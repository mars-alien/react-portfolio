import { ECO_PRINCIPLES } from "@/data/eco";

/**
 * EcoStrip — dark green full-width band showcasing eco coding principles.
 * Data-driven from eco.js; no props required.
 */
export default function EcoStrip() {
  return (
    <div className="eco-strip" aria-labelledby="eco-h">
      <div className="eco-strip-inner">
        <h2 id="eco-h" className="eco-h">🌱 Code for a Greener Future</h2>
        <p className="eco-sub">
          The principles that guide how I build software — beyond just making it work.
        </p>
        <div className="eco-grid">
          {ECO_PRINCIPLES.map((p) => (
            <article key={p.title} className="eco-card">
              <div className="eco-icon" aria-hidden="true">{p.icon}</div>
              <h3 className="eco-title">{p.title}</h3>
              <p className="eco-desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
