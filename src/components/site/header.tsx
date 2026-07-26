"use client";

import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#problems", label: "Проблемы" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#system", label: "Система" },
  { href: "#packages", label: "Тарифы" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const open = useLeadStore((s) => s.open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-sm transition-transform group-hover:scale-105">
            <Mountain className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              DAG<span className="text-brand">STAY</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
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
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => open("hero")}
            className="hidden bg-brand text-brand-foreground hover:bg-brand/90 sm:inline-flex"
          >
            Бесплатный аудит
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Открыть меню"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <Mountain className="size-4" />
                  </span>
                  DAGSTAY
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
                      className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                  onClick={() => open("hero")}
                >
                  Бесплатный аудит
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
