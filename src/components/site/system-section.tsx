"use client";

import {
  Search,
  Globe,
  Bot,
  CalendarCheck,
  Database,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";

const STEPS = [
  {
    icon: Search,
    title: "Туристы находят ваш объект",
    text: "Запускаем рекламу в Яндекс и VK для людей, которые уже планируют отдых в Дагестане.",
  },
  {
    icon: Globe,
    title: "Переходят на современный сайт",
    text: "Красивый дизайн, удобное бронирование, адаптация под мобильные устройства.",
  },
  {
    icon: Bot,
    title: "Задают вопросы",
    text: "AI-помощник отвечает на вопросы, помогает подобрать даты и принимает обращения даже ночью.",
  },
  {
    icon: CalendarCheck,
    title: "Оставляют заявки",
    text: "Система букинга показывает свободные даты и позволяет забронировать номер за 1 минуту. Перед оплатой гость сам выбирает дополнительные услуги: трансфер, SPA, экскурсии.",
  },
  {
    icon: Database,
    title: "Все обращения сохраняются",
    text: "Все заявки автоматически попадают в единую систему. Ничего не теряется.",
  },
  {
    icon: HeartHandshake,
    title: "Гости возвращаются снова",
    text: "Автоматические сообщения, скидки постоянным клиентам, программы лояльности.",
  },
];

export function SystemSection() {
  return (
    <Section id="system" style={{ background: "var(--bg)" }}>
      <SectionHeading
        eyebrow="04 — Система"
        title={
          <>
            Мы строим <span style={{ color: "var(--accent)" }}>систему</span> прямых
            бронирований
          </>
        }
        subtitle="Не просто сайт или реклама. Мы создаём единую систему, которая помогает получать гостей, автоматически обрабатывать заявки и возвращать клиентов повторно."
      />

      {/* Шаги */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className="notch-corner info-card flex h-full flex-col gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center bg-[var(--accent)] text-black">
                <s.icon className="size-5" />
              </div>
              <span className="font-display text-5xl leading-none" style={{ color: "var(--border-light)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="space-y-2">
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fg)", textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-dim)" }}>
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Итоговая плашка */}
      <div className="info-card mt-8 flex flex-col items-center gap-4 p-8 text-center">
        <div className="flex size-12 items-center justify-center bg-[var(--accent)] text-black">
          <TrendingUp className="size-6" />
        </div>
        <p className="font-heading max-w-2xl text-balance text-xl font-semibold uppercase tracking-wide sm:text-2xl" style={{ color: "var(--fg)" }}>
          Больше прямых бронирований. Меньше ручной работы. Выше прибыль.
        </p>
      </div>
    </Section>
  );
}
