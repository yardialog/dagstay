"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLeadStore } from "@/lib/lead-store";
import { ArrowRight } from "lucide-react";

export function StickyCtaBar() {
  const open = useLeadStore((s) => s.open);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const finalRef = useRef<HTMLElement | null>(null);

  const updateVisibility = useCallback(() => {
    if (!heroRef.current) {
      heroRef.current = document.getElementById("top");
    }
    if (!finalRef.current) {
      finalRef.current = document.getElementById("contact");
    }
    if (!heroRef.current) return;

    const heroRect = heroRef.current.getBoundingClientRect();
    const heroVisible =
      heroRect.top < window.innerHeight && heroRect.bottom > 0;

    let finalVisible = false;
    if (finalRef.current) {
      const finalRect = finalRef.current.getBoundingClientRect();
      finalVisible =
        finalRect.top < window.innerHeight && finalRect.bottom > 0;
    }

    setVisible(!heroVisible && !finalVisible);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      updateVisibility();
    }, 100);

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [updateVisibility]);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <div className="border-t border-[var(--border)] bg-[var(--bg-darker)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="rec-dot inline-block size-2 rounded-full bg-[var(--accent)]" />
              <span className="hidden text-xs uppercase tracking-wider text-[var(--muted)] sm:inline font-mono">
                LIVE
              </span>
            </span>
            <span className="text-sm text-[var(--fg-dim)]">
              Места на бесплатный аудит ограничены
            </span>
          </div>
          <button
            onClick={() => open("sticky-bar")}
            className="pulse-btn flex items-center gap-2 bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Бесплатный аудит
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
