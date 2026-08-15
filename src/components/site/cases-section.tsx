"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CalendarClock,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { useLeadStore } from "@/lib/lead-store";
import { Button } from "@/components/ui/button";

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
    <Section id="cases" className="bg-muted/30">
      <SectionHeading
        eyebrow="Блок 9 · Кейсы"
        title="Наши результаты"
        subtitle="Мы честны: первые проекты ещё в работе. Поэтому сейчас мы набираем стартовую группу — и ваш объект может стать одним из первых кейсов DAGSTAY."
      />

      {/* Заглушка-плейсхолдер */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mt-12 overflow-hidden rounded-3xl border border-dashed border-brand/30 bg-card p-8 sm:p-12"
      >
        {/* Декоративные пятна */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Большая цифра 5 */}
          <div className="flex shrink-0 flex-col items-center justify-center gap-2">
            <div className="relative flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/70 shadow-xl shadow-brand/20 sm:size-40">
              <span className="text-6xl font-extrabold leading-none text-brand-foreground sm:text-7xl">
                5
              </span>
              <span className="absolute -right-2 -top-2 flex size-9 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg">
                <Sparkles className="size-4" />
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              мест всего
            </span>
          </div>

          {/* Текстовые пункты */}
          <div className="flex flex-1 flex-col gap-5">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.12, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <p.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="mt-2">
              <Button
                size="lg"
                onClick={() => open("final", { title: "Стать одним из 5 объектов" })}
                className="group h-12 bg-brand px-7 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand/90"
              >
                Подать заявку на аудит
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="max-w-xl text-balance text-lg font-medium text-foreground">
          Хотите, чтобы ваш объект вошёл в первую пятёрку?
        </p>
        <p className="max-w-md text-sm text-muted-foreground">
          Оставьте заявку — расскажем условия и пришлём бесплатный аудит в
          течение двух часов.
        </p>
      </div>
    </Section>
  );
}
