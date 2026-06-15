import {
  ButtonLink,
  Card,
  ContactForm,
  Heading,
  Section,
} from "@/components/ui";

const valueProps = [
  {
    title: "Markant billigere",
    body: "Traditionelle webbureauer tager 10.000-20.000 kr. for en hjemmeside. Hos os starter I fra ca. 500 kr/md – uden store opstartsomkostninger.",
  },
  {
    title: "Hurtigt i luften",
    body: "Fra mockup til live hjemmeside på dage, ikke uger. AI bygger jeres side hurtigt og skræddersyet til jeres branche.",
  },
  {
    title: "Vi gør det hele",
    body: "Design, udvikling, hosting og opdateringer er inkluderet. I skal bare fokusere på jeres forretning.",
  },
];

const steps = [
  {
    title: "Design",
    body: "Vi laver et mockup baseret på jeres eksisterende branding (Facebook/Instagram/logo) – eller designer et nyt, hvis I ikke har et.",
  },
  {
    title: "Beskrivelse",
    body: "Mockuppet omsættes til en konkret plan for indhold, sider og funktioner på hjemmesiden.",
  },
  {
    title: "AI-byg",
    body: "Hjemmesiden bygges med AI – skræddersyet til jeres virksomhed, ikke en generisk skabelon.",
  },
  {
    title: "Lancering",
    body: "Hjemmesiden hostes og gøres live. I får et link med det samme, og support er inkluderet løbende.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Section className="text-center">
        <Heading level={1}>
          Få en professionel hjemmeside – uden besvær, uden høj pris
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          Vi designer, bygger og hoster jeres hjemmeside med AI. Første måned
          er gratis, og I betaler kun ca. 500 kr/md herefter.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#kontakt" variant="primary">
            Kontakt os
          </ButtonLink>
          <ButtonLink href="#proces" variant="secondary">
            Se hvordan det virker
          </ButtonLink>
        </div>
      </Section>

      <Section id="hvorfor">
        <Heading level={2} className="text-center">
          Hvorfor Agentic Website
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {valueProps.map((item) => (
            <Card key={item.title}>
              <Heading level={3}>{item.title}</Heading>
              <p className="mt-2 text-sm text-foreground/70">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="proces" className="bg-secondary/[0.03]">
        <Heading level={2} className="text-center">
          Sådan fungerer det
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </span>
              <Heading level={3} className="mt-4">
                {step.title}
              </Heading>
              <p className="mt-2 text-sm text-foreground/70">{step.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="pris" className="text-center">
        <Heading level={2}>Prisen er enkel</Heading>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          Første måned gratis. Derefter ca.{" "}
          <span className="font-semibold text-foreground">500 kr/md</span>,
          faktureret kvartalsvis – inkl. hosting, opdateringer og support.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/50">
          Ingen opstartsgebyr. Ingen binding.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="#kontakt" variant="primary">
            Få et gratis tilbud
          </ButtonLink>
        </div>
      </Section>

      <Section id="kontakt">
        <Heading level={2} className="text-center">
          Klar til at komme online?
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/70">
          Skriv til os, og vi vender tilbage med et uforpligtende forslag til
          jeres hjemmeside.
        </p>
        <div className="mx-auto mt-10 max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
