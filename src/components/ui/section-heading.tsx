type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-slate-200">{description}</p> : null}
    </div>
  );
}
