import { PERSONAL } from "@/data/personal";

const INFO_CARDS = [
  { lbl: "Education", val: "IIIT Senapati",   sub: "B.Tech CSE · 2023–2027"      },
  { lbl: "Location",  val: "Manipur, India",  sub: "Remote-friendly worldwide"    },
  { lbl: "Status",    val: "Open to Work",    sub: "Internships & Full-time"      },
  { lbl: "Focus",     val: "Backend · AI/ML", sub: "Systems · Design"            },
];

/**
 * About — two-column layout: bio card + four info cards.
 *
 * Props:
 *   scrollTo {fn} — smooth-scroll helper from page.jsx
 */
export default function About({ scrollTo }) {
  return (
    <section id="about" className="sec-about" aria-labelledby="about-h">
      <div className="section">
        <p className="lbl" data-reveal>Who I Am</p>
        <h2 id="about-h" className="h2" data-reveal>About Me</h2>

        <div className="about-grid">
          {/* Bio card */}
          <article className="card" data-reveal data-delay="0" style={{ padding: "30px" }}>
            <p style={{ fontSize: "15.5px", lineHeight: "1.82", marginBottom: "26px" }}>
              {PERSONAL.bio}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p"
                style={{ fontSize: "13.5px", padding: "10px 20px" }}
              >
                Download Resume ↓
              </a>
              <button
                className="btn-o"
                onClick={() => scrollTo("contact")}
                style={{ fontSize: "13.5px", padding: "10px 20px" }}
              >
                Contact Me →
              </button>
            </div>
          </article>

          {/* Info cards -> Replaced by Achievements Box */}
          <div className="achievements-box" data-reveal data-delay="120" style={{ marginTop: 0 }}>
            <div className="achieve-bg-glow"></div>
            <div className="achieve-content">
              <h3 className="achieve-title">
                
                Key Achievements
              </h3>
              <ul className="achieve-list" style={{ gridTemplateColumns: '1fr' }}>
                <li>Qualified <strong>GATE CS 2026</strong> with <strong>AIR 14800</strong> out of 200,000+ candidates.</li>
                <li>Ranked <strong>5204 globally</strong> in <strong>Meta Hacker Cup 2025</strong>, clearing Round 1 among hundreds of thousands of competitors worldwide.</li>
                <li>Selected among <strong>top 3 proposals</strong> from my college at <strong>5G Innovation Hackathon 2025</strong> by DoT, Government of India.</li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Media Feature Box (Times of India Proof) */}
        <div className="media-feature-box" data-reveal="up" data-delay="150">
          <div className="media-feature-content">
            <div className="proof-header">
              <span className="proof-dot"></span> Featured In
            </div>
            <h4 className="media-feature-title">Times of India Newspaper</h4>
            <p className="media-feature-desc">
              Recognized for securing AIR-2 in Engineer’s Ring of Honour (EROH) 2025 by Naukri.com among top IIT, IIIT, and NIT participants.
            </p>
          </div>
          <div className="media-feature-image-wrap">
            <img 
              src="/images/eroh-2025.jpg" 
              alt="Times of India EROH 2025 Feature" 
              className="media-feature-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
