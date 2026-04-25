import { EXPERIENCE } from "@/data/experience";

/**
 * Experience — vertical timeline of professional roles.
 * Reads from data/experience.js; accepts no props.
 */
export default function Experience() {
  return (
    <section id="experience" className="sec-exp" aria-labelledby="exp-h">
      <div className="section">
        <p className="lbl" data-reveal>Work History</p>
        <h2 id="exp-h" className="h2" data-reveal>Professional Experience</h2>
        <p className="sub" data-reveal>
          Real-world backend engineering — building secure, high-performance APIs.
        </p>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="tl-item">
              <div
                className="tl-dot"
                style={{ background: exp.color }}
                aria-hidden="true"
              />
              <article className="card exp-card">
                <h3 className="exp-co">{exp.company}</h3>
                <div className="exp-role" style={{ color: exp.color }}>{exp.role}</div>
                <div className="exp-period">🗓 {exp.period}</div>

                <div className="exp-tags">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="etag"
                      style={{ background: exp.bg, color: exp.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="exp-buls" aria-label="Key achievements">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
