"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLeadStore, type LeadSource } from "@/lib/lead-store";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Укажите имя — минимум 2 символа"),
  phone: z.string().min(6, "Укажите корректный телефон"),
  telegram: z.string().optional(),
  objectType: z.string().optional(),
  roomsCount: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const OBJECT_TYPES = [
  "Отель",
  "Гостевой дом",
  "Глэмпинг",
  "База отдыха",
  "Апартаменты",
  "Другое",
];

const ROOMS_OPTIONS = [
  "до 5 номеров",
  "6–15 номеров",
  "16–30 номеров",
  "31–50 номеров",
  "более 50 номеров",
];

type AuditFormProps = {
  /** источник заявки для аналитики */
  source?: LeadSource;
  /** вариант отображения: полноширинный (финальная секция) или компактный (диалог) */
  variant?: "full" | "compact";
  /** текст кнопки */
  submitLabel?: string;
  /** показать подпись под кнопкой */
  showNote?: boolean;
  /** колбэк после успешной отправки (например, закрыть диалог) */
  onSuccess?: () => void;
  className?: string;
};

export function AuditForm({
  source = "final",
  variant = "compact",
  submitLabel = "Получить аудит бесплатно",
  showNote = true,
  onSuccess,
  className,
}: AuditFormProps) {
  const [done, setDone] = useState(false);
  const calculator = useLeadStore((s) => s.calculator);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      telegram: "",
      objectType: "",
      roomsCount: "",
    },
  });

  const objectType = watch("objectType");
  const roomsCount = watch("roomsCount");

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source,
          avgPrice: calculator?.avgPrice ?? null,
          bookings: calculator?.bookings ?? null,
          aggregatorShare: calculator?.aggregatorShare ?? null,
          monthlyLoss: calculator?.monthlyLoss ?? null,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.message || "Не удалось отправить заявку");
      }
      setDone(true);
      reset();
      toast.success("Заявка отправлена!", {
        description: "Свяжемся с вами в течение двух часов в рабочее время.",
      });
      onSuccess?.();
    } catch (e) {
      const message = e instanceof Error ? e.message : "Ошибка отправки";
      toast.error("Не удалось отправить", { description: message });
    }
  }

  if (done) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl border border-brand/20 bg-brand/5 p-8 text-center",
          className
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-brand/10">
          <CheckCircle2 className="size-8 text-brand" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          Заявка принята!
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Спасибо! Мы свяжемся с вами в течение двух часов в рабочее время,
          чтобы провести бесплатный аудит вашего объекта.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setDone(false)}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  const isFull = variant === "full";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex flex-col gap-4",
        isFull && "md:grid md:grid-cols-2 md:gap-4",
        className
      )}
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`name-${source}`} className="text-sm font-medium">
          Имя <span className="text-destructive">*</span>
        </Label>
        <Input
          id={`name-${source}`}
          placeholder="Как к вам обращаться"
          autoComplete="name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <span className="text-xs text-destructive">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`phone-${source}`} className="text-sm font-medium">
          Телефон <span className="text-destructive">*</span>
        </Label>
        <Input
          id={`phone-${source}`}
          type="tel"
          placeholder="+7 999 000-00-00"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-xs text-destructive">
            {errors.phone.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`tg-${source}`} className="text-sm font-medium">
          Telegram
        </Label>
        <Input
          id={`tg-${source}`}
          placeholder="@username (необязательно)"
          autoComplete="username"
          {...register("telegram")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-sm font-medium">Тип объекта</Label>
        <Select
          value={objectType}
          onValueChange={(v) => setValue("objectType", v)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Выберите тип" />
          </SelectTrigger>
          <SelectContent>
            {OBJECT_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={cn("flex flex-col gap-1.5", isFull && "md:col-span-2")}>
        <Label className="text-sm font-medium">Количество номеров</Label>
        <Select
          value={roomsCount}
          onValueChange={(v) => setValue("roomsCount", v)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Выберите диапазон" />
          </SelectTrigger>
          <SelectContent>
            {ROOMS_OPTIONS.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={cn("flex flex-col gap-3", isFull && "md:col-span-2")}>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-brand text-brand-foreground hover:bg-brand/90 shadow-md"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Отправляем…
            </>
          ) : (
            submitLabel
          )}
        </Button>
        {showNote && (
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-brand" />
            Ответим в течение двух часов в рабочее время.
          </p>
        )}
      </div>
    </form>
  );
}
