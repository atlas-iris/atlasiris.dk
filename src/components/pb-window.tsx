"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PB_PAGES } from "@/lib/pb-preview";

/* Bag scenen-vinduet: et klikbart preview af Princess Beautys sider.
   Hver side er et helsides-billede af den ægte, faithfully rebuilt live-side
   (Shopify tillader ikke iframes) med usynlige klikfelter præcis dér, hvor
   sidens egne links sidder — plus en fanerække i browserrammen. */
export function PbWindow() {
  const [pageId, setPageId] = useState("forside");
  const scroller = useRef<HTMLDivElement>(null);

  const page = PB_PAGES.find((p) => p.id === pageId) ?? PB_PAGES[0];

  const go = (target: string) => {
    setPageId(target);
    requestAnimationFrame(() => scroller.current?.scrollTo({ top: 0 }));
  };

  return (
    <>
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-full bg-mist px-3 py-0.5 text-[11.5px] text-muted">
          {page.path}
        </span>
      </div>
      <div
        className="flex gap-1 overflow-x-auto border-b border-line px-3 py-2"
        role="tablist"
        aria-label="Sider på princessbeauty.dk"
      >
        {PB_PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={p.id === page.id}
            onClick={() => go(p.id)}
            className={`whitespace-nowrap rounded-full px-3 py-1 text-[12px] transition-colors ${
              p.id === page.id
                ? "bg-navy font-semibold text-white"
                : "text-muted hover:bg-mist hover:text-navy"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div
        ref={scroller}
        className="site-window aspect-[4/3] overflow-y-auto overscroll-contain"
        tabIndex={0}
        role="region"
        aria-label="Kig på Princess Beautys side, rul for at se mere"
      >
        <div className="relative">
          <Image
            key={page.id}
            src={page.src}
            alt={`Princess Beauty: ${page.label}`}
            width={page.width}
            height={page.height}
            sizes="(max-width: 768px) 100vw, 620px"
            className="h-auto w-full"
            priority={page.id === "forside"}
          />
          {/* Usynlige klikfelter oven på sidens egne links; keyboard-brugere
              navigerer via fanerne, derfor tabIndex -1 */}
          {page.hotspots.map((h, i) => (
            <button
              key={`${page.id}-${i}`}
              type="button"
              tabIndex={-1}
              aria-label={h.label}
              onClick={() => go(h.target)}
              className="absolute cursor-pointer rounded-[3px] hover:bg-blue/5 hover:shadow-[inset_0_0_0_2px_var(--ai-blue)]"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                width: `${h.w}%`,
                height: `${h.h}%`,
              }}
            />
          ))}
        </div>
        <div className="scroll-hint pointer-events-none sticky bottom-3 -mt-12 flex justify-center">
          <span className="rounded-full bg-navy/75 px-3.5 py-1.5 text-[11.5px] font-medium text-white backdrop-blur-sm">
            Klik og rul i vinduet
          </span>
        </div>
      </div>
    </>
  );
}
