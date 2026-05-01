import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { BrandCard } from "@/components/brand-card";
import { getBrandsByIndustry, getIndustries, getIndustryBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getIndustries().map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return {
    title: industry.h1,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const brands = getBrandsByIndustry(industry.slug);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist/72 transition hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-glow lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/90">Industry page</p>
          <h1 className="max-w-3xl font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
            {industry.h1}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-mist/82 sm:text-lg">{industry.summary}</p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
              {industry.stats}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
              {industry.strapline}
            </span>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-highlight">Почему это важно</p>
          <p className="mt-4 text-base leading-7 text-mist/80">{industry.spotlight}</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 text-highlight" />
              <p className="text-sm leading-6 text-mist/76">Фильтр по статусу верификации остаётся ключевым для доверия.</p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowUpRight className="mt-1 h-5 w-5 text-primary" />
              <p className="text-sm leading-6 text-mist/76">
                Страница категории остаётся SEO-видимой и ведёт к карточкам брендов без лишних шагов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/90">Selected profiles</p>
            <h2 className="mt-4 font-display text-4xl text-white">Бренды категории</h2>
          </div>
          <Link href="/registry" className="text-sm text-mist/70 transition hover:text-white">
            Изучить требования к реестру
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </section>
    </div>
  );
}
