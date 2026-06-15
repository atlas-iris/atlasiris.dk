import Link from "next/link";
import { ButtonLink } from "./button";
import { Container } from "./container";

const links = [
  { href: "#hvorfor", label: "Hvorfor os" },
  { href: "#proces", label: "Sådan fungerer det" },
  { href: "#pris", label: "Pris" },
];

export function Header() {
  return (
    <header className="border-b border-foreground/10">
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
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
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
