"use client";

/**
 * page.jsx — THE CONTROLLER.
 *
 * Single responsibility: wire hooks to sections.
 * ─ No raw data lives here (all in data/ or constants/)
 * ─ No layout logic lives here (all in section components)
 * ─ No inline styles (all in globals.css)
 * ─ All behaviour comes from hooks/
 */

import { useState } from "react";

/* Hooks — all logic */
import { useScroll }       from "@/hooks/useScroll";
import { useTypewriter }   from "@/hooks/useTypewriter";
import { useContactForm }  from "@/hooks/useContactForm";
import { useDarkMode }     from "@/hooks/useDarkMode";
import { useReveal }       from "@/hooks/useReveal";

/* UI components */
import Navbar         from "@/components/ui/Navbar";
import MobileMenu     from "@/components/ui/MobileMenu";
import NatureBg       from "@/components/ui/NatureBg";
import SocialSidebar  from "@/components/ui/SocialSidebar";

/* Section components */
import EcoBar     from "@/components/sections/EcoBar";
import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Skills     from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects   from "@/components/sections/Projects";
import Contact    from "@/components/sections/Contact";
import Footer     from "@/components/sections/Footer";

/* Data — only what the controller needs (email for form hook) */
import { PERSONAL } from "@/data/personal";

export default function Page() {
  /* ── Behaviour hooks ── */
  const scrolled               = useScroll(55);
  const { roleText }           = useTypewriter(PERSONAL.roles);
  const { form, setField,
          submit, sent }        = useContactForm(PERSONAL.email);
  const { darkMode, toggle }   = useDarkMode();
  useReveal(); /* attaches IntersectionObserver for scroll-reveal */

  /* ── Local UI state (too simple for a hook) ── */
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll helper — closes mobile menu then scrolls ── */
  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Render ── */
  return (
    <div className={darkMode ? "dm" : ""}>
      {/* Environmental background — fixed, behind all content */}
      <NatureBg darkMode={darkMode} />

      {/* Fixed contact sidebar */}
      <SocialSidebar />

      {/* Fixed header elements */}
      <EcoBar />
      <Navbar
        scrolled={scrolled}
        darkMode={darkMode}
        onToggleDark={toggle}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        scrollTo={scrollTo}
        resumeUrl={PERSONAL.resumeUrl}
      />
      <MobileMenu
        open={menuOpen}
        scrollTo={scrollTo}
      />

      {/* Page sections */}
      <main>
        <Hero       roleText={roleText} scrollTo={scrollTo} />
        <About      scrollTo={scrollTo} />
        <Skills />
        <Experience />
        <Projects />
        <Contact
          form={form}
          setField={setField}
          submit={submit}
          sent={sent}
        />
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}
