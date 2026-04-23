import Link from "next/link";
import { navigation, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100/20 bg-slate-900/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-wide text-white">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-100 transition hover:text-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.ctaLink}
          className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          Book a Free Demo
        </Link>
      </div>
    </header>
  );
}
