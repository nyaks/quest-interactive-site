import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageIntro } from "@/components/ui/page-intro";
import { Reveal } from "@/components/ui/reveal";
import { pricingTiers } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Pricing"
          title="Simple packages for fast deployment and measurable ROI"
          description="Choose the plan that matches your lead volume and integration needs. Pricing values are placeholders and should be adjusted before launch."
        />

        <section className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={90 * index}>
              <article
                className={`glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${
                  tier.featured ? "ring-1 ring-cyan-200/50" : "hover:border-cyan-200/40"
                }`}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/20 text-xl leading-none text-cyan-100">
                  {tier.featured ? "★" : "✓"}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">{tier.name}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{tier.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-100">{tier.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-100">
                  {tier.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-block rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Book a Demo
                </Link>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
