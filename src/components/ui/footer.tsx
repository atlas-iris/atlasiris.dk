import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <Container>
        <div className="flex flex-col gap-2 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Agentic Website</p>
          <p>AI-byggede hjemmesider til lokale virksomheder</p>
        </div>
      </Container>
    </footer>
  );
}
