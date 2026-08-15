"use client";

import { Mountain, Clock3, ShieldCheck } from "lucide-react";
import { Section } from "./section-primitives";
import { AuditForm } from "./audit-form";

export function FinalCtaSection() {
  return (
    <Section id="contact" className="bg-textured">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Левая часть — текст */}
        <div className="flex flex-col gap-5">
          <span className="section-marker">
            <Mountain className="size-3" />
            11 — Начните сейчас
          </span>
          <h2
            className="font-heading text-balance text-3xl font-semibold uppercase tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
            style={{ color: "var(--fg)" }}
          >
            Получите бесплатный аудит вашего объекта
          </h2>
          <p className="max-w-xl text-pretty text-base sm:text-lg" style={{ color: "var(--fg-dim)" }}>
            За 15 минут покажем точки роста, найдём слабые места в маркетинге и
            подготовим рекомендации по увеличению прямых бронирований.
          </p>

          <ul className="mt-2 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm" style={{ color: "var(--fg-dim)" }}>
              <span className="flex size-9 items-center justify-center bg-[var(--accent)] text-black">
                <Clock3 className="size-4" />
              </span>
              Аудит за 15 минут — без воды и обязательств
            </li>
            <li className="flex items-center gap-3 text-sm" style={{ color: "var(--fg-dim)" }}>
              <span className="flex size-9 items-center justify-center bg-[var(--accent)] text-black">
                <ShieldCheck className="size-4" />
              </span>
              Конкретные шаги, которые увеличат прямые брони
            </li>
          </ul>
        </div>

        {/* Правая часть — форма */}
        <div className="booking-frame p-6 sm:p-8">
          <h3 className="font-heading mb-1 text-xl font-bold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
            Заявка на аудит
          </h3>
          <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
            Заполните форму — перезвоним в течение двух часов в рабочее время.
          </p>
          <AuditForm
            source="final"
            variant="full"
            submitLabel="Получить аудит бесплатно"
          />
        </div>
      </div>
    </Section>
  );
}