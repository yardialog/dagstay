"use client";

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
    <Section id="why" style={{ background: "var(--bg)" }}>
      <SectionHeading
        eyebrow="08 — Почему DAGSTAY"
        title="Почему владельцы объектов работают с нами"
        subtitle="Мы не агентство «всё подряд». Мы — узкий подрядчик, который отвечает за прямые бронирования туристических объектов Дагестана."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r) => (
          <div
            key={r.title}
            className="notch-corner info-card flex items-start gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <span className="flex size-10 shrink-0 items-center justify-center bg-[var(--accent)] text-black">
              <r.icon className="size-5" />
            </span>
            <div className="flex flex-col">
              <span
                className="text-base font-semibold leading-tight"
                style={{ color: "var(--fg)" }}
              >
                {r.title}
              </span>
              <span className="mt-0.5 text-sm" style={{ color: "var(--muted)" }}>
                {r.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
