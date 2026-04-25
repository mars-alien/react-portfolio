import Leaf from "@/components/ui/Leaf";
import { PERSONAL } from "@/data/personal";
import { TECH_BADGES } from "@/data/eco";

/* Static leaf positions — defined here, not in data/, as they are layout constants */
const LEAVES = [
  { top:"9%",    left:"4%",   rot:"-10deg", delay:"0s",   w:68,  h:90  },
  { top:"18%",   right:"6%",  rot:"55deg",  delay:"1.5s", w:88,  h:116 },
  { bottom:"22%",left:"3%",   rot:"-28deg", delay:"3.1s", w:60,  h:80  },
  { bottom:"14%",right:"4%",  rot:"115deg", delay:"0.7s", w:78,  h:104 },
  { top:"48%",   left:"7%",   rot:"62deg",  delay:"2.2s", w:64,  h:85  },
];

/**
 * Hero — full-viewport introduction section.
 *
 * Props:
 *   roleText {string} — current typewriter output (from useTypewriter hook)
 *   scrollTo {fn}    — smooth-scroll helper from page.jsx
 */
export default function Hero({ roleText, scrollTo }) {
  return (
    <section id="hero" className="hero sec-hero" aria-label="Introduction">
      {/* Floating leaf decorations */}
      {LEAVES.map((l, i) => (
        <div
          key={i}
          className="leaf-wrap"
          aria-hidden="true"
          style={{
            top: l.top, bottom: l.bottom,
            left: l.left, right: l.right,
            "--rot": l.rot,
            animationDelay: l.delay,
          }}
        >
          <Leaf w={l.w} h={l.h} color="#059669" />
        </div>
      ))}

      <div className="hero-grid">
        {/* ── Left column ── */}
        <div className="hero-left">
          <div className="open-badge">
            <span className="pulse" aria-hidden="true" />
            Open to Internships &amp; Full-time
          </div>

          <h1 className="hero-name">
            Royal<br />Sachan
          </h1>

          <div className="role-wrap" aria-live="polite" aria-atomic="true">
            <span className="role-txt">
              {roleText}
              <span className="cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-desc">
            {PERSONAL.tagline}. Final-year CSE student at IIIT Senapati building backend
            systems &amp; AI/ML pipelines — code that is not just functional,
            but&nbsp;<strong>efficient</strong>.
          </p>

          <div className="hero-ctas">
            <button className="btn-p" onClick={() => scrollTo("contact")}>
              Get In Touch ↗
            </button>
            <button className="btn-o" onClick={() => scrollTo("projects")}>
              View Projects →
            </button>
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-o"
            >
              Resume ↓
            </a>
          </div>

        </div>

        {/* ── Right column ── */}
        <div className="hero-right">
          <div className="avatar">
            <img src={PERSONAL.photoUrl} alt="Royal Sachan — Full Stack Developer" />
          </div>
          <div className="badges" aria-label="Technology badges">
            {TECH_BADGES.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
