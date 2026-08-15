"use client";

import { Check, Star, Rocket, Crown, Sparkles, HelpCircle } from "lucide-react";
import { Section, SectionHeading, CtaButton } from "./section-primitives";
import { useLeadStore } from "@/lib/lead-store";

type Plan = {
  id: string;
  name: string;
  price: string;
  forWhom: string;
  features: string[];
  term: string;
  result: string;
  popular?: boolean;
  icon: typeof Rocket;
};

const PLANS: Plan[] = [
  {
    id: "start",
    name: "Старт",
    price: "80 000",
    forWhom: "Для новых объектов или замены старого сайта.",
    icon: Rocket,
    features: [
      "Современный лендинг",
      "Онлайн-заявка",
      "AI-помощник",
      "Единая система хранения заявок",
      "Подключение аналитики",
    ],
    term: "30–40 дней",
    result: "Начинаете получать прямые заявки без потерь.",
  },
  {
    id: "growth",
    name: "Рост",
    price: "180 000",
    forWhom: "Для объектов, которым нужен стабильный поток прямых бронирований.",
    icon: Sparkles,
    popular: true,
    features: [
      "Всё из пакета Старт",
      "Многостраничный сайт",
      "Онлайн-оплата",
      "Настройка Яндекс.Директ",
      "Один месяц сопровождения рекламы",
      "Продвинутый AI-помощник",
      "Автоматические напоминания клиентам",
      "Автоматическая воронка возврата гостей",
    ],
    term: "60–80 дней",
    result: "Рост прямых бронирований и снижение зависимости от агрегаторов.",
  },
  {
    id: "max",
    name: "Максимум",
    price: "350 000",
    forWhom: "Для крупных объектов и туроператоров.",
    icon: Crown,
    features: [
      "Всё из пакета Рост",
      "Интеграция календарей бронирования",
      "Защита от овербукинга",
      "Сквозная аналитика",
      "AI-ассистент",
      "Автоматические допродажи",
      "Персональный менеджер",
      "Сопровождение 3 месяца",
    ],
    term: "90–120 дней",
    result: "Полностью цифровая система продаж.",
  },
];

export function PackagesSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <Section id="packages" style={{ background: "var(--bg-darker)" }}>
      <SectionHeading
        eyebrow="05 — Тарифы"
        title="Выберите подходящий формат сотрудничества"
        subtitle="Три пакета под разные задачи — от быстрого запуска до полностью цифровой системы продаж для крупных объектов."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
          >
            <div
              className={`info-card flex h-full flex-col gap-5 p-6 sm:p-7 ${
                plan.popular ? "border-[var(--accent-dim)]" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-[var(--accent)] py-1.5 text-center">
                  <span className="font-mono inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black">
                    <Star className="size-3 fill-current" />
                    Хит выбора
                  </span>
                </div>
              )}

              <div className={`flex items-center gap-3 ${plan.popular ? "" : ""}`}>
                <span className="flex size-10 items-center justify-center bg-[var(--accent)] text-black">
                  <plan.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
                    {plan.name}
                  </h3>
                  <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                    Срок: {plan.term}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl tracking-tight" style={{ color: "var(--fg)" }}>
                    {plan.price}
                  </span>
                  <span className="font-heading text-xl font-semibold" style={{ color: "var(--muted)" }}>
                    ₽
                  </span>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-dim)" }}>
                  {plan.forWhom}
                </p>
              </div>

              <div className="flex-1">
                <p className="font-mono mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Что входит
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--fg-dim)" }}>
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-[var(--accent)] text-black">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--border)] p-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Результат
                </p>
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--fg)" }}>
                  {plan.result}
                </p>
              </div>

              <button
                onClick={() =>
                  open("packages", {
                    title: `Пакет «${plan.name}» — оформить`,
                  })
                }
                className={`w-full py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-bright)]"
                    : "bg-[var(--silver)] text-black hover:bg-[var(--fg)]"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Выбрать
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Под пакетами */}
      <div className="info-card mt-12 flex flex-col items-center gap-5 p-8 text-center">
        <div className="flex size-12 items-center justify-center bg-[var(--gold)] text-black">
          <HelpCircle className="size-6" />
        </div>
        <p className="font-heading max-w-xl text-balance text-xl font-semibold uppercase tracking-wide sm:text-2xl" style={{ color: "var(--fg)" }}>
          Не уверены, какой вариант подойдет?
        </p>
        <CtaButton
          source="packages"
          label="Подобрать решение"
          variant="outline"
          className="py-3 px-7"
        />
      </div>
    </Section>
  );
}
