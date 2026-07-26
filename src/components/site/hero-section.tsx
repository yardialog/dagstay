"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadStore } from "@/lib/lead-store";

const ADVANTAGES = [
  "Современный сайт, который удобно открывать с телефона",
  "Настраиваем поток прямых заявок из Яндекса и VK",
  "Автоматизируем обработку заявок 24/7",
];

export function HeroSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Фоновое изображение гор Дагестана с затемнением ~40% */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-mountains.png"
          alt="Горы Дагестана на закате"
          className="size-full object-cover"
          fetchPriority="high"
        />
        {/* Затемнение 40% + вертикальный градиент для читаемости текста */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <Sparkles className="size-3.5 text-gold" />
              Прямые бронирования для туризма Дагестана
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            Увеличиваем прямые бронирования для отелей, гостевых домов и
            глэмпингов Дагестана
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="max-w-2xl space-y-2 text-pretty text-base text-white/90 sm:text-lg"
          >
            <p>
              Помогаем получать больше гостей напрямую, снижать зависимость от
              агрегаторов и автоматизировать работу с заявками.
            </p>
            <p className="text-white/80">
              Создаём систему под ключ: современный сайт, реклама, AI-помощник,
              CRM и аналитика.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="flex w-full flex-col gap-4 sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => open("hero")}
              className="group h-12 w-full bg-gold px-7 text-base font-semibold text-gold-foreground shadow-xl shadow-black/30 transition-all hover:bg-gold/90 hover:shadow-gold/30 sm:w-auto"
            >
              Получить бесплатный аудит объекта
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="max-w-md text-sm text-white/75">
              За 15 минут покажем, где вы теряете гостей и какие изменения
              быстрее всего увеличат количество прямых бронирований.
            </p>
          </motion.div>

          {/* Преимущества */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {ADVANTAGES.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2.5 text-sm text-white/95 sm:text-base"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check className="size-3.5 text-brand-foreground" strokeWidth={3} />
                </span>
                {a}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Декоративный «съезд» внизу для плавного перехода к следующей секции */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
