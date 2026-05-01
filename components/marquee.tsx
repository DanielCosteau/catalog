export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 py-4">
      <div className="flex min-w-max animate-marquee gap-6 text-sm uppercase tracking-[0.26em] text-mist/62">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-6">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
