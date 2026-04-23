import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import { site } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Contact"
          title="Ready to stop missing leads?"
          description="Most clients are live within 7 days. Share your business details and we will map an automation plan for your inquiry flow."
        />

        <section className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            className="animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-slate-800/75 p-7"
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200">
                Full name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-cyan-100/25 bg-slate-900/90 px-3 py-2.5 text-sm text-white outline-none ring-cyan-200 transition focus:ring"
                />
              </label>
              <label className="text-sm text-slate-200">
                Business name
                <input
                  name="company"
                  required
                  className="mt-2 w-full rounded-xl border border-cyan-100/25 bg-slate-900/90 px-3 py-2.5 text-sm text-white outline-none ring-cyan-200 transition focus:ring"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-cyan-100/25 bg-slate-900/90 px-3 py-2.5 text-sm text-white outline-none ring-cyan-200 transition focus:ring"
                />
              </label>
              <label className="text-sm text-slate-200">
                Phone / WhatsApp
                <input
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-cyan-100/25 bg-slate-900/90 px-3 py-2.5 text-sm text-white outline-none ring-cyan-200 transition focus:ring"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-200">
              Current lead handling challenge
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-cyan-100/25 bg-slate-900/90 px-3 py-2.5 text-sm text-white outline-none ring-cyan-200 transition focus:ring"
                placeholder="Tell us about response delays, missed inquiries, or qualification bottlenecks."
              />
            </label>

            <button
              type="submit"
              className="mt-5 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Request Demo
            </button>
          </form>

          <aside className="space-y-5 animate-fade-in-up rounded-3xl border border-cyan-100/20 bg-slate-800/75 p-7">
            <h2 className="text-xl font-semibold text-white">Talk to Quest Interactive</h2>
            <p className="text-sm text-slate-300">
              Prefer WhatsApp? Start a conversation and we will walk you through a live demo flow.
            </p>
            <Link
              href={site.whatsappLink}
              className="inline-block rounded-full border border-cyan-100/40 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:text-slate-950"
            >
              Message us on WhatsApp
            </Link>
            <p className="text-sm text-slate-200">Email: hello@questinteractive.example</p>
            <p className="text-sm text-slate-200">Phone: +254 700 000 000</p>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
