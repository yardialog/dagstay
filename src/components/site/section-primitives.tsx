"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLeadStore, type LeadSource } from "@/lib/lead-store";
import { Button } from "@/components/ui/button";

/** Открывающая «надбровь» над заголовком секции */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Заголовок секции с появлением при скролле */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/** Кнопка CTA, открывающая форму-диалог */
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
  return (
    <Button
      size={size}
      variant={variant}
      onClick={() => open(source, title ? { title } : undefined)}
      className={cn(
        source === "hero" || variant === "default"
          ? "bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg shadow-brand/20"
          : "",
        className
      )}
    >
      {label}
    </Button>
  );
}

/** Стандартный контейнер секции */
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
        "relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
