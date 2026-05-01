import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist/72 transition hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.05] p-8 shadow-glow lg:p-12">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary/90">{industry?.title ?? "Brand"}</p>
              <h1 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">{brand.name}</h1>
            </div>
            {brand.verified ? <BadgeCheck className="h-10 w-10 text-highlight" /> : null}
          </div>
          <p className="mt-6 max-w-2xl font-display text-3xl leading-tight text-mist">{brand.tagline}</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-mist/82 sm:text-lg">{brand.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">{brand.city}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
              {brand.status}
            </span>
            {brand.accents.map((accent) => (
              <span
                key={accent}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist/76"
              >
                {accent}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-highlight">Summary</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-mist/76">
              <p>
                <span className="font-medium text-white">Кому подходит:</span> {brand.audience}
              </p>
              <p>
                <span className="font-medium text-white">Формат сотрудничества:</span> {brand.collaboration}
              </p>
              <p>
                <span className="font-medium text-white">Краткое описание:</span> {brand.summary}
              </p>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-black/20 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-primary/90">Primary action</p>
            <a
              href={brand.websiteUrl}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-ink transition hover:translate-y-[-1px]"
            >
              {brand.websiteLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm leading-6 text-mist/70">
              В этой демо-версии карточка показывает логику UX и контента. На следующем этапе сюда можно подключить
              реальную форму контакта, ссылки и документы.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
