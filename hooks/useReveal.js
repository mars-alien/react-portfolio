"use client";
import { useEffect } from "react";

/**
 * useReveal — observes every [data-reveal] element.
 * When it enters the viewport, sets opacity + transform to visible state.
 *
 * Uses direct inline-style mutation so there is ZERO CSS-specificity
 * conflict. The CSS sets the start state; JS drives the end state.
 *
 * Elements can carry a `data-delay` attribute (ms) for manual stagger,
 * e.g. data-delay="150"
 */
export function useReveal() {
  useEffect(() => {
    const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
    const DUR  = "0.60s";

    const show = (el, extraDelay = 0) => {
      const base = parseInt(el.dataset.delay ?? "0", 10);
      const wait = base + extraDelay;

      const apply = () => {
        el.style.opacity   = "1";
        el.style.transform = "none";
      };

      if (wait > 0) setTimeout(apply, wait);
      else           requestAnimationFrame(apply);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -30px 0px" }
    );

    /* Set initial hidden state + transition via JS so SSR HTML is visible
       (important: prevents flash of invisible content on slow connections) */
    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => {
      let transformStr = "translateY(34px)";
      if (el.dataset.reveal === "scale") transformStr = "scale(0.94)";
      else if (el.dataset.reveal === "left") transformStr = "translateX(-32px)";
      else if (el.dataset.reveal === "right") transformStr = "translateX(32px)";
      else if (el.dataset.reveal === "up") transformStr = "translateY(28px)";

      el.style.opacity    = "0";
      el.style.transform  = transformStr;
      el.style.transition = `opacity ${DUR} ${EASE}, transform ${DUR} ${EASE}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
