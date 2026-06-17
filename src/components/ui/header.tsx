import Link from "next/link";
import { ButtonLink } from "./button";
import { Container } from "./container";

const links = [
  { href: "#hvorfor", label: "Hvorfor os" },
  { href: "#proces", label: "Sådan fungerer det" },
  { href: "#anmeldelser", label: "Anmeldelser" },
  { href: "#pris", label: "Pris" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Agentic Website
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ButtonLink href="#kontakt" variant="primary">
            Kontakt os
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
