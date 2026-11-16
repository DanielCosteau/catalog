import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/content";

const accents = ["bg-acid", "bg-electric text-paper", "bg-neon text-paper", "bg-mint", "bg-punch text-paper"];

export function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const accent = accents[index % accents.length];

  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group relative flex h-full flex-col justify-between border-2 border-ink bg-card p-5 shadow-hard transition duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lift"
    >
      {/* Крупный номер отрасли в духе streetwear-принтов */}
      <span className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-[5.5rem] font-extrabold leading-none text-line transition group-hover:text-acid">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative space-y-4">
        <div className={`inline-flex border-2 border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${accent}`}>
          {industry.stats}
        </div>
        <div className="space-y-2 pt-2">
          <h3 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink">
            {industry.title}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-mute">{industry.strapline}</p>
          <p className="text-sm leading-6 text-ink/70">{industry.summary}</p>
        </div>
      </div>
      <div className="relative mt-6 flex items-end justify-between gap-4 border-t-2 border-dashed border-line pt-4">
        <p className="text-sm leading-6 text-ink/75">{industry.spotlight}</p>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-fog transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
      </div>
    </Link>
  );
}
