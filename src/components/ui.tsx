import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function Card({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`rounded-[1.75rem] border border-border/70 bg-surface p-5 backdrop-blur-xl transition-transform duration-300 ${className}`}
      {...props}
    />
  );
});

export function Pill({
  children,
  className = "",
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-border/70 bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-foreground ${className}`}
    >
      {children}
    </span>
  );
}

export function LinkButton({
  children,
  href,
  download,
  external,
  className = "",
}: Readonly<{
  children: ReactNode;
  href: string;
  download?: boolean;
  external?: boolean;
  className?: string;
}>) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full border border-border/70 bg-surface-strong px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)] ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: Readonly<{
  eyebrow: string;
  title?: string;
  description?: string;
  centered?: boolean;
}>) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <p className="section-label text-xs text-muted">{eyebrow}</p>
      {title ? (
        <div className="space-y-3">
          <h2 className={`max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl ${
            centered ? "mx-auto" : ""
          }`}>
            {title}
          </h2>
          {description ? (
            <p
              className={`max-w-2xl text-base leading-7 text-muted ${
                centered ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
      ) : description ? (
        <p
          className={`max-w-2xl text-base leading-7 text-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}