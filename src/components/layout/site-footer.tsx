import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-100/20 bg-slate-900/85">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-base font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-300">{site.tagline}</p>
          <p className="mt-3 text-sm text-slate-400">
            AI automation for SMEs that want faster follow-up, better qualification, and more booked demos.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</p>
          <p className="mt-3 text-sm text-slate-300">hello@questinteractive.example</p>
          <p className="mt-1 text-sm text-slate-300">+254 700 000 000</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full border border-cyan-100/40 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:text-slate-950"
          >
            Start your demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
