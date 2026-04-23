"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100/20 bg-slate-900/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-cyan-100/30 px-3 py-2 text-sm text-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav aria-label="Primary" className="hidden w-full items-center justify-center gap-x-8 md:flex">
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

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-cyan-100/15 bg-slate-900/95 px-4 py-3 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-100 transition hover:bg-cyan-200/10 hover:text-cyan-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
