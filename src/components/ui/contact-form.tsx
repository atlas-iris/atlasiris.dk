"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire up to Supabase (insert into a `contact_requests` table) once
    // a Supabase project is connected for this site.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-foreground/10 bg-background p-6 text-center text-sm">
        Tak! Vi har modtaget jeres besked og vender tilbage hurtigst muligt.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="company" className="text-sm font-medium">
          Virksomhed
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="grid gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="primary">
          Send besked
        </Button>
      </div>
    </form>
  );
}
