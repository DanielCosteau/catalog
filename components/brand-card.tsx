import Link from "next/link";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import type { Brand } from "@/lib/content";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-highlight/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 font-display text-xl text-white">
              {brand.name[0]}
            </span>
            <div>
              <p className="text-lg font-semibold text-white">{brand.name}</p>
              <p className="text-sm text-mist/72">{brand.city}</p>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.26em] text-highlight">{brand.status}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-mist/70">
          {brand.verified ? <BadgeCheck className="h-5 w-5 text-highlight" /> : null}
          <ArrowUpRight className="h-5 w-5 transition group-hover:text-white" />
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <p className="font-display text-3xl leading-none text-white">{brand.tagline}</p>
        <p className="text-sm leading-6 text-mist/76">{brand.summary}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {brand.accents.map((accent) => (
          <span
            key={accent}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-mist/72"
          >
            {accent}
          </span>
        ))}
      </div>
    </Link>
  );
}
