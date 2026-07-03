import Image from "next/image";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-block rounded-full border border-line bg-white px-4 py-1.5 text-[10px] text-navy">
      {children}
    </span>
  );
}

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-block rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-2 ${className}`}
    >
      {children}
    </a>
  );
}

const pains = [
  "»Jeg prøvede at bygge den selv, men gav op.«",
  "»Bureauet ville have alt for mange penge.«",
  "»Vi har en Facebook-side. Er det ikke nok?«",
  "»Jeg vidste ikke, det kunne gøres hurtigt og billigt.«",
];

const bento = [
  {
    title: "Booking døgnet rundt",
    body: "»Book tid« virker også søndag aften, når kunderne alligevel sidder med telefonen.",
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4M12 13v4M10 15h4" />
      </svg>
    ),
  },
  {
    title: "Ét tryk, så ringer den",
    body: "Ring-knappen er altid synlig på mobilen, til de kunder der hellere vil tale med dig.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3.5h4l1.5 4.5-2.2 1.6a13 13 0 0 0 4.6 4.6l1.6-2.2 4.5 1.5v4a1.8 1.8 0 0 1-2 1.8C10.9 18.6 5.4 13.1 4.7 5.5a1.8 1.8 0 0 1 1.8-2z" />
      </svg>
    ),
  },
  {
    title: "Priser, man kan se",
    body: "Synlige priser er det første, nye kunder leder efter, og det største skub til at booke.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16M4 10h16M4 15h9M4 20h6" />
      </svg>
    ),
  },
  {
    title: "Hurtig på mobilen",
    body: "Siden åbner med det samme. De fleste besøg kommer fra en telefon, så dér skal den være bedst.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2.5 5 13.5h6l-1 8 9-11.5h-6l1-7.5z" />
      </svg>
    ),
  },
  {
    title: "Alt det lovpligtige",
    body: "Samtykke, privatliv og datasikkerhed er sat rigtigt op fra dag ét, så du ikke skal tænke på det.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3z" />
        <path d="m9.2 11.8 2 2 3.6-4" />
      </svg>
    ),
  },
];

const faq = [
  {
    q: "Hvad koster det?",
    a: "En fast, overskuelig pris, der passer til en lokal forretning, uden store engangsregninger. Du får den præcise pris i den første snak, og du betaler først, når du har set din demo.",
  },
  {
    q: "Er der binding?",
    a: "Nej. Du kan stoppe, når du vil. Siden skal være god nok til, at du bliver frivilligt.",
  },
  {
    q: "Hvor hurtigt kan min side være klar?",
    a: "Få dage fra første snak. Du ser en demo først, og når du siger god for den, gør vi den færdig og sætter den live på din egen .dk-adresse.",
  },
  {
    q: "Kan mine kunder selv booke tid?",
    a: "Ja, døgnet rundt, også uden for åbningstid. Bruger du allerede en bookingkalender, kobler vi siden sammen med den, du kender.",
  },
  {
    q: "Hvad med GDPR og cookies?",
    a: "Det er sat rigtigt op fra dag ét: samtykke, privatlivspolitik og datasikkerhed. Du skal ikke selv holde styr på reglerne.",
  },
  {
    q: "Hvad hvis jeg ikke kan lide den?",
    a: "Så betaler du ikke. Demoen er gratis, og vi retter til, indtil den føles rigtig. Ellers slutter det dér, helt uden regning.",
  },
];

export default function Home() {
  return (
    <main id="top" className="flex-1">
      {/* ============ 1 · Hero ============ */}
      <section className="texture">
        <div className="mx-auto max-w-[1100px] px-6 pb-16 pt-20 text-center sm:pt-24">
          <Pill>Hjemmesider til lokale forretninger</Pill>
          <h1 className="display mx-auto mt-7 max-w-[11em] text-[clamp(44px,8vw,76px)] leading-[1.04]">
            Bliv fundet.
            <br />
            Bliv <em>booket</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[15.5px] leading-[1.62] text-muted sm:text-[17px]">
            Vi bygger professionelle hjemmesider til lokale danske forretninger
            på få dage. Sider, hvis eneste job er at gøre folk, der finder dig
            på Google, til bookede tider. Til en pris, en lokal forretning kan
            betale.
          </p>
          <div className="mt-9">
            <CtaButton>Book et opkald</CtaButton>
          </div>
          <p className="mt-7 text-[13px] font-medium tracking-wide text-muted">
            Gratis demo, før du betaler
            <span className="mx-2.5 text-blue" aria-hidden="true">
              •
            </span>
            Klar på få dage
            <span className="mx-2.5 text-blue" aria-hidden="true">
              •
            </span>
            Ingen binding
          </p>
          <div className="relative mt-14 aspect-[16/10] overflow-hidden rounded-2xl border border-line sm:aspect-[21/9]">
            <Image
              src="/images/aarhus.jpg"
              alt="Aarhus set fra oven. Her bygger vi."
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1052px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ 2 · Pain card ============ */}
      <section className="relative overflow-hidden py-24">
        <div
          className="wedge-left absolute bottom-0 left-0 h-64 w-[46%] bg-navy"
          aria-hidden="true"
        />
        <div
          className="wedge-right absolute right-0 top-10 h-40 w-[22%] bg-mist"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="mx-auto max-w-[620px] rounded-2xl border border-line bg-white p-9 shadow-[0_24px_60px_-30px_rgba(8,27,51,0.35)] sm:p-12">
            <h2 className="display text-center text-[clamp(28px,4.4vw,40px)] leading-[1.08]">
              Fire ejere. Ét <em>problem</em>.
            </h2>
            <ul className="mt-8 space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-[1.6]">
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-9 text-center text-[15px] leading-[1.6] text-muted">
              Imens leder nye kunder på Google.
              <br />
              Og finder en anden.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3 · Results strip ============ */}
      <section className="border-y border-line bg-mist py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center">
            <Pill>Det bygger vi lige nu</Pill>
            <h2 className="display mx-auto mt-6 max-w-[16em] text-[clamp(30px,4.6vw,44px)] leading-[1.08]">
              Resultater siger mere end <em>løfter</em>
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] leading-[1.62] text-muted">
              Rigtige forretninger, rigtige sider. Bygget på få dage, ikke
              måneder.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white md:col-span-3">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/princess-beauty.jpg"
                  alt="Princess Beauty: kursusside med video, forløb og diplom"
                  fill
                  sizes="(max-width: 768px) 100vw, 620px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-line px-5 py-4 text-[13.5px] text-muted">
                <span className="font-semibold text-navy">
                  Princess Beauty · Aarhus
                </span>{" "}
                samler webshop, kurser og booking på én side
              </figcaption>
            </figure>
            <div className="flex flex-col gap-6 md:col-span-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-navy p-8 text-white">
                <p className="display-quote text-[clamp(22px,2.6vw,27px)] leading-[1.25]">
                  »Én side, der samler det hele. Ikke fire systemer, der
                  driller.«
                </p>
                <p className="eyebrow mt-8 text-[10px] text-[#a9bedd]">
                  Fra arbejdet med Princess Beauty
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-[14px] leading-[1.6] text-muted">
                  <span className="font-semibold text-navy">
                    Næste i rækken:
                  </span>{" "}
                  Klinik BeautyLab. Og måske din forretning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 · Bento ============ */}
      <section className="relative overflow-hidden py-24">
        <div
          className="wedge-right absolute left-0 top-0 h-48 w-[18%] -scale-x-100 bg-mist"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="text-center">
            <Pill>Det får du</Pill>
            <h2 className="display mx-auto mt-6 max-w-[15em] text-[clamp(30px,4.6vw,44px)] leading-[1.08]">
              Sådan føles det, når det <em>virker</em>
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] leading-[1.62] text-muted">
              En pæn side er ikke målet. En side, der fylder kalenderen, er.
              Alt det her er med fra start.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {bento.map((b) => (
              <div
                key={b.title}
                className={`rounded-2xl border border-line p-7 ${
                  b.wide ? "bg-mist md:col-span-2" : "bg-white"
                }`}
              >
                <div className="h-7 w-7 text-navy [&_svg]:h-7 [&_svg]:w-7 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.5] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-navy">
                  {b.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.58] text-muted">
                  {b.body}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-navy p-7 text-white md:col-span-3">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[380px]">
                  <h3 className="text-[16px] font-semibold">
                    Findes på Google
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.58] text-[#c9d6ec]">
                    Sat op, så din side og din Google-profil arbejder sammen
                    dér, hvor kunderne leder først.
                  </p>
                </div>
                <div
                  className="w-full max-w-[360px] rounded-xl bg-white/10 p-4"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-none stroke-navy stroke-[1.8] [stroke-linecap:round]"
                    >
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M20.5 20.5 16 16" />
                    </svg>
                    <span className="text-[13.5px] text-ink">
                      frisør aarhus
                    </span>
                  </div>
                  <div className="mt-3 rounded-lg bg-white/10 px-4 py-2.5 text-[12.5px] text-white">
                    Din forretning: priser og »book tid« direkte
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 · Founders ============ */}
      <section className="border-y border-line bg-mist py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <Pill>Menneskene bag</Pill>
              <h2 className="display mt-6 max-w-[11em] text-[clamp(30px,4.6vw,44px)] leading-[1.08]">
                Mød dem, der bygger <em>din</em> side
              </h2>
              <p className="mt-6 text-[15.5px] leading-[1.68] text-muted">
                Atlas Iris er{" "}
                <span className="font-semibold text-ink">Jonas og Fran</span>,
                to stiftere i Aarhus. Vi kunne se, at mange af byens bedste
                saloner og små forretninger enten ingen hjemmeside havde, eller
                havde én, der ikke gav bookinger.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.68] text-muted">
                Ikke fordi ejerne er ligeglade, men fordi det har været{" "}
                <span className="font-semibold text-ink">
                  for dyrt, for langsomt og for besværligt
                </span>
                . Det laver vi om på: vi bygger hurtigt, taler almindeligt
                dansk og tager en pris, der passer til en lokal forretning,
                ikke til en koncern.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Dage, ikke måneder", "Bygget i Aarhus", "Dansk først"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-navy"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-2xl bg-navy p-9 text-white sm:p-12">
              <p className="eyebrow text-[10px] text-[#a9bedd]">
                Hvorfor vi gør det
              </p>
              <p className="display-quote mt-6 text-[clamp(26px,3.4vw,34px)] leading-[1.2]">
                Ingen god lokal forretning skal være{" "}
                <em className="text-blue-soft">usynlig</em> på nettet.
              </p>
              <p className="mt-8 text-[14px] leading-[1.6] text-[#c9d6ec]">
                Jonas &amp; Fran
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6 · Two paths ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center">
            <h2 className="display mx-auto text-[clamp(30px,4.6vw,44px)] leading-[1.08]">
              To veje. Ét <em>valg</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-[440px] text-[15.5px] leading-[1.62] text-muted">
              Du kan blive ved med at gøre det på den hårde måde, eller lade
              os gøre det let.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-line bg-mist/60 p-8 sm:p-10">
              <h3 className="text-[17px] font-semibold text-muted">
                Gør det selv
              </h3>
              <ul className="mt-6 flex-1 space-y-3.5">
                {[
                  "Byggeprogrammer kræver, at du selv gør arbejdet",
                  "Aftener og weekender med teknik, der driller",
                  "Og siden skal stadig passes bagefter",
                ].map((li) => (
                  <li
                    key={li}
                    className="flex gap-3 text-[14.5px] leading-[1.55] text-muted"
                  >
                    <span
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-faint"
                      aria-hidden="true"
                    />
                    {li}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-block self-start rounded-full border border-line bg-white px-5 py-2.5 text-[13.5px] font-semibold text-faint">
                Fortsæt på egen hånd ✕
              </span>
            </div>
            <div className="flex flex-col rounded-2xl border border-blue-soft/50 bg-[#eaf1ff] p-8 sm:p-10">
              <h3 className="text-[17px] font-semibold text-navy">
                Lad Atlas Iris klare det
              </h3>
              <ul className="mt-6 flex-1 space-y-3.5">
                {[
                  "Gratis demo med dit navn, dine billeder og dine priser",
                  "Live på få dage, på din egen .dk-adresse",
                  "Vi holder den kørende: du skriver, vi ordner det",
                ].map((li) => (
                  <li
                    key={li}
                    className="flex gap-3 text-[14.5px] leading-[1.55] text-ink"
                  >
                    <span
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                      aria-hidden="true"
                    />
                    {li}
                  </li>
                ))}
              </ul>
              <CtaButton className="mt-8 self-start">
                Book et opkald&nbsp;&nbsp;↗
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7 · FAQ ============ */}
      <section className="border-y border-line bg-mist py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center">
            <Pill>Inden du beslutter dig</Pill>
            <h2 className="display mx-auto mt-6 text-[clamp(30px,4.6vw,44px)] leading-[1.08]">
              Godt at vide, <em>før</em> du siger ja
            </h2>
            <p className="mx-auto mt-5 max-w-[460px] text-[15.5px] leading-[1.62] text-muted">
              Klare svar på det, de fleste ejere spørger os om, før de går i
              gang.
            </p>
            <div className="mt-8">
              <CtaButton className="px-6 py-3 text-[14px]">
                Stadig i tvivl? Ring til os
              </CtaButton>
            </div>
          </div>
          <div className="mt-12 space-y-3.5">
            {faq.map((f) => (
              <details
                key={f.q}
                className="faq rounded-xl border border-line bg-white px-6 py-1"
              >
                <summary className="flex items-center justify-between gap-4 py-4 text-[15px] font-semibold text-navy">
                  {f.q}
                  <svg
                    viewBox="0 0 24 24"
                    className="chev h-4 w-4 shrink-0 fill-none stroke-navy stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 pr-8 text-[14.5px] leading-[1.62] text-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8 · Final CTA ============ */}
      <section className="texture py-28">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="display text-[clamp(34px,5.6vw,56px)] leading-[1.06]">
            Klar til at blive fundet<br />
            og <em>booket</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] text-[15.5px] leading-[1.62] text-muted">
            Vi tager en kort snak om din forretning og bygger en gratis demo
            til dig, så du ser resultatet, før du beslutter dig.
          </p>
          <div className="mt-9">
            <CtaButton>Book et opkald</CtaButton>
          </div>
          <p className="mt-6 text-[13.5px] text-muted">
            Eller ring direkte:{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-blue underline decoration-blue-soft underline-offset-4 hover:decoration-blue"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
