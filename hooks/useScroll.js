"use client";
import { useState, useEffect } from "react";

/**
 * useScroll — returns true when the window has scrolled past `threshold` px.
 * Attach to navbar to trigger the frosted-glass style.
 */
export function useScroll(threshold = 55) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}
