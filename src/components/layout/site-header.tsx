"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: PointerEvent) {
      if (!open || !wrapperRef.current) return;
      const target = event.target as Node;
      if (!wrapperRef.current.contains(target)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header ref={wrapperRef} className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-slate-100 transition duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-slate-100 transition duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-slate-100 transition duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <nav aria-label="Primary" className="hidden w-full items-center justify-center gap-x-8 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-2 py-1 text-sm transition ${isActive ? "bg-cyan-200/15 text-cyan-100" : "text-slate-100 hover:text-cyan-100"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-slate-950/95 px-4 py-3 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`rounded-lg px-3 py-2 text-sm transition ${isActive ? "bg-cyan-200/15 text-cyan-100" : "text-slate-100 hover:bg-cyan-200/10 hover:text-cyan-100"}`} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}