import Link from "next/link";
import { benefits, heroStats, site } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{site.tagline}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Your Best Salesperson Never Sleeps
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Quest Interactive helps SMEs convert every inbound inquiry into qualified meetings with always-on AI that responds in seconds.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.ctaLink}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              See It In Action — Book a Free Demo
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Explore How It Works
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-2xl font-semibold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Why businesses choose Quest</p>
          <ul className="mt-5 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">{benefit.title}</p>
                <p className="mt-1 text-sm text-slate-300">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
