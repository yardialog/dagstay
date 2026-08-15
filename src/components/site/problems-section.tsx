"use client";

import { Percent, Clock, Repeat, MonitorDown, HelpCircle } from "lucide-react";
import { Section, SectionHeading, CtaButton } from "./section-primitives";

const PROBLEMS = [
  {
    icon: Percent,
    title: "Комиссии агрегаторов",
    text: "Каждое бронирование через агрегатор уменьшает вашу прибыль. Чем больше гостей приходит через посредников, тем выше ваши расходы на продажи.",
  },
  {
    icon: Clock,
    title: "Потерянные заявки",
    text: "Гости пишут вечером, ночью или в выходные. Если ответ приходит слишком поздно, они могут выбрать другой объект.",
  },
  {
    icon: Repeat,
    title: "Нет повторных гостей",
    text: "После отдыха большинство туристов больше не возвращаются, потому что с ними никто не поддерживает связь.",
  },
  {
    icon: MonitorDown,
    title: "Сайт не помогает продавать",
    text: "Неудобный интерфейс, медленная загрузка или сложное бронирование снижают количество обращений.",
  },
];

export function ProblemsSection() {
  return (
    <Section id="problems" style={{ background: "var(--bg)" }}>
      <SectionHeading
        eyebrow="02 — Проблемы"
        title="Почему объект теряет прибыль"
        subtitle="Четыре причины, по которым отели и глэмпинги в Дагестане недополучают прямые бронирования каждый месяц."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <div
            key={p.title}
            className="notch-corner info-card flex h-full flex-col gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex size-11 items-center justify-center bg-[var(--accent)] text-black">
              <p.icon className="size-5" />
            </div>
            <div className="flex-1 space-y-2">
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fg)", textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-dim)" }}>
                {p.text}
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
              Проблема {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <div className="info-card mt-12 flex flex-col items-center gap-5 p-8 text-center sm:p-10">
        <div className="flex size-12 items-center justify-center bg-[var(--accent)] text-black">
          <HelpCircle className="size-6" />
        </div>
        <p className="font-heading max-w-xl text-balance text-xl font-semibold uppercase tracking-wide sm:text-2xl" style={{ color: "var(--fg)" }}>
          Узнали свой объект хотя бы в двух пунктах?
        </p>
        <CtaButton
          source="problems"
          label="Получить бесплатный аудит"
          className="py-3 px-7"
        />
      </div>
    </Section>
  );
}
