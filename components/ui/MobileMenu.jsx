import { NAV_LINKS } from "@/constants/nav";

/**
 * MobileMenu — full-screen overlay navigation for small screens.
 * Pure presentational: open/close state lives in page.jsx.
 */
export default function MobileMenu({ open, scrollTo }) {
  return (
    <div
      className={`mob-menu${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {NAV_LINKS.map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => { e.preventDefault(); scrollTo(id); }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
