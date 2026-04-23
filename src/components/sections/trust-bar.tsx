import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const industries = ["Logistics", "Legal", "Real Estate", "Recruitment", "E-commerce"];

export function TrustBar() {
  return (
    <section className="min-h-[70vh] flex items-center py-12 sm:py-16">
      <Reveal>
        <div className="glass-card rounded-3xl p-7 sm:p-8">
          <SectionHeading
            eyebrow="Industries"
            title="Built for SME teams across high-response sectors"
            description="Placeholder categories representing the types of businesses Quest Interactive supports."
          />
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={60 * index}>
                <span className="glass-card rounded-full px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50">
                  {industry}
                </span>
              </Reveal>
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
      </Reveal>
    </section>
  );
}
