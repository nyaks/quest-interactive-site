import Link from "next/link";
import { navigation, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-300">{site.tagline}</p>
          <p className="mt-3 text-sm text-slate-400">
            AI automation for SMEs that want faster follow-up, better qualification, and more booked demos.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Pages</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</p>
          <p className="mt-3 text-sm text-slate-300">hello@questinteractive.example</p>
          <p className="mt-1 text-sm text-slate-300">+254 700 000 000</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Start your demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
