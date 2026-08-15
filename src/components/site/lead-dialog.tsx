"use client";

import { useLeadStore } from "@/lib/lead-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuditForm } from "./audit-form";

export function LeadDialog() {
  const { isOpen, source, title, close, calculator } = useLeadStore();

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && close()}>
      <DialogContent
        className="scrollbar-dark max-h-[92vh] overflow-y-auto border-[var(--accent-dim)] sm:max-w-lg"
        style={{ background: "var(--bg-card)" }}
      >
        <DialogHeader>
          <DialogTitle
            className="font-heading text-2xl font-bold uppercase tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            {title}
          </DialogTitle>
          <DialogDescription className="text-base" style={{ color: "var(--fg-dim)" }}>
            Заполните форму — за 15 минут покажем, где вы теряете гостей и какие
            изменения быстрее всего увеличат количество прямых бронирований.
          </DialogDescription>
        </DialogHeader>

        {calculator && calculator.monthlyLoss > 0 && (
          <div
            className="border border-[var(--gold)]/30 p-3 text-sm"
            style={{ background: "rgba(212, 168, 67, 0.1)" }}
          >
            <p className="font-medium" style={{ color: "var(--fg)" }}>
              Ваша расчётная комиссия агрегаторам:
            </p>
            <p className="font-display text-lg font-bold" style={{ color: "var(--gold)" }}>
              ≈ {calculator.monthlyLoss.toLocaleString("ru-RU")} ₽ / мес
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
              Покажем, какую часть этих бронирований реально перевести в прямые
              продажи.
            </p>
          </div>
        )}

        <AuditForm
          source={source}
          variant="compact"
          submitLabel="Получить аудит бесплатно"
          onSuccess={() => {
            // оставляем диалог открытым, чтобы показать экран «успешно»
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
