"use client";

import { motion } from "framer-motion";
import { Check, Star, RefreshCw } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <Section id="support" className="bg-background">
      <SectionHeading
        eyebrow="Блок 6 · Сопровождение"
        title="После запуска продолжаем развивать ваш объект"
        subtitle="Запуск — это только начало. Ежемесячное сопровождение помогает расти, тестировать гипотезы и удерживать стабильный поток прямых бронирований."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
          >
            <Card
              className={cn(
                "relative h-full overflow-hidden border transition-all",
                tier.popular
                  ? "border-brand/50 shadow-xl shadow-brand/10"
                  : "border-border/70 hover:border-brand/30"
              )}
            >
              {tier.popular && (
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-1 text-xs font-bold text-gold-foreground">
                    <Star className="size-3 fill-current" />
                    Оптимальный
                  </span>
                </div>
              )}
              <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-lg font-semibold text-muted-foreground">
                      ₽ / мес
                    </span>
                  </div>
                </div>

                <ul className="flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                          tier.popular
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

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <RefreshCw className="size-3.5" />
                  Ежемесячное продление
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
