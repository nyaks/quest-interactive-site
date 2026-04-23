import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { steps } from "@/lib/site-data";

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="How it works"
          title="From first message to booked meeting in four steps"
          description="Quest Interactive automates inbound conversations, qualification, and booking so your team focuses on high-value conversations."
        />

        <section className="grid gap-5 sm:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-slate-800/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/20 text-lg font-semibold text-cyan-100">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Step {index + 1}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{step.detail}</p>
                </div>
              </div>
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
