import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { getBrandBySlug, getBrands, getIndustryBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return {};
  }

  return {
    title: `${brand.name} — каталог брендов`,
    description: brand.summary,
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const industry = getIndustryBySlug(brand.industry);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 border-2 border-ink bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-hard-sm transition hover:bg-ink hover:text-acid"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* «Бирка» бренда — как товарный лейбл на streetwear-дропе */}
        <div className="relative border-2 border-ink bg-card p-6 shadow-hard sm:p-10">
          <div className="stripe-band absolute inset-x-0 top-0 h-2.5" />
          <div className="flex items-start justify-between gap-5 pt-4">
            <div className="space-y-4">
              <p className="tech-label text-neon">{industry?.title ?? "Brand"}</p>
              <h1 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                {brand.name}
              </h1>
            </div>
            <BrandLogo name={brand.name} slug={brand.slug} size="lg" />
          </div>

          {brand.verified ? (
            <span className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-mint px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-hard-sm">
              <BadgeCheck className="h-4 w-4" />
              Верифицированный участник
            </span>
          ) : null}

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-mute">{brand.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">{brand.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="border-2 border-ink bg-ink px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-acid">
              {brand.city}
            </span>
            <span className="border-2 border-ink px-4 py-2 text-sm font-bold uppercase tracking-[0.12em]">
              {brand.status}
            </span>
            {brand.accents.map((accent) => (
              <span
                key={accent}
                className="border-2 border-ink bg-paper px-4 py-2 text-sm font-medium text-mute"
              >
                {accent}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="border-2 border-ink bg-card p-6 shadow-hard">
            <p className="tech-label text-mute">Summary</p>
            <div className="mt-5 space-y-4 border-t-2 border-dashed border-line pt-5 text-sm leading-7 text-ink/75">
              <p>
                <span className="font-bold text-ink">Кому подходит:</span> {brand.audience}
              </p>
              <p>
                <span className="font-bold text-ink">Формат сотрудничества:</span> {brand.collaboration}
              </p>
              <p>
                <span className="font-bold text-ink">Краткое описание:</span> {brand.summary}
              </p>
            </div>
          </div>
          <div className="border-2 border-ink bg-ink p-6 text-paper shadow-hard">
            <p className="tech-label text-acid">Primary action</p>
            <a
              href={brand.websiteUrl}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 border-2 border-acid bg-acid px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:shadow-hard-paper"
            >
              {brand.websiteLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm leading-6 text-paper/65">
              В этой демо-версии карточка показывает логику UX и контента. На следующем этапе сюда можно подключить
              реальную форму контакта, ссылки и документы.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
