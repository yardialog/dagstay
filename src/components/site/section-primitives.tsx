"use client";

import { cn } from "@/lib/utils";
import { useLeadStore, type LeadSource } from "@/lib/lead-store";

/** Открывающая «надбровь» в стиле section-marker (JetBrains Mono, accent, line prefix) */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("section-marker", className)}>{children}</span>
  );
}

/** Заголовок секции — IRONFORGE style */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-heading max-w-3xl text-3xl font-semibold tracking-tight uppercase sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
          align === "center" && "mx-auto"
        )}
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl text-pretty text-base sm:text-lg"
          style={{ color: "var(--fg-dim)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Кнопка CTA — IRONFORGE style */
export function CtaButton({
  source,
  label = "Получить бесплатный аудит",
  variant = "default",
  size = "lg",
  className,
  title,
}: {
  source: LeadSource;
  label?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  title?: string;
}) {
  const open = useLeadStore((s) => s.open);

  const baseClasses =
    "font-heading uppercase tracking-wider text-sm font-semibold transition-all duration-300";

  if (variant === "default" || source === "hero") {
    return (
      <button
        onClick={() => open(source, title ? { title } : undefined)}
        className={cn(
          baseClasses,
          "bg-[var(--accent)] text-black px-7 py-3 hover:bg-[var(--accent-bright)]",
          className
        )}
      >
        {label}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        onClick={() => open(source, title ? { title } : undefined)}
        className={cn(
          baseClasses,
          "border border-[var(--border-light)] px-7 py-3 text-[var(--fg-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
          className
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={() => open(source, title ? { title } : undefined)}
      className={cn(
        baseClasses,
        "bg-[var(--silver)] text-black px-7 py-3 hover:bg-[var(--fg)]",
        className
      )}
    >
      {label}
    </button>
  );
}

/** Стандартный контейнер секции — с border-t разделителем */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
