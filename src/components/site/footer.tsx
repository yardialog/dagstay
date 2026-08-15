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
  { label: "TG", href: "https://t.me/dagstay" },
  { label: "RT", href: "https://rutube.ru/channel/dagstay" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] relative overflow-hidden" style={{ background: "var(--bg-darker)" }}>
      {/* Giant text-stroke DAGSTAY watermark */}
      <span
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-display select-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 16rem)",
          letterSpacing: "0.05em",
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        DAGSTAY
      </span>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Бренд */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
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
            </div>
            <p className="max-w-xs text-sm" style={{ color: "var(--muted)" }}>
              Сайты • Маркетинг • Автоматизация для туризма Дагестана
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center border border-[var(--border-light)] font-mono text-xs font-bold uppercase tracking-wider transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
                  style={{ color: "var(--fg-dim)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--fg)" }}>
              Контакты
            </h4>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group flex items-center gap-3 text-sm transition-colors"
                      style={{ color: "var(--fg-dim)" }}
                    >
                      <span className="flex size-8 items-center justify-center border border-[var(--border-light)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black" style={{ color: "var(--accent)" }}>
                        <c.icon className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                          {c.label}
                        </span>
                        <span className="font-medium" style={{ color: "var(--fg)" }}>
                          {c.value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="flex size-8 items-center justify-center border border-[var(--border-light)]" style={{ color: "var(--accent)" }}>
                        <c.icon className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                          {c.label}
                        </span>
                        <span className="font-medium" style={{ color: "var(--fg)" }}>
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
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--fg)" }}>
              Документы
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="/privacy"
                  className="group flex items-center gap-3 text-sm transition-colors"
                  style={{ color: "var(--fg-dim)" }}
                >
                  <span className="flex size-8 items-center justify-center border border-[var(--border-light)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black" style={{ color: "var(--accent)" }}>
                    <Shield className="size-4" />
                  </span>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="group flex items-center gap-3 text-sm transition-colors"
                  style={{ color: "var(--fg-dim)" }}
                >
                  <span className="flex size-8 items-center justify-center border border-[var(--border-light)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black" style={{ color: "var(--accent)" }}>
                    <FileText className="size-4" />
                  </span>
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} DAGSTAY. Все права защищены.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Сделано в Дагестане для туризма Дагестана.
          </p>
        </div>
      </div>
    </footer>
  );
}
