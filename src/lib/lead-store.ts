import { create } from "zustand";

export type LeadSource =
  | "hero"
  | "problems"
  | "calculator"
  | "packages"
  | "support"
  | "final";

type LeadState = {
  isOpen: boolean;
  source: LeadSource;
  /** prefilled title shown in the dialog header */
  title: string;
  /** optional calculator context to attach */
  calculator: {
    avgPrice: number;
    bookings: number;
    aggregatorShare: number;
    monthlyLoss: number;
  } | null;
  open: (source?: LeadSource, opts?: { title?: string; calculator?: LeadState["calculator"] }) => void;
  close: () => void;
};

const DEFAULT_TITLES: Record<LeadSource, string> = {
  hero: "Получить бесплатный аудит объекта",
  problems: "Получить бесплатный аудит",
  calculator: "Получить расчёт",
  packages: "Подобрать решение",
  support: "Оставить заявку",
  final: "Получить аудит бесплатно",
};

export const useLeadStore = create<LeadState>((set, get) => ({
  isOpen: false,
  source: "final",
  title: DEFAULT_TITLES.final,
  calculator: null,
  open: (source = "final", opts) =>
    set({
      isOpen: true,
      source,
      title: opts?.title ?? DEFAULT_TITLES[source],
      calculator: opts?.calculator ?? null,
    }),
  close: () => set({ isOpen: false, calculator: null }),
}));
