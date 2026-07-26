"use client";

import { motion } from "framer-motion";
import { Percent, Clock, Repeat, MonitorDown, HelpCircle } from "lucide-react";
import { Section, SectionHeading, CtaButton } from "./section-primitives";
import { Card, CardContent } from "@/components/ui/card";

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
    <Section id="problems" className="bg-background">
      <SectionHeading
        eyebrow="Блок 2 · Диагностика"
        title="Почему объект теряет прибыль"
        subtitle="Четыре причины, по которым отели и глэмпинги в Дагестане недополучают прямые бронирования каждый месяц."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
          >
            <Card className="group h-full border-border/70 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                  <p.icon className="size-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                  Проблема {String(i + 1).padStart(2, "0")}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:p-10">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand/10">
          <HelpCircle className="size-7 text-brand" />
        </div>
        <p className="max-w-xl text-balance text-xl font-semibold text-foreground sm:text-2xl">
          Узнали свой объект хотя бы в двух пунктах?
        </p>
        <CtaButton
          source="problems"
          label="Получить бесплатный аудит"
          className="h-12 px-7 text-base"
        />
      </div>
    </Section>
  );
}
