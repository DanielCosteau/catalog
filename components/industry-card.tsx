import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/content";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07]"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-mist/72">
            {industry.stats}
          </span>
          <ArrowUpRight className="h-5 w-5 text-mist/60 transition group-hover:text-white" />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-3xl text-white">{industry.title}</h3>
          <p className="text-sm uppercase tracking-[0.24em] text-primary/90">{industry.strapline}</p>
          <p className="text-sm leading-6 text-mist/76">{industry.summary}</p>
        </div>
      </div>
      <p className="mt-8 text-sm leading-6 text-white/78">{industry.spotlight}</p>
    </Link>
  );
}
