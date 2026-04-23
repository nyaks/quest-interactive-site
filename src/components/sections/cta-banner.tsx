import Link from "next/link";
import { site } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="rounded-2xl border border-cyan-500/40 bg-slate-900/80 p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready to convert faster?</p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Your next lead should never wait.</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        See how {site.name} automates first response, qualification, and booking for your business in under 30 minutes.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={site.ctaLink}
          className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          See It In Action — Book a Free Demo
        </Link>
        <Link
          href={site.whatsappLink}
          className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
        >
          Chat on WhatsApp
        </Link>
      </div>
    </section>
  );
}
