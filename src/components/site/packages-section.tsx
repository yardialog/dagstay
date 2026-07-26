"use client";

import { motion } from "framer-motion";
import { Check, Star, Rocket, Crown, Sparkles, HelpCircle } from "lucide-react";
import { Section, SectionHeading, CtaButton } from "./section-primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLeadStore } from "@/lib/lead-store";
import { cn } from "@/lib/utils";

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
    term: "10–14 дней",
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
    term: "21–30 дней",
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
    term: "30–45 дней",
    result: "Полностью цифровая система продаж.",
  },
];

export function PackagesSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <Section id="packages" className="bg-muted/30">
      <SectionHeading
        eyebrow="Блок 5 · Наши решения"
        title="Выберите подходящий формат сотрудничества"
        subtitle="Три пакета под разные задачи — от быстрого запуска до полностью цифровой системы продаж для крупных объектов."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className={cn("relative", plan.popular && "lg:-mt-4 lg:mb-4")}
          >
            <Card
              className={cn(
                "relative flex h-full flex-col overflow-hidden border transition-all",
                plan.popular
                  ? "border-brand/50 shadow-2xl shadow-brand/15 lg:scale-[1.03]"
                  : "border-border/70 hover:border-brand/30 hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-brand to-brand/80 py-1.5 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-foreground">
                    <Star className="size-3.5 fill-current" />
                    Хит выбора
                  </span>
                </div>
              )}
              <CardContent
                className={cn(
                  "flex h-full flex-col gap-5 p-6 sm:p-7",
                  plan.popular && "pt-10"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-xl",
                      plan.popular
                        ? "bg-brand text-brand-foreground"
                        : "bg-brand/10 text-brand"
                    )}
                  >
                    <plan.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Срок: {plan.term}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-xl font-semibold text-muted-foreground">
                      ₽
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.forWhom}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Что входит
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                            plan.popular
                              ? "bg-brand text-brand-foreground"
                              : "bg-brand/15 text-brand"
                          )}
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Результат
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {plan.result}
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={() =>
                    open("packages", {
                      title: `Пакет «${plan.name}» — оформить`,
                    })
                  }
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-brand text-brand-foreground hover:bg-brand/90 shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Под пакетами */}
      <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-gold/15">
          <HelpCircle className="size-7 text-gold-foreground" />
        </div>
        <p className="max-w-xl text-balance text-xl font-semibold text-foreground sm:text-2xl">
          Не уверены, какой вариант подойдет вашему объекту?
        </p>
        <CtaButton
          source="packages"
          label="Подобрать решение"
          variant="outline"
          className="h-12 px-7 text-base"
        />
      </div>
    </Section>
  );
}
