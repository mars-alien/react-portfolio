import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Font definitions — loaded once at build time via next/font ── */
const syne = Syne({
  subsets:  ["latin"],
  variable: "--font-syne",
  weight:   ["400", "600", "700", "800"],
  display:  "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets:  ["latin"],
  variable: "--font-jakarta",
  weight:   ["300", "400", "500", "600", "700"],
  style:    ["normal", "italic"],
  display:  "swap",
});

export const metadata = {
  title:       "Royal Sachan | Full Stack Developer & Backend Engineer",
  description:
    "Royal Sachan — Final-year CSE student at IIIT Senapati (Manipur). Backend Developer, AI/ML Enthusiast & Competitive Programmer. Building efficient, sustainable software.",
  keywords:
    "Royal Sachan, Full Stack Developer, Backend Engineer, React, Node.js, Python, AI/ML, LangChain, IIIT Senapati, IIIT Manipur, Competitive Programmer",
  openGraph: {
    title:       "Royal Sachan | Full Stack Developer",
    description: "Building clean, efficient code. Explore my projects, skills, and experience.",
    type:        "website",
    url:         "https://lazyroyal.vercel.app",
  },
  twitter: { card: "summary_large_image" },
  robots:  { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
