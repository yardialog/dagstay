"use client";

import { useState, useMemo } from "react";
import { TrendingDown, Calculator, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { useLeadStore } from "@/lib/lead-store";

/** Средняя комиссия агрегаторов (Booking, Ostrovok, Суточно и т.п.) ~18% */
const COMMISSION_RATE = 0.18;

function formatRub(n: number) {
  if (!isFinite(n) || n <= 0) return "0";
  return Math.round(n).toLocaleString("ru-RU");
}

export function CalculatorSection() {
  const [avgPrice, setAvgPrice] = useState(4500);
  const [bookings, setBookings] = useState(40);
  const [share, setShare] = useState(70);

  const open = useLeadStore((s) => s.open);

  const { monthlyLoss, yearlyLoss, aggregatorBookings } = useMemo(() => {
    const aggBookings = Math.round((bookings * share) / 100);
    const monthly = avgPrice * aggBookings * COMMISSION_RATE;
    return {
      monthlyLoss: monthly,
      yearlyLoss: monthly * 12,
      aggregatorBookings: aggBookings,
    };
  }, [avgPrice, bookings, share]);

  function handleGetCalc() {
    open("calculator", {
      title: "Получить расчёт",
      calculator: {
        avgPrice,
        bookings,
        aggregatorShare: share,
        monthlyLoss: Math.round(monthlyLoss),
      },
    });
  }

  return (
    <Section
      id="calculator"
      style={{ background: "var(--bg-darker)" }}
    >
      <SectionHeading
        eyebrow="03 — Калькулятор"
        title="Сколько денег вы оставляете агрегаторам?"
        subtitle="Двигайте ползунки и оцените, сколько объект ежемесячно платит посредникам. Расчёт ведём по средней комиссии агрегаторов 18%."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Ввод данных */}
        <div className="lg:col-span-3">
          <div className="info-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center bg-[var(--accent)] text-black">
                <Calculator className="size-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
                Параметры объекта
              </h3>
            </div>

            <div className="space-y-7">
              {/* Средняя стоимость */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                    Средняя стоимость проживания
                  </label>
                  <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
                    {formatRub(avgPrice)} ₽ / сутки
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={20000}
                  step={500}
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                  aria-label="Средняя стоимость проживания"
                />
              </div>

              {/* Количество бронирований */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                    Количество бронирований в месяц
                  </label>
                  <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
                    {bookings} / мес
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={200}
                  step={1}
                  value={bookings}
                  onChange={(e) => setBookings(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                  aria-label="Количество бронирований"
                />
              </div>

              {/* Доля агрегаторов */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                    Доля через агрегаторы
                  </label>
                  <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
                    {share}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={share}
                  onChange={(e) => setShare(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                  aria-label="Доля агрегаторов"
                />
                <div className="flex justify-between font-mono text-xs" style={{ color: "var(--muted)" }}>
                  <span>0% — всё напрямую</span>
                  <span>100% — всё через агрегаторов</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Результат */}
        <div className="lg:col-span-2">
          <div className="booking-frame flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="font-mono flex items-center gap-2 text-xs uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>
                <TrendingDown className="size-4" />
                Комиссия агрегаторам
              </div>
              <div>
                <p className="text-sm" style={{ color: "var(--fg-dim)", }}>
                  Вы можете платить агрегаторам около
                </p>
                <p className="font-display mt-1 number-display" style={{ fontSize: "3rem", color: "var(--accent)" }}>
                  {formatRub(monthlyLoss)} ₽
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-dim)" }}>
                  ежемесячно
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    В год
                  </p>
                  <p className="font-heading text-lg font-bold" style={{ color: "var(--fg)" }}>
                    {formatRub(yearlyLoss)} ₽
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Через агрегаторов
                  </p>
                  <p className="font-heading text-lg font-bold" style={{ color: "var(--fg)" }}>
                    {aggregatorBookings} / мес
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm" style={{ color: "var(--fg-dim)" }}>
                Мы покажем, какую часть этих бронирований реально перевести в
                прямые продажи.
              </p>
              <button
                onClick={handleGetCalc}
                className="group flex w-full items-center justify-center gap-2 bg-[var(--gold)] py-3 text-sm font-semibold text-black transition-all hover:brightness-110"
                style={{ fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Получить расчёт
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
