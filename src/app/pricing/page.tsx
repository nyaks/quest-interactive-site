import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import { pricingTiers } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Pricing"
          title="Simple packages for fast deployment and measurable ROI"
          description="Choose the plan that matches your lead volume and integration needs. Pricing values are placeholders and should be adjusted before launch."
        />

        <section className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-2xl border p-6 ${
                tier.featured
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-slate-900/70"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{tier.name}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {tier.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book a Demo
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
