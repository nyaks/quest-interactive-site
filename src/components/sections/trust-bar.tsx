import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = ["Logistics", "Legal", "Real Estate", "Recruitment", "E-commerce"];

export function TrustBar() {
  return (
    <section className="py-8">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
        <SectionHeading
          eyebrow="Industries"
          title="Built for SME teams across high-response sectors"
          description="Placeholder categories representing the types of businesses Quest Interactive supports."
        />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200"
            >
              {industry}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            View industry case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
