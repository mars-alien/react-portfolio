"use client";

import { PERSONAL } from "@/data/personal";

/* Inline SVG icons — no external icon library needed */
const icons = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  LeetCode: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      {/* LeetCode official shape — orange bracket with slash */}
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
    </svg>
  ),
  Portfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const LINKS = [
  { key: "Email",     label: "Email",     value: PERSONAL.email,     href: `mailto:${PERSONAL.email}`,  color: "#16a34a" },
  { key: "LinkedIn",  label: "LinkedIn",  value: "royalsachan",      href: PERSONAL.linkedin,           color: "#2563eb" },
  { key: "GitHub",    label: "GitHub",    value: "mars-alien",       href: PERSONAL.github,             color: "#7c3aed" },
  { key: "LeetCode",  label: "LeetCode",  value: "lazy-royal",       href: PERSONAL.leetcode,           color: "#d97706" },
  { key: "Portfolio", label: "Portfolio", value: "lazyroyal.vercel", href: PERSONAL.portfolio,          color: "#0d9488" },
];

export default function SocialSidebar() {
  return (
    <aside className="ssb" aria-label="Contact sidebar">
      <ul className="ssb__list">
        {LINKS.map((link) => (
          <li key={link.key} className="ssb__item">
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="ssb__link"
              style={{ "--accent": link.color }}
              aria-label={`${link.label}: ${link.value}`}
              title={link.value}
            >
              <span className="ssb__icon" aria-hidden="true">
                {icons[link.key]}
              </span>
              <span className="ssb__label" aria-hidden="true">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <span className="ssb__line" aria-hidden="true" />
    </aside>
  );
}
