"use client";

import { Check, Star, RefreshCw } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";

const TIERS = [
  {
    id: "basic",
    name: "Базовый",
    price: "30 000",
    features: [
      "Поддержка сайта",
      "Поддержка AI",
      "Ведение рекламы",
      "Ежемесячный отчёт",
    ],
  },
  {
    id: "optimal",
    name: "Оптимальный",
    price: "50 000",
    popular: true,
    features: [
      "Всё из базового",
      "VK Реклама",
      "Контент",
      "A/B тестирование",
      "Работа с конверсией",
    ],
  },
  {
    id: "premium",
    name: "Премиум",
    price: "80 000",
    features: [
      "Всё из оптимального",
      "Стратегические встречи",
      "Работа с репутацией",
      "Развитие системы",
      "Новые рекламные гипотезы",
    ],
  },
];

export function SupportSection() {
  return (
    <Section id="support" style={{ background: "var(--bg)" }}>
      <SectionHeading
        eyebrow="06 — Сопровождение"
        title="После запуска продолжаем развивать ваш объект"
        subtitle="Запуск — это только начало. Ежемесячное сопровождение помогает расти, тестировать гипотезы и удерживать стабильный поток прямых бронирований."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`info-card relative flex h-full flex-col gap-5 p-6 sm:p-7 ${
              tier.popular ? "border-[var(--accent-dim)]" : ""
            }`}
          >
            {tier.popular && (
              <div className="absolute right-4 top-4">
                <span className="font-mono inline-flex items-center gap-1 bg-[var(--gold)] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  <Star className="size-3 fill-current" />
                  Оптимальный
                </span>
              </div>
            )}
            <div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
                {tier.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl tracking-tight" style={{ color: "var(--fg)" }}>
                  {tier.price}
                </span>
                <span className="font-heading text-base font-semibold" style={{ color: "var(--muted)" }}>
                  ₽ / мес
                </span>
              </div>
            </div>

            <ul className="flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--fg-dim)" }}>
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-[var(--accent)] text-black">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--muted)" }}>
              <RefreshCw className="size-3.5" />
              Ежемесячное продление
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
