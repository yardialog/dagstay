"use client";

import { motion } from "framer-motion";
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
    accent: "from-brand/15 to-brand/5",
  },
  {
    n: "02",
    title: "Второй месяц",
    theme: "Автоматизация",
    icon: Cpu,
    items: ["AI-помощник", "CRM-система и учёт заявок", "Допродажи"],
    accent: "from-gold/15 to-gold/5",
  },
  {
    n: "03",
    title: "Третий месяц",
    theme: "Рост",
    icon: TrendingUp,
    items: ["Оптимизация рекламы", "Возврат клиентов", "Масштабирование"],
    accent: "from-brand/15 to-gold/5",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-muted/30">
      <SectionHeading
        eyebrow="Блок 7 · Как мы работаем"
        title="Как выглядит внедрение"
        subtitle="Прозрачный процесс за три месяца — от запуска фундамента до масштабирования и возврата гостей."
      />

      <div className="relative mt-12">
        {/* Линия-таймлайн на десктопе */}
        <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-brand/30 via-gold/30 to-brand/30 lg:block" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MONTHS.map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Узел таймлайна */}
                <div className="relative z-10 mb-5 flex size-24 items-center justify-center rounded-full border-4 border-background bg-card shadow-lg">
                  <div
                    className={`flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${m.accent}`}
                  >
                    <m.icon className="size-7 text-brand" />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Месяц {m.n}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {m.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {m.theme}.
                  </p>
                  <ul className="mt-1 flex flex-wrap justify-center gap-2">
                    {m.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-full bg-muted/70 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
