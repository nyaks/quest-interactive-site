import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Case studies"
          title="Cross-industry examples of AI-assisted lead conversion"
          description="These are structured placeholder case studies to demonstrate expected outcomes and storytelling format for future client results."
        />

        <section className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.industry} delay={100 * index}>
              <article className="glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/20 text-xl leading-none text-cyan-100">
                  📈
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{study.industry}</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{study.headline}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">{study.result}</p>
              </article>
            </Reveal>
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
