import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <Reveal>
      <section className="min-h-screen flex items-center py-12 sm:py-16">
      <div className="glass-card rounded-3xl p-9 sm:p-11 w-full">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Ready to convert faster?</p>
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Your next lead should never wait.</h2>
        <p className="mt-4 max-w-2xl text-slate-100">
          See how {site.name} automates first response, qualification, and booking for your business in under 30 minutes.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href={site.ctaLink}
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            See It In Action — Book a Free Demo
          </Link>
          <Link
            href={site.whatsappLink}
            className="rounded-full border border-cyan-100/35 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-100"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
      </section>
    </Reveal>
  );
}
