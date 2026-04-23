import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { features } from "@/lib/site-data";

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Features"
          title="Automation stack designed for conversion-focused SMEs"
          description="Every feature is built to reduce response time, improve lead quality, and convert more inbound traffic into booked demos."
        />

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-slate-800/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/20 text-xl leading-none text-cyan-100">
                ✦
              </div>
              <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{feature.description}</p>
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
