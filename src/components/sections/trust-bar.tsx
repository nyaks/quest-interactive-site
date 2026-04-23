import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = ["Logistics", "Legal", "Real Estate", "Recruitment", "E-commerce"];

export function TrustBar() {
  return (
    <section className="py-10 sm:py-12">
      <div className="animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-slate-800/75 p-7 sm:p-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for SME teams across high-response sectors"
          description="Placeholder categories representing the types of businesses Quest Interactive supports."
        />
        <div className="mt-7 flex flex-wrap items-center gap-3.5">
          {industries.map((industry, index) => (
            <span
              key={industry}
              className="rounded-full border border-cyan-100/25 bg-slate-900/85 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {industry}
            </span>
          ))}
        </div>
        <div className="mt-7">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            View industry case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
