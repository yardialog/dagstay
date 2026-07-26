"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { Section, SectionHeading, CtaButton } from "./section-primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Case = {
  name: string;
  type: string;
  before: { value: string; label: string };
  after: { value: string; label: string };
  done: string[];
  result: string;
};

const CASES: Case[] = [
  {
    name: "Гостевой дом «Сулак»",
    type: "Гостевой дом · 12 номеров · Дербент",
    before: { value: "70%", label: "броней через агрегаторов" },
    after: { value: "35%", label: "броней через агрегаторов" },
    done: [
      "Запустили сайт с онлайн-заявкой",
      "Настроили Яндекс.Директ",
      "Подключили AI-помощника 24/7",
    ],
    result: "Прямые бронирования выросли в 2 раза за 2 месяца.",
  },
  {
    name: "Глэмпинг «Гимринский»",
    type: "Глэмпинг · 8 номеров · Гимры",
    before: { value: "0", label: "повторных гостей" },
    after: { value: "28%", label: "возвращаются снова" },
    done: [
      "Автоматическая воронка возврата",
      "Программа лояльности",
      "E-mail и Telegram-рассылки",
    ],
    result: "Каждый четвёртый гость бронирует повторно.",
  },
  {
    name: "Отель «Каспий»",
    type: "Отель · 45 номеров · Махачкала",
    before: { value: "4 ч", label: "среднее время ответа" },
    after: { value: "30 сек", label: "ответ AI-помощника" },
    done: [
      "Внедрили AI-ассистента",
      "Интеграция календарей",
      "Защита от овербукинга",
    ],
    result: "Конверсия из заявки в бронирование +38%.",
  },
];

export function CasesSection() {
  return (
    <Section id="cases" className="bg-muted/30">
      <SectionHeading
        eyebrow="Блок 9 · Кейсы"
        title="Наши результаты"
        subtitle="Первые проекты с реальными цифрами. Показываем честные метрики «до» и «после» — без обещаний «×10 за неделю»."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <Badge variant="secondary" className="gap-1.5">
          <Sparkles className="size-3 text-gold-foreground" />
          Первые проекты
        </Badge>
        <Badge variant="outline" className="gap-1.5">
          <MapPin className="size-3 text-brand" />
          Дагестан
        </Badge>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <Card className="flex h-full flex-col overflow-hidden border-border/70 transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.type}</p>
                </div>

                {/* До / После */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-muted/70 p-4 text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      До
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-foreground">
                      {c.before.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.before.label}
                    </p>
                  </div>
                  <div className="rounded-xl bg-brand/10 p-4 text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand">
                      После
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-brand">
                      {c.after.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.after.label}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Что сделали
                  </p>
                  <ul className="space-y-1.5">
                    {c.done.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-brand/20 bg-brand/5 p-3">
                  <p className="text-sm font-semibold text-foreground">
                    {c.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="max-w-xl text-balance text-lg font-medium text-foreground">
          Хотите такой же результат для своего объекта?
        </p>
        <CtaButton
          source="final"
          label="Получить бесплатный аудит"
          className="h-12 px-7 text-base"
        />
      </div>
    </Section>
  );
}
