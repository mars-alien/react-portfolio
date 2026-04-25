import { NAV_LINKS } from "@/constants/nav";
import { PERSONAL } from "@/data/personal";
import { FOOTER_TECH_STACK } from "@/data/eco";

/**
 * Footer — dark four-column grid with brand, nav, tech stack, and profiles.
 *
 * Props:
 *   scrollTo {fn} — smooth-scroll helper from page.jsx
 */
export default function Footer({ scrollTo }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-grid">
        {/* Col 1 — Brand */}
        <div>
          <div className="f-logo">Royal Sachan</div>
          <p className="f-about">
            Final-year CSE student at IIIT Senapati, Manipur. Building efficient backend
            systems and AI/ML solutions
          </p>
          <div className="f-quote">
            &ldquo;The best code runs efficiently, maintainably, and leaves the world a little better.&rdquo;
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <div className="f-col-title">Navigate</div>
          <ul className="f-list">
            {NAV_LINKS.map(([lbl, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                >
                  {lbl}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Tech Stack */}
        <div>
          <div className="f-col-title">Tech Stack</div>
          <ul className="f-list">
            {FOOTER_TECH_STACK.map((t) => (
              <li key={t}><span>{t}</span></li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Profiles */}
        <div>
          <div className="f-col-title">Profiles</div>
          <ul className="f-list">
            {[
              { lbl: "GitHub",    href: PERSONAL.github    },
              { lbl: "LinkedIn",  href: PERSONAL.linkedin  },
              { lbl: "LeetCode",  href: PERSONAL.leetcode  },
              { lbl: "CodeChef",  href: PERSONAL.codechef  },
              { lbl: "Email",     href: `mailto:${PERSONAL.email}` },
            ].map((l) => (
              <li key={l.lbl}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.lbl}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="foot-bottom">
        <div className="foot-bottom-in" style={{ justifyContent: "center", width: "100%" }}>
          <p style={{ textAlign: "center", width: "100%" }}>© 2026 Royal Sachan · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
