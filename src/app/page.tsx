import { SiteFooter } from "@/components/layout/site-footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 lg:px-8">
        <HomeHero />
        <TrustBar />
        <div className="pt-10">
          <CtaBanner />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
