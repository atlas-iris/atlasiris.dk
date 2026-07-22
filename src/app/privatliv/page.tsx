import type { Metadata } from "next";
import { EMAIL_DISPLAY, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik · Atlas Iris",
  description:
    "Sådan behandler Atlas Iris dine oplysninger: ingen cookies, ingen sporing, kun det du selv giver os.",
};

export default function PrivatlivPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[680px] px-6 py-20">
        <h1 className="display text-[clamp(32px,5vw,44px)] leading-[1.08]">
          Privatlivspolitik
        </h1>
        <p className="mt-3 text-[13.5px] text-faint">
          Sidst opdateret: 22. juli 2026
        </p>

        <p className="mt-8 rounded-xl border border-line bg-mist px-6 py-5 text-[15px] leading-[1.65] text-ink">
          Den korte version: vi indsamler så lidt som muligt. Denne side
          sætter ingen cookies og følger dig ikke rundt på nettet. Vi tæller
          besøg med et cookiefrit værktøj, og ellers behandler vi kun de
          oplysninger, du selv giver os.
        </p>

        <section className="mt-10">
          <h2 className="text-[17px] font-semibold text-navy">Hvem vi er</h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-muted">
            Atlas Iris, Aarhus. Har du spørgsmål til denne politik eller til
            dine oplysninger, kan du skrive til{" "}
            <a
              href={EMAIL_HREF}
              className="font-semibold text-blue underline decoration-blue-soft underline-offset-4 hover:decoration-blue"
            >
              {EMAIL_DISPLAY}
            </a>{" "}
            eller ringe på{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-blue underline decoration-blue-soft underline-offset-4 hover:decoration-blue"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-[17px] font-semibold text-navy">
            Hvad vi indsamler, og hvorfor
          </h2>
          <ul className="mt-3 space-y-3 text-[15px] leading-[1.65] text-muted">
            <li>
              <span className="font-semibold text-ink">Besøg på siden:</span>{" "}
              vi tæller, hvor mange der besøger siden, og hvilke sider de
              kigger på. Det sker med Vercel Web Analytics, som hverken sætter
              cookies, gemmer din IP-adresse eller følger dig videre til andre
              hjemmesider. Vi kan se, at der har været et besøg — ikke hvem du
              er. Vercel behandler oplysningerne på vores vegne. Vi bruger
              ingen annoncering og ingen sporing på tværs af nettet.
            </li>
            <li>
              <span className="font-semibold text-ink">
                Booker du et opkald:
              </span>{" "}
              bookingen sker gennem Microsoft Bookings. Dér oplyser du navn,
              mailadresse og eventuelt telefonnummer, som vi bruger til at
              gennemføre og følge op på samtalen. Microsoft behandler
              oplysningerne på vores vegne.
            </li>
            <li>
              <span className="font-semibold text-ink">
                Ringer eller skriver du til os:
              </span>{" "}
              vi behandler de oplysninger, du selv giver os, for at kunne
              svare dig og rådgive om et eventuelt samarbejde.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-[17px] font-semibold text-navy">
            Hvor længe vi gemmer oplysningerne
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-muted">
            Kun så længe det er nødvendigt for dialogen eller et samarbejde.
            Bliver vi ikke enige om at arbejde sammen, sletter vi
            oplysningerne igen.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-[17px] font-semibold text-navy">
            Dine rettigheder
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-muted">
            Du kan altid bede om at få indsigt i, rettet eller slettet de
            oplysninger, vi har om dig. Skriv til{" "}
            <a
              href={EMAIL_HREF}
              className="font-semibold text-blue underline decoration-blue-soft underline-offset-4 hover:decoration-blue"
            >
              {EMAIL_DISPLAY}
            </a>
            , så ordner vi det. Du kan også klage til Datatilsynet via{" "}
            <a
              href="https://www.datatilsynet.dk"
              target="_blank"
              rel="noopener"
              className="font-semibold text-blue underline decoration-blue-soft underline-offset-4 hover:decoration-blue"
            >
              datatilsynet.dk
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
