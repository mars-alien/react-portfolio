"use client";
import { useState, useEffect } from "react";

/**
 * useTypewriter — cycles through an array of strings with a type/delete effect.
 * @param {string[]} phrases  — list of strings to cycle through
 * @param {number}  typeSpeed — ms per character while typing   (default 78)
 * @param {number}  delSpeed  — ms per character while deleting (default 38)
 * @param {number}  pauseMs   — ms to hold full string before deleting (default 2100)
 * @returns {{ roleText: string }} — current visible string
 */
export function useTypewriter(phrases, typeSpeed = 78, delSpeed = 38, pauseMs = 2100) {
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [roleText, setRoleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[roleIdx];
    let timer;

    if (!deleting) {
      if (roleText.length < current.length) {
        timer = setTimeout(
          () => setRoleText(current.slice(0, roleText.length + 1)),
          typeSpeed
        );
      } else {
        timer = setTimeout(() => setDeleting(true), pauseMs);
      }
    } else {
      if (roleText.length > 0) {
        timer = setTimeout(() => setRoleText(roleText.slice(0, -1)), delSpeed);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [roleText, deleting, roleIdx, phrases, typeSpeed, delSpeed, pauseMs]);

  return { roleText };
}
