/**
 * Contact — message form section.
 *
 * Props (all from useContactForm hook via page.jsx):
 *   form     {object}  — { name, email, subject, message }
 *   setField {fn}      — (key, value) => void
 *   submit   {fn}      — validates and opens mailto: link
 *   sent     {boolean} — true for 4 s after successful submission
 */
export default function Contact({ form, setField, submit, sent }) {
  return (
    <section
      id="contact"
      className="sec-contact"
      aria-labelledby="contact-h"
      style={{ padding: "var(--pad) 28px" }}
    >
      <div className="wrap">
        <p className="lbl" data-reveal>Get In Touch</p>
        <h2 id="contact-h" className="h2" data-reveal>Contact Me</h2>
        <p className="sub" data-reveal>
          Available for internships, freelance work, and open-source collaboration.
        </p>

        <div className="contact-grid">
          {/* Message form — div-based, no <form> tag */}
          <div className="card c-form" data-reveal data-delay="0">
            <div className="f-title">Send a Message</div>

            {sent && (
              <div className="f-success" role="alert">
                Message sent — opening your email client…
              </div>
            )}

            <div className="f-row">
              <div className="f-fld">
                <label htmlFor="f-name" className="f-lbl">NAME</label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Your name"
                  className="f-inp"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
              </div>
              <div className="f-fld">
                <label htmlFor="f-email" className="f-lbl">EMAIL</label>
                <input
                  id="f-email"
                  type="email"
                  placeholder="your@email.com"
                  className="f-inp"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
              </div>
            </div>

            <div className="f-fld">
              <label htmlFor="f-subject" className="f-lbl">SUBJECT</label>
              <input
                id="f-subject"
                type="text"
                placeholder="What's this about?"
                className="f-inp"
                value={form.subject}
                onChange={(e) => setField("subject", e.target.value)}
              />
            </div>

            <div className="f-fld">
              <label htmlFor="f-msg" className="f-lbl">MESSAGE</label>
              <textarea
                id="f-msg"
                placeholder="Tell me about your project or opportunity…"
                className="f-inp f-ta"
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
              />
            </div>

            <button
              className="btn-p"
              onClick={submit}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
