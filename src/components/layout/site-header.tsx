import Link from "next/link";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100/20 bg-slate-900/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
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
      </div>
    </header>
  );
}
