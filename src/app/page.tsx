import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { ProblemsSection } from "@/components/site/problems-section";
import { CalculatorSection } from "@/components/site/calculator-section";
import { SystemSection } from "@/components/site/system-section";
import { PackagesSection } from "@/components/site/packages-section";
import { SupportSection } from "@/components/site/support-section";
import { ProcessSection } from "@/components/site/process-section";
import { WhyDagstaySection } from "@/components/site/why-dagstay-section";
import { CasesSection } from "@/components/site/cases-section";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { Footer } from "@/components/site/footer";
import { LeadDialog } from "@/components/site/lead-dialog";
import { GrainOverlay } from "@/components/site/grain-overlay";
import { StickyCtaBar } from "@/components/site/sticky-cta-bar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <GrainOverlay />
      <Header />
      <main className="flex-1">
        {/* Блок 1 — Hero */}
        <HeroSection />
        {/* Блок 2 — Проблемы */}
        <ProblemsSection />
        {/* Блок 3 — Калькулятор потерь */}
        <CalculatorSection />
        {/* Блок 4 — Наша система */}
        <SystemSection />
        {/* Блок 5 — Тарифы / Наши решения */}
        <PackagesSection />
        {/* Блок 6 — Ежемесячное сопровождение */}
        <SupportSection />
        {/* Блок 7 — Как мы работаем */}
        <ProcessSection />
        {/* Блок 8 — Почему DAGSTAY */}
        <WhyDagstaySection />
        {/* Блок 9 — Кейсы */}
        <CasesSection />
        {/* Блок 10 — FAQ */}
        <FaqSection />
        {/* Блок 11 — Финальный призыв */}
        <FinalCtaSection />
      </main>
      {/* Блок 12 — Футер (sticky к низу) */}
      <Footer />
      {/* Глобальная форма-диалог */}
      <LeadDialog />
      {/* Sticky CTA bar */}
      <StickyCtaBar />
    </div>
  );
}
