export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-mist/82 sm:text-lg">{description}</p>
    </div>
  );
}
