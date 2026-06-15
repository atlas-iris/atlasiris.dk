import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-foreground/10 bg-background p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
