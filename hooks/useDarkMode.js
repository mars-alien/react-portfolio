"use client";
import { useState, useEffect } from "react";

/**
 * useDarkMode — toggles dark mode and syncs the body background/colour.
 * Keeps body background in sync so the page never shows a white flash.
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(160deg, #030d03 0%, #050f05 60%, #030d03 100%)"
      : "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 60%, #f0fdf4 100%)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.color = darkMode ? "#d1fae5" : "#1a2e1a";
    document.body.style.transition = "background 0.4s ease, color 0.3s ease";
  }, [darkMode]);

  const toggle = () => setDarkMode((d) => !d);

  return { darkMode, toggle };
}
