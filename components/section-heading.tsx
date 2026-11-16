export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <p
        className={`inline-flex items-center gap-2.5 border-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] shadow-hard-sm ${
          dark
            ? "border-paper/30 bg-paper/5 text-acid"
            : "border-ink bg-card text-ink"
        }`}
      >
        <span className="h-2 w-2 rotate-45 bg-neon" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-2xl text-base leading-7 sm:text-lg ${
          dark ? "text-paper/65" : "text-mute"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
