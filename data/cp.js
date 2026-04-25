import { COLOR_MAP } from "@/constants/theme";

/**
 * CP_STATS — headline numbers shown in the stat cards.
 * CP_HIGHLIGHTS — detailed achievement rows.
 */
export const CP_STATS = [
  { value: "500+",  label: "Problems Solved",      icon: "✅", color: COLOR_MAP.g600   },
  { value: "5204",  label: "Meta Hacker Cup Rank", icon: "🏆", color: COLOR_MAP.amber  },
  { value: "AIR-2", label: "EROH 2025 by Naukri",  icon: "🥈", color: COLOR_MAP.purple },
  { value: "14800", label: "GATE CS 2026 AIR",      icon: "📐", color: COLOR_MAP.blue   },
];

export const CP_HIGHLIGHTS = [
  {
    icon:  "🎓",
    title: "GATE CS 2026",
    desc:  "Qualified GATE CS 2026 with AIR 14800 out of 200,000+ candidates — top 7.4% nationwide.",
  },
  {
    icon:  "🏆",
    title: "Meta Hacker Cup 2025",
    desc:  "Ranked 5204 globally in Meta Hacker Cup 2025, clearing Round 1 among hundreds of thousands of competitors worldwide.",
  },
  {
    icon:  "🥈",
    title: "Engineer's Ring of Honour 2025",
    desc:  "Secured AIR-2 in EROH 2025 by Naukri.com among IIT, IIIT, and NIT participants; awarded scholarship and featured in Times of India.",
  },
  {
    icon:  "🚀",
    title: "5G Innovation Hackathon 2025",
    desc:  "Selected among top 3 proposals from college at 5G Innovation Hackathon 2025 by DoT, Government of India.",
  },
];
