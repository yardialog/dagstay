"use client";

import { Mountain, Phone, Send, Mail, MapPin, Shield, FileText } from "lucide-react";

const CONTACTS = [
  { icon: Phone, label: "Телефон", value: "+7 (872) 200-00-00", href: "tel:+78722000000" },
  { icon: Send, label: "Telegram", value: "@dagstay", href: "https://t.me/dagstay" },
  { icon: Mail, label: "Email", value: "hello@dagstay.ru", href: "mailto:hello@dagstay.ru" },
  { icon: MapPin, label: "Адрес", value: "Махачкала, Дагестан", href: undefined },
];

const SOCIALS = [
  { label: "VK", href: "https://vk.com/dagstay" },
  { label: "Telegram", href: "https://t.me/dagstay" },
  { label: "Rutube", href: "https://rutube.ru/channel/dagstay" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Бренд */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
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
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Сайты • Маркетинг • Автоматизация для туризма Дагестана
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Контакты
            </h4>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                        <c.icon className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-muted-foreground/70">
                          {c.label}
                        </span>
                        <span className="font-medium text-foreground">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-brand">
                        <c.icon className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-muted-foreground/70">
                          {c.label}
                        </span>
                        <span className="font-medium text-foreground">
                          {c.value}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Документы */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Документы
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="/privacy"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Shield className="size-4" />
                  </span>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <FileText className="size-4" />
                  </span>
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DAGSTAY. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Сделано в Дагестане для туризма Дагестана.
          </p>
        </div>
      </div>
    </footer>
  );
}
