"use client";

import { LayoutGrid, Cpu, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";

const MONTHS = [
  {
    n: "01",
    title: "Первый месяц",
    theme: "Создаём фундамент",
    icon: LayoutGrid,
    items: [
      "Сайт",
      "Аналитика",
      "Приём заявок",
      "Внедрение TravelLine/Bnovo/Uhotels",
    ],
  },
  {
    n: "02",
    title: "Второй месяц",
    theme: "Автоматизация",
    icon: Cpu,
    items: ["AI-помощник", "CRM-система и учёт заявок", "Допродажи"],
  },
  {
    n: "03",
    title: "Третий месяц",
    theme: "Рост",
    icon: TrendingUp,
    items: ["Оптимизация рекламы", "Возврат клиентов", "Масштабирование"],
  },
];

export function ProcessSection() {
  return (
    <Section id="process" style={{ background: "var(--bg-darker)" }}>
      <SectionHeading
        eyebrow="07 — Как мы работаем"
        title="Как выглядит внедрение"
        subtitle="Прозрачный процесс за три месяца — от запуска фундамента до масштабирования и возврата гостей."
      />

      <div className="relative mt-12">
        {/* Линия-таймлайн на десктопе */}
        <div className="absolute left-0 right-0 top-12 hidden h-px lg:block" style={{ background: "linear-gradient(90deg, var(--accent-dim), var(--border-light), var(--accent-dim))" }} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MONTHS.map((m) => (
            <div key={m.n} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Узел таймлайна */}
                <div className="relative z-10 mb-5 flex size-24 items-center justify-center border-2 border-[var(--bg)] bg-[var(--bg-card)]">
                  <div className="flex size-16 items-center justify-center bg-[var(--accent)] text-black">
                    <m.icon className="size-7" />
                  </div>
                </div>

                <div className="info-card w-full p-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                    Месяц {m.n}
                  </span>
                  <h3 className="font-heading mt-2 text-xl font-bold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                    {m.theme}.
                  </p>
                  <ul className="mt-3 flex flex-wrap justify-center gap-2">
                    {m.items.map((it) => (
                      <li
                        key={it}
                        className="border border-[var(--border-light)] px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        style={{ color: "var(--fg-dim)" }}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
