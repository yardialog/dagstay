"use client";

import { motion } from "framer-motion";
import {
  Search,
  Globe,
  Bot,
  Database,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { Card, CardContent } from "@/components/ui/card";

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
    title: "Оставляют заявку",
    text: "AI-помощник отвечает на вопросы, помогает подобрать даты и принимает обращения даже ночью.",
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
    <Section id="system" className="bg-background">
      <SectionHeading
        eyebrow="Блок 4 · Наша система"
        title={
          <>
            Мы строим <span className="text-brand">систему</span> прямых
            бронирований
          </>
        }
        subtitle="Не просто сайт или реклама. Мы создаём единую систему, которая помогает получать гостей, автоматически обрабатывать заявки и возвращать клиентов повторно."
      />

      {/* Шаги */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            className={
              i === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }
          >
            <Card className="group relative h-full overflow-hidden border-border/70 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <s.icon className="size-6" />
                  </div>
                  <span className="text-5xl font-extrabold leading-none text-muted/60 transition-colors group-hover:text-brand/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Итоговая плашка */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-brand/20 bg-gradient-to-r from-brand/10 via-brand/5 to-transparent p-8 text-center"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <TrendingUp className="size-6" />
        </div>
        <p className="max-w-2xl text-balance text-xl font-bold text-foreground sm:text-2xl">
          Больше прямых бронирований. Меньше ручной работы. Выше прибыль.
        </p>
      </motion.div>
    </Section>
  );
}
