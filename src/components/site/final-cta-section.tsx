"use client";

import { motion } from "framer-motion";
import { Mountain, Clock3, ShieldCheck } from "lucide-react";
import { Section } from "./section-primitives";
import { AuditForm } from "./audit-form";

export function FinalCtaSection() {
  return (
    <Section id="contact" className="relative overflow-hidden bg-background">
      {/* Декоративный фон */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 size-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Левая часть — текст */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Mountain className="size-3.5" />
            Блок 11 · Бесплатный аудит
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Получите бесплатный аудит вашего объекта
          </h2>
          <p className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            За 15 минут покажем точки роста, найдём слабые места в маркетинге и
            подготовим рекомендации по увеличению прямых бронирований.
          </p>

          <ul className="mt-2 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Clock3 className="size-4" />
              </span>
              Аудит за 15 минут — без воды и обязательств
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <ShieldCheck className="size-4" />
              </span>
              Конкретные шаги, которые увеличат прямые брони
            </li>
          </ul>
        </motion.div>

        {/* Правая часть — форма */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-brand/5 sm:p-8"
        >
          <h3 className="mb-1 text-xl font-bold text-foreground">
            Заявка на аудит
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Заполните форму — перезвоним в течение двух часов в рабочее время.
          </p>
          <AuditForm
            source="final"
            variant="full"
            submitLabel="Получить аудит бесплатно"
          />
        </motion.div>
      </div>
    </Section>
  );
}
