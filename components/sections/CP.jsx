import { CP_STATS, CP_HIGHLIGHTS } from "@/data/cp";
import { PERSONAL } from "@/data/personal";
import { COLOR_MAP } from "@/constants/theme";

const CP_PROFILES = [
  { label: "LeetCode",   icon: "🏆", href: PERSONAL.leetcode,   color: COLOR_MAP.amber  },
  { label: "CodeChef",   icon: "👨‍🍳", href: PERSONAL.codechef,   color: COLOR_MAP.purple },
  { label: "Codeforces", icon: "⚡", href: PERSONAL.codeforces, color: COLOR_MAP.blue   },
];

/**
 * CP — Competitive Programming section with stat cards, achievement list, and profile links.
 * Reads from data/cp.js and data/personal.js; accepts no props.
 */
export default function CP() {
  return (
    <section id="cp" aria-labelledby="cp-h">
      <div className="section">
        <p className="lbl">Problem Solving</p>
        <h2 id="cp-h" className="h2">Competitive Programming</h2>
        <p className="sub">
          500+ problems across LeetCode, Codeforces, CodeChef &amp; GeeksforGeeks.
        </p>

        {/* Stat cards */}
        <div className="cp-grid">
          {CP_STATS.map((s) => (
            <article key={s.label} className="card cp-stat">
              <div className="cp-ico" aria-hidden="true">{s.icon}</div>
              <div className="cp-val" style={{ color: s.color }}>{s.value}</div>
              <div className="cp-lbl">{s.label}</div>
            </article>
          ))}
        </div>

        {/* Highlights */}
        <div className="card cp-hl">
          <h3 style={{
            fontFamily: "var(--font-syne),'Syne',sans-serif",
            fontSize: "17px", fontWeight: 800, marginBottom: "14px",
          }}>
            Highlights &amp; Achievements
          </h3>
          {CP_HIGHLIGHTS.map((hl) => (
            <div key={hl.title} className="hl-row">
              <span className="hl-ico" aria-hidden="true">{hl.icon}</span>
              <div>
                <div className="hl-title">{hl.title}</div>
                <div className="hl-desc">{hl.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile links */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
          {CP_PROFILES.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="plink"
              style={{ borderColor: `${p.color}30`, color: p.color }}
              aria-label={`${p.label} profile`}
            >
              <span aria-hidden="true">{p.icon}</span> {p.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
