import Link from "next/link";
import { benefits, heroStats, site } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{site.tagline}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Best Salesperson Never Sleeps
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Quest Interactive helps SMEs convert every inbound inquiry into qualified meetings with always-on AI that responds in seconds.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={site.ctaLink}
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              See It In Action — Book a Free Demo
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-cyan-200/40 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-100"
            >
              Explore How It Works
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-cyan-100/15 bg-slate-800/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-slate-800/90"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-3xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-300">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-gradient-to-br from-cyan-300/10 via-slate-800/90 to-slate-800/80 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Why businesses choose Quest</p>
          <ul className="mt-6 space-y-5">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className="rounded-2xl border border-cyan-100/15 bg-slate-800/85 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/35"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-200/20 text-2xl leading-none">
                    {benefit.icon}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{benefit.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{benefit.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
