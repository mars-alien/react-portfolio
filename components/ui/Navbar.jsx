import DarkToggle from "@/components/ui/DarkToggle";
import { NAV_LINKS } from "@/constants/nav";

/**
 * Navbar — top navigation bar.
 * Pure presentational: all state and handlers come from page.jsx via props.
 *
 * Props:
 *   scrolled    {boolean}  — true when user has scrolled past threshold
 *   darkMode    {boolean}  — current dark mode state
 *   onToggleDark {fn}     — dark mode toggle handler
 *   onMenuOpen  {fn}      — open mobile menu
 *   scrollTo    {fn}      — smooth-scroll to a section id
 *   resumeUrl   {string}  — href for the Resume button
 */
export default function Navbar({
  scrolled,
  darkMode,
  onToggleDark,
  menuOpen,
  onMenuToggle,
  scrollTo,
  resumeUrl,
}) {
  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nb-inner">
        {/* Desktop links */}
        <ul className="nb-links">
          {NAV_LINKS.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: dark toggle + resume + hamburger */}
        <div className="nb-right">
          <DarkToggle darkMode={darkMode} onToggle={onToggleDark} />
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-resume"
          >
            Resume ↗
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
