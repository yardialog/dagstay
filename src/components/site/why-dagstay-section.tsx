"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPinned,
  Mountain,
  Wrench,
  Users,
  ShieldCheck,
  Bot,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";

const REASONS = [
  { icon: Award, title: "15+ лет опыта", text: "в digital" },
  { icon: Mountain, title: "Полная специализация", text: "на туризме" },
  { icon: MapPinned, title: "Понимание рынка", text: "Дагестана" },
  { icon: Wrench, title: "Работа под ключ", text: "от стратегии до запуска" },
  { icon: Users, title: "Один подрядчик", text: "вместо пяти" },
  { icon: ShieldCheck, title: "Личная ответственность", text: "за результат" },
  { icon: Bot, title: "Современные AI-инструменты", text: "в каждом блоке" },
  {
    icon: TrendingUp,
    title: "Рост прибыли",
    text: "а не просто сайты",
  },
];

export function WhyDagstaySection() {
  return (
    <Section id="why" className="bg-background">
      <SectionHeading
        eyebrow="Блок 8 · О нас"
        title="Почему владельцы объектов работают с нами"
        subtitle="Мы не агентство «всё подряд». Мы — узкий подрядчик, который отвечает за прямые бронирования туристических объектов Дагестана."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="group relative flex items-start gap-4 rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-brand/40 hover:bg-brand/[0.03] hover:shadow-md"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
              <r.icon className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight text-foreground">
                {r.title}
              </span>
              <span className="mt-0.5 text-sm text-muted-foreground">
                {r.text}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
