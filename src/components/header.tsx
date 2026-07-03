import { PHONE_HREF } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <a href="#top" aria-label="Atlas Iris, til toppen" className="text-[16px]">
          <Wordmark />
        </a>
        <span className="eyebrow hidden text-faint sm:block">
          Aarhus · Digitalt Bureau
        </span>
        <a
          href={PHONE_HREF}
          className="rounded-full bg-navy px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-navy-2"
        >
          Book et opkald
        </a>
      </div>
    </header>
  );
}
