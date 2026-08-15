"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

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
  source?: LeadSource;
  variant?: "full" | "compact";
  submitLabel?: string;
  showNote?: boolean;
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
          "flex flex-col items-center justify-center gap-3 border border-[var(--accent-dim)] bg-[var(--bg-card)] p-8 text-center",
          className
        )}
      >
        <div className="flex size-14 items-center justify-center bg-[var(--accent)] text-black">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-heading text-xl font-bold uppercase tracking-wide" style={{ color: "var(--fg)" }}>
          Заявка принята!
        </h3>
        <p className="max-w-sm text-sm" style={{ color: "var(--fg-dim)" }}>
          Спасибо! Мы свяжемся с вами в течение двух часов в рабочее время,
          чтобы провести бесплатный аудит вашего объекта.
        </p>
        <button
          className="mt-2 border border-[var(--border-light)] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ color: "var(--fg-dim)" }}
          onClick={() => setDone(false)}
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  const isFull = variant === "full";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex flex-col gap-5",
        isFull && "md:grid md:grid-cols-2 md:gap-4",
        className
      )}
    >
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
          Имя <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          {...register("name")}
          placeholder="Как к вам обращаться"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className="form-input"
        />
        {errors.name && (
          <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
          Телефон <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+7 999 000-00-00"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          className="form-input"
        />
        {errors.phone && (
          <span className="text-xs" style={{ color: "var(--destructive)" }}>{errors.phone.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
          Telegram
        </label>
        <input
          {...register("telegram")}
          placeholder="@username (необязательно)"
          autoComplete="username"
          className="form-input"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
          Тип объекта
        </label>
        <Select
          value={objectType}
          onValueChange={(v) => setValue("objectType", v)}
        >
          <SelectTrigger className="w-full border-[var(--border-light)] bg-transparent" style={{ color: "var(--fg)" }}>
            <SelectValue placeholder="Выберите тип" />
          </SelectTrigger>
          <SelectContent className="border-[var(--border)] bg-[var(--bg-card)]">
            {OBJECT_TYPES.map((t) => (
              <SelectItem key={t} value={t} className="text-[var(--fg-dim)]">
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={cn("flex flex-col gap-1.5", isFull && "md:col-span-2")}>
        <label className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
          Количество номеров
        </label>
        <Select
          value={roomsCount}
          onValueChange={(v) => setValue("roomsCount", v)}
        >
          <SelectTrigger className="w-full border-[var(--border-light)] bg-transparent" style={{ color: "var(--fg)" }}>
            <SelectValue placeholder="Выберите диапазон" />
          </SelectTrigger>
          <SelectContent className="border-[var(--border)] bg-[var(--bg-card)]">
            {ROOMS_OPTIONS.map((r) => (
              <SelectItem key={r} value={r} className="text-[var(--fg-dim)]">
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={cn("flex flex-col gap-3", isFull && "md:col-span-2")}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 bg-[var(--accent)] py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-[var(--accent-bright)] disabled:opacity-60"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Отправляем…
            </>
          ) : (
            submitLabel
          )}
        </button>
        {showNote && (
          <p className="flex items-center justify-center gap-1.5 text-center text-xs" style={{ color: "var(--muted)" }}>
            <ShieldCheck className="size-3.5" style={{ color: "var(--accent)" }} />
            Ответим в течение двух часов в рабочее время.
          </p>
        )}
      </div>
    </form>
  );
}
