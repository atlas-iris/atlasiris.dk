"use client";

import { useEffect, useRef, useState } from "react";

const QUERY = "frisør aarhus";

// The bento card's search illustration: once scrolled into view it types the
// query, the result slides in, holds, and the loop restarts. Decorative only
// (aria-hidden). Renders the finished state on the server and with reduced
// motion.
export function GoogleDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(QUERY);
  const [showResult, setShowResult] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let stopped = false;
    const schedule = (fn: () => void, ms: number) => {
      if (!stopped) timer = setTimeout(fn, ms);
    };

    const typeChar = (n: number) => {
      setTyped(QUERY.slice(0, n));
      if (n < QUERY.length) {
        schedule(() => typeChar(n + 1), 85);
      } else {
        schedule(() => {
          setShowResult(true);
          schedule(restart, 6000);
        }, 450);
      }
    };
    const restart = () => {
      setShowResult(false);
      setTyped("");
      schedule(() => typeChar(1), 800);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          restart();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(node);

    return () => {
      stopped = true;
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="w-full max-w-[360px] rounded-xl bg-white/10 p-4"
    >
      <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 fill-none stroke-navy stroke-[1.8] [stroke-linecap:round]"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20.5 20.5 16 16" />
        </svg>
        <span className="flex h-5 items-center text-[13.5px] text-ink">
          {typed}
          <span className="demo-caret" />
        </span>
      </div>
      <div
        className={`mt-3 rounded-lg bg-white/10 px-4 py-2.5 text-[12.5px] text-white transition-all duration-500 ${
          showResult ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        Din forretning: priser og »book tid« direkte
      </div>
    </div>
  );
}
