import Link from "next/link";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import type { Brand } from "@/lib/content";
import { BrandLogo } from "@/components/brand-logo";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative flex h-full flex-col border-2 border-ink bg-card p-5 shadow-hard transition duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lift"
    >
      {/* Технический индекс карточки */}
      <span className="absolute right-4 top-4 font-display text-[10px] font-bold uppercase tracking-[0.24em] text-fog">
        №{brand.slug.slice(0, 4).toUpperCase()}
      </span>

      <div className="flex items-start gap-4 pr-16">
        <BrandLogo name={brand.name} slug={brand.slug} size="md" />
        <div className="space-y-1.5 pt-1">
          <p className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-ink">
            {brand.name}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
            {brand.tagline}
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 border-t-2 border-dashed border-line pt-4 text-sm leading-6 text-ink/70">
        {brand.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {brand.verified ? (
          <span className="inline-flex items-center gap-1.5 border-2 border-ink bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
            <BadgeCheck className="h-3.5 w-3.5" />
            Verified
          </span>
        ) : (
          <span className="border-2 border-ink bg-paper px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-mute">
            Модерация
          </span>
        )}
        <span className="border-2 border-ink bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-acid">
          {brand.city}
        </span>
        {brand.accents.slice(0, 1).map((accent) => (
          <span
            key={accent}
            className="border-2 border-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
          >
            {accent}
          </span>
        ))}
        <ArrowUpRight className="ml-auto h-5 w-5 text-fog transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
      </div>
    </Link>
  );
}
