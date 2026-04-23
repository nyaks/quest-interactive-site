import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { steps } from "@/lib/site-data";

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="How it works"
          title="From first message to booked meeting in four steps"
          description="Quest Interactive automates inbound conversations, qualification, and booking so your team focuses on high-value conversations."
        />

        <section className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{step.detail}</p>
            </article>
          ))}
        </section>

        <div className="pt-12">
          <CtaBanner />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
