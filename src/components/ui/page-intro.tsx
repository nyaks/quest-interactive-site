type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl animate-fade-in-up pb-12 pt-14 sm:pb-14 sm:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{eyebrow}</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">{description}</p>
    </div>
  );
}
