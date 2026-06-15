import { type ReactNode } from "react";

export function Heading({
  level = 2,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
}) {
  const sizes = {
    1: "text-4xl sm:text-5xl font-bold tracking-tight",
    2: "text-3xl sm:text-4xl font-bold tracking-tight",
    3: "text-xl sm:text-2xl font-semibold",
  };

  const Tag = `h${level}` as "h1" | "h2" | "h3";

  return <Tag className={`${sizes[level]} ${className}`}>{children}</Tag>;
}
