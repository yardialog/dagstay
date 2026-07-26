"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Calculator, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./section-primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
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
      className="bg-gradient-to-b from-muted/40 to-background"
    >
      <SectionHeading
        eyebrow="Блок 3 · Калькулятор потерь"
        title="Сколько денег вы оставляете агрегаторам?"
        subtitle="Двигайте ползунки и оцените, сколько объект ежемесячно платит посредникам. Расчёт ведём по средней комиссии агрегаторов 18%."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Ввод данных */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Calculator className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                Параметры объекта
              </h3>
            </div>

            <div className="space-y-7">
              {/* Средняя стоимость */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Label className="text-sm font-medium">
                    Средняя стоимость проживания
                  </Label>
                  <span className="text-sm font-semibold text-brand">
                    {formatRub(avgPrice)} ₽ / сутки
                  </span>
                </div>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={100}
                  value={avgPrice}
                  onChange={(e) =>
                    setAvgPrice(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="h-11"
                  aria-label="Средняя стоимость проживания в рублях"
                />
                <Slider
                  value={[Math.min(avgPrice, 20000)]}
                  min={500}
                  max={20000}
                  step={500}
                  onValueChange={(v) => setAvgPrice(v[0])}
                  aria-label="Стоимость ползунок"
                />
              </div>

              {/* Количество бронирований */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Label className="text-sm font-medium">
                    Количество бронирований в месяц
                  </Label>
                  <span className="text-sm font-semibold text-brand">
                    {bookings} / мес
                  </span>
                </div>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  value={bookings}
                  onChange={(e) =>
                    setBookings(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="h-11"
                  aria-label="Количество бронирований в месяц"
                />
                <Slider
                  value={[Math.min(bookings, 200)]}
                  min={1}
                  max={200}
                  step={1}
                  onValueChange={(v) => setBookings(v[0])}
                  aria-label="Бронирования ползунок"
                />
              </div>

              {/* Доля агрегаторов */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Label className="text-sm font-medium">
                    Доля бронирований через агрегаторы
                  </Label>
                  <span className="text-sm font-semibold text-brand">
                    {share}%
                  </span>
                </div>
                <Slider
                  value={[share]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(v) => setShare(v[0])}
                  aria-label="Доля агрегаторов"
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0% — всё напрямую</span>
                  <span>100% — всё через агрегаторов</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Результат */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-2"
        >
          <div className="flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand to-brand/80 p-6 text-brand-foreground shadow-xl sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand-foreground/80">
                <TrendingDown className="size-4" />
                Комиссия агрегаторам
              </div>
              <div>
                <p className="text-sm text-brand-foreground/80">
                  Вы можете платить агрегаторам около
                </p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {formatRub(monthlyLoss)} ₽
                </p>
                <p className="mt-1 text-sm text-brand-foreground/80">
                  ежемесячно
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-4">
                <div>
                  <p className="text-xs text-brand-foreground/70">
                    В год это около
                  </p>
                  <p className="text-lg font-bold">
                    {formatRub(yearlyLoss)} ₽
                  </p>
                </div>
                <div>
                  <p className="text-xs text-brand-foreground/70">
                    Бронирований через агрегаторов
                  </p>
                  <p className="text-lg font-bold">
                    {aggregatorBookings} / мес
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-brand-foreground/90">
                Мы покажем, какую часть этих бронирований реально перевести в
                прямые продажи.
              </p>
              <Button
                size="lg"
                onClick={handleGetCalc}
                className="group w-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg"
              >
                Получить расчет
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
