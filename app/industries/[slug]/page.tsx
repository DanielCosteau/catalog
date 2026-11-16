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
    <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 border-2 border-ink bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-hard-sm transition hover:bg-ink hover:text-acid"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 border-2 border-ink bg-card p-6 shadow-hard sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="space-y-5">
          <p className="tech-label text-neon">Industry page</p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {industry.h1}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-mute sm:text-lg">{industry.summary}</p>
          <div className="flex flex-wrap gap-3">
            <span className="border-2 border-ink bg-acid px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] shadow-hard-sm">
              {industry.stats}
            </span>
            <span className="border-2 border-ink bg-paper px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-mute">
              {industry.strapline}
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden border-2 border-ink bg-ink p-6 text-paper">
          <div className="stripe-band absolute inset-x-0 top-0 h-2 opacity-70" />
          <p className="tech-label pt-2 text-acid">Почему это важно</p>
          <p className="mt-4 text-base leading-7 text-paper/80">{industry.spotlight}</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
              <p className="text-sm leading-6 text-paper/70">
                Фильтр по статусу верификации остаётся ключевым для доверия.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-acid" />
              <p className="text-sm leading-6 text-paper/70">
                Страница категории остаётся SEO-видимой и ведёт к карточкам брендов без лишних шагов.
              </p>
            </div>
          </div>
          <p className="mt-8 select-none whitespace-nowrap font-display text-3xl font-extrabold uppercase leading-none text-outline">
            {industry.title} ✦
          </p>
        </div>
      </section>

      <section className="mt-12 space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="tech-label text-mute">Selected profiles</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Бренды категории
            </h2>
          </div>
          <Link
            href="/registry"
            className="border-2 border-ink bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] shadow-hard-sm transition hover:bg-ink hover:text-acid"
          >
            Изучить требования к реестру
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </section>
    </div>
  );
}
