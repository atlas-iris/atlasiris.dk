import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="text-[14px]">
            <Wordmark onDark />
          </span>
          <p className="eyebrow mt-3 text-[10px] text-[#a9bedd]">
            Aarhus · Digitalt Bureau
          </p>
        </div>
        <div className="text-[13.5px] text-[#c9d6ec]">
          <p>
            Ring til os:{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-white underline decoration-blue-soft underline-offset-4 hover:decoration-white"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-[12px] text-[#a9bedd]">
            © 2026 Atlas Iris · Bygget i Aarhus
          </p>
        </div>
      </div>
    </footer>
  );
}
