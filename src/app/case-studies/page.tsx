import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { caseStudies } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Case studies"
          title="Cross-industry examples of AI-assisted lead conversion"
          description="These are structured placeholder case studies to demonstrate expected outcomes and storytelling format for future client results."
        />

        <section className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.industry} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">{study.industry}</p>
              <h2 className="mt-2 text-lg font-semibold text-white">{study.headline}</h2>
              <p className="mt-3 text-sm text-slate-300">{study.result}</p>
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
