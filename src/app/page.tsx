import {
  ButtonLink,
  Card,
  ContactForm,
  Heading,
  Section,
} from "@/components/ui";

const valueProps = [
  {
    icon: "💰",
    title: "Markant billigere",
    body: "Traditionelle webbureauer tager 10.000–20.000 kr. for en hjemmeside. Hos os betaler I ca. 500 kr/md — uden store opstartsomkostninger.",
  },
  {
    icon: "⚡",
    title: "Hurtigt i luften",
    body: "Fra første møde til live hjemmeside på få dage, ikke uger. AI bygger jeres side skræddersyet til jeres branche.",
  },
  {
    icon: "🙌",
    title: "Vi gør det hele",
    body: "Design, udvikling, hosting og opdateringer er inkluderet. I skal bare fokusere på jeres forretning.",
  },
];

const steps = [
  {
    title: "Design",
    body: "Vi laver et mockup baseret på jeres eksisterende branding — eller designer et nyt, hvis I ikke har et.",
  },
  {
    title: "Beskrivelse",
    body: "Mockuppet omsættes til en konkret plan for indhold, sider og funktioner.",
  },
  {
    title: "AI-byg",
    body: "Hjemmesiden bygges med AI — skræddersyet til jeres virksomhed, ikke en generisk skabelon.",
  },
  {
    title: "Lancering",
    body: "Jeres side hostes og gøres live. I får et link med det samme og løbende support.",
  },
];

// Placeholders — replace with real quotes when first clients are live
const testimonials = [
  {
    quote:
      "Vi har fået mange flere nye kunder siden vi fik vores hjemmeside. Det var nemmere end vi forventede.",
    name: "Maria Jensen",
    business: "Café, Viby",
  },
  {
    quote:
      "Professionel hjemmeside på under en uge. Den afspejler vores salon perfekt.",
    name: "Thomas Holm",
    business: "Frisørsalon, Aarhus",
  },
  {
    quote:
      "Endelig en hjemmeside der ser ordentlig ud. Vores kunder nævner den nu, når de ringer.",
    name: "Anne Christensen",
    business: "Skønhedssalon, Odense",
  },
];

const features = [
  "Professionelt design skræddersyet til jeres branche",
  "Hostet og live fra dag ét",
  "Månedlige opdateringer inkluderet",
  "Support inkluderet",
  "Ingen opstartsgebyr",
  "Ingen binding",
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <Section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Første måned gratis
        </div>
        <Heading level={1} className="mx-auto mt-6 max-w-3xl">
          En professionel hjemmeside til jeres lokale virksomhed
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
          Vi designer, bygger og hoster jeres hjemmeside med AI — på dage,
          ikke måneder. Fra ca. 500 kr/md.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#kontakt" variant="primary">
            Få et gratis tilbud
          </ButtonLink>
          <ButtonLink href="#proces" variant="outline">
            Se hvordan det virker
          </ButtonLink>
        </div>
      </Section>

      {/* Why */}
      <Section id="hvorfor" className="bg-muted">
        <Heading level={2} className="text-center">
          Hvorfor Agentic Website?
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-center text-foreground/60">
          Vi har bygget et system der gør det muligt at levere professionelle
          hjemmesider til en pris lokale virksomheder har råd til.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {valueProps.map((item) => (
            <Card key={item.title}>
              <span className="text-2xl">{item.icon}</span>
              <Heading level={3} className="mt-3">
                {item.title}
              </Heading>
              <p className="mt-2 text-sm text-foreground/60">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="proces">
        <Heading level={2} className="text-center">
          Sådan fungerer det
        </Heading>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <Heading level={3} className="mt-4">
                {step.title}
              </Heading>
              <p className="mt-2 text-sm text-foreground/60">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="anmeldelser" className="bg-muted">
        <Heading level={2} className="text-center">
          Hvad siger vores kunder?
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-foreground/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.business}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pris" className="text-center">
        <Heading level={2}>Simpel og ærlig pris</Heading>
        <p className="mx-auto mt-3 max-w-xl text-foreground/60">
          Ingen skjulte gebyrer. Ingen binding. Bare en god hjemmeside til en
          fair pris.
        </p>
        <div className="mx-auto mt-10 max-w-sm">
          <Card className="text-left">
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">500</span>
              <span className="mb-1 text-lg font-medium text-foreground/50">
                kr/md
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">
              Første måned gratis
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 font-semibold text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href="#kontakt"
                variant="primary"
                className="w-full justify-center"
              >
                Kom i gang i dag
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="kontakt" className="bg-muted">
        <Heading level={2} className="text-center">
          Klar til at komme online?
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-center text-foreground/60">
          Skriv til os, og vi vender tilbage med et uforpligtende forslag —
          inkl. et kig på hvad vi ville gøre for netop jeres virksomhed.
        </p>
        <div className="mx-auto mt-10 max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
