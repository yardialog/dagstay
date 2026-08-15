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
      <DialogContent className="max-h-[92vh] overflow-y-auto scrollbar-premium sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Заполните форму — за 15 минут покажем, где вы теряете гостей и какие
            изменения быстрее всего увеличат количество прямых бронирований.
          </DialogDescription>
        </DialogHeader>

        {calculator && calculator.monthlyLoss > 0 && (
          <div className="rounded-lg border border-gold/30 bg-gold/10 p-3 text-sm">
            <p className="font-medium text-foreground">
              Ваша расчётная комиссия агрегаторам:
            </p>
            <p className="text-lg font-bold text-gold-foreground">
              ≈ {calculator.monthlyLoss.toLocaleString("ru-RU")} ₽ / мес
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
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
