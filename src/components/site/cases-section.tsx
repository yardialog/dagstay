"use client";

import { Sparkles, CalendarClock, Users, Rocket, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { useLeadStore } from "@/lib/lead-store";

const POINTS = [
  {
    icon: CalendarClock,
    title: "Первые проекты запускаются в сентябре 2026",
    text: "Формируем стартовую группу объектов прямо сейчас.",
  },
  {
    icon: Users,
    title: "Отбираем 5 объектов",
    text: "Для бесплатного аудита и внедрения системы прямых бронирований.",
  },
  {
    icon: Rocket,
    title: "Станьте одним из них",
    text: "И получите кейс с подробным разбором результатов вашего объекта.",
  },
];

export function CasesSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <Section id="cases" style={{ background: "var(--bg-darker)" }}>
      <SectionHeading
        eyebrow="09 — Кейсы"
        title="Наши результаты"
        subtitle="Мы честны: первые проекты ещё в работе. Поэтому сейчас мы набираем стартовую группу — и ваш объект может стать одним из первых кейсов DAGSTAY."
      />

      {/* Заглушка-плейсхолдер */}
      <div className="info-card relative mt-12 overflow-hidden p-8 sm:p-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Большая цифра 5 — text-stroke style */}
          <div className="flex shrink-0 flex-col items-center justify-center gap-2">
            <div className="relative flex size-32 items-center justify-center border border-[var(--border-light)] sm:size-40">
              <span className="font-display text-7xl text-stroke sm:text-8xl">
                5
              </span>
              <span className="absolute -right-2 -top-2 flex size-9 items-center justify-center bg-[var(--gold)] text-black">
                <Sparkles className="size-4" />
              </span>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
              мест всего
            </span>
          </div>

          {/* Текстовые пункты */}
          <div className="flex flex-1 flex-col gap-5">
            {POINTS.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center bg-[var(--accent)] text-black">
                  <p.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-semibold uppercase tracking-wide sm:text-lg" style={{ color: "var(--fg)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: "var(--fg-dim)" }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-2">
              <button
                onClick={() => open("final", { title: "Стать одним из 5 объектов" })}
                className="group flex items-center gap-2 bg-[var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-[var(--accent-bright)]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Подать заявку на аудит
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="font-heading max-w-xl text-balance text-lg font-medium uppercase tracking-wide" style={{ color: "var(--fg)" }}>
          Хотите, чтобы ваш объект вошёл в первую пятёрку?
        </p>
        <p className="max-w-md text-sm" style={{ color: "var(--muted)" }}>
          Оставьте заявку — расскажем условия и пришлём бесплатный аудит в
          течение двух часов.
        </p>
      </div>
    </Section>
  );
}
