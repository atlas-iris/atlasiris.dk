"use client";

import { useEffect } from "react";

// Adds .revealed to [data-reveal] elements as they enter the viewport.
// globals.css only hides those elements while <html> has the .anim class,
// which layout.tsx stamps before first paint, so no-JS visitors see
// everything.
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const el of els) el.classList.add("revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  return null;
}
