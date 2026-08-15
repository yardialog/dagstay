"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutGrid,
  Users,
  TrendingDown,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLeadStore } from "@/lib/lead-store";

type Advantage = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const ADVANTAGES: Advantage[] = [
  {
    title: "Больше гостей",
    subtitle: "Прямые заявки и бронирования",
    icon: Users,
  },
  {
    title: "Меньше комиссий",
    subtitle: "Без переплат агрегаторам",
    icon: TrendingDown,
  },
  {
    title: "Полный контроль",
    subtitle: "Данные и аналитика у вас",
    icon: ShieldCheck,
  },
];

const MARQUEE_ITEMS = [
  "ПРЯМЫЕ БРОНИРОВАНИЯ",
  "БЕЗ КОМИССИЙ",
  "AI-ПОМОЩНИК 24/7",
  "CRM СИСТЕМА",
  "АНАЛИТИКА",
  "ЯНДЕКС ДИРЕКТ",
  "VK РЕКЛАМА",
  "БЕСПЛАТНЫЙ АУДИТ",
];

export function HeroSection() {
  const open = useLeadStore((s) => s.open);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      {/* Background image with noir filter + Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-custom.jpg"
          alt="Природа Дагестана — горные склоны и ущелья"
          className="hero-kenburns size-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Hero overlay — complex multi-layer gradients */}
      <div className="hero-overlay z-[1]" />

      {/* Scan lines */}
      <div className="scan-line z-[2]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column — offer */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-mono inline-flex items-center gap-2 border border-[var(--border-light)] bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--accent)] backdrop-blur-md">
                Прямые бронирования для туризма Дагестана
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="max-w-3xl leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
            >
              <span className="block" style={{ color: "var(--fg)" }}>Увеличиваем</span>
              <span className="text-stroke block">прямые бронирования</span>
              <span className="block">
                для{" "}
                <span style={{ color: "var(--accent)" }}>Дагестана</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="max-w-2xl text-pretty text-base sm:text-lg"
              style={{ color: "var(--fg-dim)" }}
            >
              Система под ключ: сайт, реклама, букинг, AI-помощник, CRM и
              аналитика.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="flex w-full flex-col gap-4"
            >
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button
                  onClick={() => open("hero")}
                  className="pulse-btn group flex h-12 w-full items-center justify-center gap-2 bg-[var(--gold)] px-7 text-base font-semibold text-black transition-all hover:brightness-110 sm:w-auto"
                  style={{ fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Получить бесплатный аудит
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#packages"
                  className="group flex h-12 w-full items-center justify-center gap-2 border border-[var(--border-light)] px-7 text-base font-semibold text-[var(--fg-dim)] backdrop-blur-md transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
                  style={{ fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  <LayoutGrid className="size-4" />
                  Смотреть пакеты
                </a>
              </div>
              <p className="max-w-md text-sm" style={{ color: "var(--fg-dim)" }}>
                За 15 минут покажем, где вы теряете гостей и какие изменения
                быстрее всего увеличат количество прямых бронирований.
              </p>
            </motion.div>
          </div>

          {/* Right column — advantage cards with notch corners */}
          <motion.ul
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            className="mb-4 flex w-full flex-col gap-3 lg:col-span-5"
          >
            {ADVANTAGES.map(({ title, subtitle, icon: Icon }) => (
              <li
                key={title}
                className="notch-corner info-card flex items-center gap-4 p-4 sm:p-5"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center bg-[var(--accent)] text-black"
                >
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <span className="flex flex-col">
                  <span
                    className="text-base font-semibold sm:text-lg"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fg)", textTransform: "uppercase", letterSpacing: "0.04em" }}
                  >
                    {title}
                  </span>
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    {subtitle}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Bottom strip: progress bar + label */}
        <div className="mt-8 flex items-center gap-4">
          <div className="progress-bar flex-1">
            <div className="progress-bar-fill" style={{ width: "72%" }} />
          </div>
          <span className="font-mono flex items-center gap-2 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
            <span className="rec-dot inline-block size-1.5 rounded-full bg-[var(--accent)]" />
            DAGSTAY REEL
          </span>
        </div>
      </div>

      {/* Marquee ticker at very bottom */}
      <div className="relative z-10 border-t border-white/5 bg-[var(--bg-darker)] py-3 overflow-hidden">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono whitespace-nowrap px-6 text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              {item}
              <span className="ml-6" style={{ color: "var(--accent)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
