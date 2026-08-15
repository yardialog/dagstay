"use client";

import { Mountain } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useLeadStore } from "@/lib/lead-store";

const NAV_LINKS = [
  { href: "#problems", label: "Проблемы" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#system", label: "Система" },
  { href: "#packages", label: "Тарифы" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const open = useLeadStore((s) => s.open);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center bg-[var(--accent)] text-black">
            <Mountain className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide" style={{ color: "var(--fg)" }}>
              DAGSTAY
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Туризм Дагестана
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading relative px-3 py-2 text-[0.85rem] uppercase tracking-[0.18em] text-[var(--fg-dim)] transition-colors hover:text-[var(--fg)]"
              style={{
                // accent dot on hover via CSS
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Location indicator */}
          <span className="mr-2 hidden items-center gap-1.5 sm:flex">
            <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
              Дагестан
            </span>
          </span>

          <button
            onClick={() => open("hero")}
            className="hidden font-heading text-sm uppercase tracking-wider bg-[var(--silver)] text-black px-4 py-2 transition-colors hover:bg-[var(--fg)] sm:inline-flex"
          >
            Бесплатный аудит
          </button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-10 items-center justify-center border border-[var(--border-light)] text-[var(--fg)] lg:hidden"
                aria-label="Открыть меню"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs border-[var(--border)] bg-[var(--bg-darker)]"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left" style={{ color: "var(--fg)" }}>
                  <span className="flex size-8 items-center justify-center bg-[var(--accent)] text-black">
                    <Mountain className="size-4" />
                  </span>
                  <span className="font-display text-lg">DAGSTAY</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Навигация по разделам лендинга DAGSTAY
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="font-heading px-3 py-2.5 text-base uppercase tracking-wider text-[var(--fg-dim)] transition-colors hover:text-[var(--accent)]"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <button
                  className="w-full bg-[var(--accent)] py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-[var(--accent-bright)]"
                  onClick={() => open("hero")}
                >
                  Бесплатный аудит
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
