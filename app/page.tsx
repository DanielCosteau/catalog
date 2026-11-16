import Link from "next/link";
import { ArrowRight, BadgeCheck, ScrollText, ShieldCheck, Sparkles } from "lucide-react";
import { BrandCard } from "@/components/brand-card";
import { IndustryCard } from "@/components/industry-card";
import { Marquee } from "@/components/marquee";
import { SectionHeading } from "@/components/section-heading";
import Manifesto from "@/content/pages/manifesto.mdx";
import {
  getBrands,
  getFaq,
  getIndustries,
  getMetrics,
  getPersonas,
  getTimeline,
} from "@/lib/content";

const marqueeItems = [
  "Official registry",
  "Creative economy",
  "Verified brands",
  "Editorial catalog",
  "Law 63-ЗСО",
  "152-ФЗ ready",
  "Mobile first",
  "Brand showcase",
];

const marqueeItemsSecond = [
  "Streetwear energy",
  "Registry discipline",
  "Saratov region",
  "Digital storefront",
  "Content governance",
  "Trust by design",
];

export default function HomePage() {
  const industries = getIndustries();
  const brands = getBrands();
  const metrics = getMetrics();
  const personas = getPersonas();
  const faq = getFaq();
  const timeline = getTimeline();

  return (
    <div>
      {/* HERO — чёрная уличная витрина с acid-акцентом */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="hero-grid-lines absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-acid/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-electric/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border-2 border-paper/20 bg-paper/5 px-4 py-2">
              <span className="h-2 w-2 rotate-45 bg-acid" />
              <span className="tech-label text-paper/80">
                Витрина креативной экономики Саратовской области
              </span>
            </div>

            <div className="space-y-6">
              <p className="tech-label text-acid">
                Brand studio energy × public-interest digital platform
              </p>
              <h1 className="max-w-5xl font-display text-[3.4rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-[5rem] lg:text-[6.6rem]">
                Каталог брендов,
                <span className="block">
                  которому <span className="bg-acid px-3 text-ink">верят.</span>
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-paper/70 sm:text-lg">
                Платформа объединяет локальные бренды, покупателей, партнёров и государственный контур в одной
                структуре: каталог, официальный статус, сценарии верификации и выразительная digital-витрина.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-3 border-2 border-acid bg-acid px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:shadow-hard-acid"
              >
                Найти в каталоге
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-3 border-2 border-paper/30 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-paper transition hover:border-acid hover:text-acid"
              >
                Стать участником реестра
              </a>
            </div>

            {/* Бегущая строка метрик внутри hero */}
            <div className="grid gap-px border-2 border-paper/15 bg-paper/15 sm:grid-cols-4">
              {metrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="bg-ink p-5">
                  <p className="font-display text-3xl font-extrabold text-acid">{metric.value}</p>
                  <p className="mt-2 tech-label text-paper/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — «бирка» товара как на streetwear-дропе */}
          <div className="relative hidden lg:block">
            <div className="absolute -left-6 top-4 z-10 rotate-[-6deg] border-2 border-ink bg-neon px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-paper shadow-hard-sm">
              Drop 01 / 2026
            </div>
            <div className="clip-tag relative h-full border-2 border-paper/25 bg-paper/[0.04] p-7 backdrop-blur">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="tech-label text-acid">North Star</p>
                  <p className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-paper">
                    Verified brand cards
                  </p>
                </div>
                <BadgeCheck className="h-10 w-10 shrink-0 text-acid" />
              </div>
              <p className="max-w-md text-sm leading-7 text-paper/70">
                Главное измерение успеха — число активных карточек брендов с подтверждённым статусом, корректными
                данными и действующим согласием на публикацию.
              </p>

              <div className="mt-8 space-y-3 border-t-2 border-dashed border-paper/20 pt-6">
                {[
                  ["Статус", "Верификация 64 региона"],
                  ["Права", "152-ФЗ · согласие в UX"],
                  ["Контур", "Премодерация + регламент"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="tech-label text-paper/40">{k}</span>
                    <span className="text-right font-semibold text-paper/85">{v}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 whitespace-nowrap font-display text-4xl font-extrabold uppercase leading-none text-outline">
                Registry 64 ✦ Saratov ✦
              </p>
            </div>
          </div>
        </div>

        <Marquee items={marqueeItems} dark />
      </section>

      {/* ОТРАСЛИ */}
      <section id="catalog" className="paper-grid-lines mx-auto max-w-[1400px] space-y-12 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Отраслевой каталог, собранный как премиальная витрина"
          description="Структура сайта строится из поисковых интентов, сценариев аудитории и доверительных маркеров. Каждая отрасль получает свою страницу, SEO-логику и понятный путь к карточке бренда."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.slug} industry={industry} index={index} />
          ))}
        </div>
      </section>

      {/* БRENDS */}
      <section id="brands" className="mx-auto max-w-[1400px] space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured brands"
            title="Карточки брендов как кейсы, а не как скучный реестр"
            description="Формат карточки держит баланс между визуальной выразительностью и формальной верификацией: статус, отрасль, коллаборации, контакты и аккуратный юридический слой."
          />
          <Link
            href="/registry"
            className="border-2 border-ink bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] shadow-hard-sm transition hover:bg-ink hover:text-acid"
          >
            Требования к реестру →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </section>

      <Marquee items={marqueeItemsSecond} reverse={false} />

      {/* MANIFESTO */}
      <section id="registry" className="mx-auto grid max-w-[1400px] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Manifesto"
            title="Публичный дизайн с государственным уровнем доверия"
            description="Сайт отвечает не только за красивую витрину. Он превращает региональную политику развития креативных индустрий в понятный цифровой опыт."
          />
          <Link
            href="/registry"
            className="inline-flex items-center gap-3 border-2 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-acid transition hover:bg-acid hover:text-ink"
          >
            Перейти в раздел реестра
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="border-2 border-ink bg-card p-6 shadow-hard sm:p-8">
          <div className="prose-registry space-y-6">
            <Manifesto />
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="bg-ink py-20 text-paper">
        <div className="mx-auto max-w-[1400px] space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Audience"
            title="Каждый сегмент получает свой мотив и свой CTA"
            description="Логика сценариев строится не только вокруг бизнеса. Каталог одновременно работает для покупателей, инвесторов, модераторов и авторов брендов."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {personas.map((persona, index) => (
              <div
                key={persona.name}
                className="group border-2 border-paper/20 bg-paper/[0.04] p-6 transition hover:border-acid hover:bg-paper/[0.07]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="tech-label text-acid">{persona.role}</p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">
                      {persona.name}
                    </h3>
                  </div>
                  <Sparkles className="h-6 w-6 shrink-0 text-acid transition group-hover:rotate-12" />
                </div>
                <div className="mt-6 space-y-3 border-t-2 border-dashed border-paper/15 pt-5 text-sm leading-6">
                  <p className="flex gap-3">
                    <span className="tech-label shrink-0 pt-1 text-paper/40">Цель</span>
                    <span className="text-paper/80">{persona.goal}</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="tech-label shrink-0 pt-1 text-paper/40">Барьер</span>
                    <span className="text-paper/80">{persona.barrier}</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="tech-label shrink-0 pt-1 text-paper/40">Доверие</span>
                    <span className="text-paper/80">{persona.trust}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mx-auto max-w-[1400px] space-y-12 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="От SEO до релиза: производственный контур как часть продукта"
          description="Регламент из документов не прячется в PDF на финальном этапе. Он превращается в понятную архитектуру сайта, контента и публикации."
        />
        <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item.phase} className="group bg-card p-6 transition hover:bg-acid">
              <div className="flex items-baseline justify-between">
                <p className="tech-label text-neon">{item.phase}</p>
                <span className="font-display text-3xl font-extrabold text-line transition group-hover:text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="border-2 border-ink bg-mint p-6 shadow-hard">
            <ShieldCheck className="h-8 w-8" />
            <h3 className="mt-5 font-display text-lg font-extrabold uppercase">152-ФЗ inside the UX</h3>
            <p className="mt-3 text-sm leading-6 text-ink/80">
              Согласия на обработку и распространение данных заложены в архитектуру формы и статусов, а не оставлены
              только в footer.
            </p>
          </div>
          <div className="border-2 border-ink bg-electric p-6 text-paper shadow-hard">
            <ScrollText className="h-8 w-8" />
            <h3 className="mt-5 font-display text-lg font-extrabold uppercase">Content governance</h3>
            <p className="mt-3 text-sm leading-6 text-paper/85">
              Единые правила для логотипов, alt-текстов, категорий и прав на контент помогают сохранить качество
              витрины на масштабе.
            </p>
          </div>
          <div className="border-2 border-ink bg-acid p-6 shadow-hard">
            <BadgeCheck className="h-8 w-8" />
            <h3 className="mt-5 font-display text-lg font-extrabold uppercase">Registry signal</h3>
            <p className="mt-3 text-sm leading-6 text-ink/80">
              Отметка верификации становится главным визуальным маркером доверия для покупателей, партнёров и самих
              брендов.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1400px] space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Ключевые вопросы о платформе"
          description="Смысл сайта — быстро снять барьеры и объяснить, что это за инструмент: для кого, зачем и как он работает."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {faq.map((item, index) => (
            <details
              key={item.question}
              className="group border-2 border-ink bg-card p-6 shadow-hard-sm open:shadow-hard"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-base font-extrabold uppercase leading-snug tracking-tight">
                  <span className="mr-2 text-neon">{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                </span>
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border-2 border-ink bg-paper font-display text-sm font-bold transition group-open:bg-acid">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t-2 border-dashed border-line pt-4 text-sm leading-7 text-ink/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden border-2 border-ink bg-ink p-8 text-paper shadow-hard sm:p-10 lg:p-14">
          <div className="stripe-band absolute inset-x-0 top-0 h-3 opacity-60" />
          <div className="stripe-band absolute inset-x-0 bottom-0 h-3 opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="tech-label text-acid">Call to action</p>
              <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Оформить видимый, надёжный вход в{" "}
                <span className="bg-acid px-2 text-ink">креативную экономику</span> региона.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">
                Для первой версии сайта уже собраны ключевые отрасли, бренд-карточки, контентный манифест, legal-слой и
                визуальная система. Дальше сюда можно подключать реальные данные, CMS и back-office.
              </p>
            </div>
            <div className="border-2 border-paper/25 bg-paper/[0.04] p-6">
              <p className="tech-label text-acid">Primary actions</p>
              <div className="mt-6 grid gap-4">
                <a
                  href="#catalog"
                  className="border-2 border-acid bg-acid px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5"
                >
                  Открыть каталог
                </a>
                <Link
                  href="/registry"
                  className="border-2 border-paper/30 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-paper transition hover:border-acid hover:text-acid"
                >
                  Перейти в реестр
                </Link>
              </div>
              <p className="mt-6 text-sm leading-6 text-paper/60">
                В этой версии кнопки ведут по сайту-концепту. Формы и backend можно подключить следующим этапом без
                переделки визуальной системы.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
