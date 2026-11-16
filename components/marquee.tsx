export function Marquee({
  items,
  dark = false,
  reverse = false,
}: {
  items: string[];
  dark?: boolean;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y-2 border-ink py-3.5 ${
        dark ? "bg-ink text-paper" : "bg-acid text-ink"
      }`}
    >
      <div
        className={`flex min-w-max gap-10 whitespace-nowrap pr-10 font-display text-sm font-extrabold uppercase tracking-[0.2em] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span>{item}</span>
            <span className={dark ? "text-acid" : "text-neon"}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
