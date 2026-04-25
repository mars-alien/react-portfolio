import { COLOR_MAP } from "@/constants/theme";
import { PERSONAL } from "@/data/personal";

/**
 * CONTACT_LINKS — rendered as clickable cards in the Contact section.
 * href values are derived from PERSONAL so there is never a duplicate source.
 */
export const CONTACT_LINKS = [
  {
    abbr:  "EM",
    label: "Email",
    value: PERSONAL.email,
    href:  `mailto:${PERSONAL.email}`,
    color: COLOR_MAP.g600,
  },
  {
    abbr:  "LI",
    label: "LinkedIn",
    value: "linkedin.com/in/royalsachan",
    href:  PERSONAL.linkedin,
    color: COLOR_MAP.blue,
  },
  {
    abbr:  "GH",
    label: "GitHub",
    value: "github.com/mars-alien",
    href:  PERSONAL.github,
    color: COLOR_MAP.purple,
  },
  {
    abbr:  "LC",
    label: "LeetCode",
    value: "lazy-royal",
    href:  PERSONAL.leetcode,
    color: COLOR_MAP.amber,
  },
  {
    abbr:  "PF",
    label: "Portfolio",
    value: "lazyroyal.vercel.app",
    href:  PERSONAL.portfolio,
    color: COLOR_MAP.teal,
  },
];
