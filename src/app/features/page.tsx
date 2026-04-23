import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { features } from "@/lib/site-data";

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Features"
          title="Automation stack designed for conversion-focused SMEs"
          description="Every feature is built to reduce response time, improve lead quality, and convert more inbound traffic into booked demos."
        />

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
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
