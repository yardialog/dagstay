"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadStore } from "@/lib/lead-store";

const ADVANTAGES = [
  "Больше гостей",
  "Меньше комиссий",
  "Полный контроль",
];

export function HeroSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Фоновое изображение — природа Дагестана */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-custom.jpg"
          alt="Природа Дагестана — горные склоны и ущелья"
          className="size-full object-cover"
          fetchPriority="high"
        />
        {/* Усиленное затемнение для читаемости на детализированном фото */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
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
            className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            Увеличиваем прямые бронирования для отелей, гостевых домов и
            глэмпингов Дагестана
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="max-w-2xl space-y-2 text-pretty text-base text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-lg"
          >
            <p>
              Помогаем получать больше гостей напрямую, снижать зависимость от
              агрегаторов и автоматизировать работу с заявками.
            </p>
            <p className="text-white/85">
              Создаём систему под ключ: современный сайт, реклама, AI-помощник,
              CRM и аналитика.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="flex w-full flex-col gap-4"
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                onClick={() => open("hero")}
                className="group h-12 w-full bg-gold px-7 text-base font-semibold text-gold-foreground shadow-xl shadow-black/30 transition-all hover:bg-gold/90 hover:shadow-gold/30 sm:w-auto"
              >
                Получить бесплатный аудит объекта
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="group h-12 w-full border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <a href="#packages">
                  <LayoutGrid className="size-4" />
                  Смотреть пакеты
                </a>
              </Button>
            </div>
            <p className="max-w-md text-sm text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
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
                className="flex items-center gap-2.5 text-base font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] sm:text-lg"
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

    </section>
  );
}
