"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadStore } from "@/lib/lead-store";

const ADVANTAGES = [
  "Сайт, удобный с телефона",
  "Заявки из Яндекса и VK",
  "Обработка 24/7",
];

export function HeroSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Фоновое изображение Гуниба, Дагестан */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-gunib.png"
          alt="Село Гуниб, Дагестан — горное плато и ущелье на закате"
          className="size-full object-cover"
          fetchPriority="high"
        />
        {/* Затемнение для читаемости текста */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-7">
          {/* H1 — главный фокус */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
          >
            Прямые бронирования для отелей и глэмпингов Дагестана
          </motion.h1>

          {/* Один ёмкий подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="max-w-xl text-pretty text-lg text-white/90 drop-shadow sm:text-xl"
          >
            Сайт, реклама и AI-помощник под ключ — снижаем зависимость от
            агрегаторов и автоматизируем заявки.
          </motion.p>

          {/* Две кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => open("hero")}
              className="group h-12 bg-gold px-7 text-base font-semibold text-gold-foreground shadow-xl shadow-black/30 transition-all hover:bg-gold/90 hover:shadow-gold/30"
            >
              Бесплатный аудит объекта
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-12 border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
            >
              <a href="#packages">
                <LayoutGrid className="size-4" />
                Смотреть пакеты
              </a>
            </Button>
          </motion.div>

          {/* Компактные преимущества-ским */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            className="flex flex-wrap gap-x-5 gap-y-2 pt-2"
          >
            {ADVANTAGES.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2 text-sm font-medium text-white/95"
              >
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check className="size-3 text-brand-foreground" strokeWidth={3} />
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
