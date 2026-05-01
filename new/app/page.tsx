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

export default function HomePage() {
  const industries = getIndustries();
  const brands = getBrands();
  const metrics = getMetrics();
  const personas = getPersonas();
  const faq = getFaq();
  const timeline = getTimeline();

  return (
    <div>
      <section className="editorial-grid relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-28">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-mist/72">
              <span className="h-2 w-2 rounded-full bg-highlight" />
              Витрина креативной экономики Саратовской области
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-sm uppercase tracking-[0.32em] text-primary/90">
                Brand studio energy for a public-interest digital platform
              </p>
              <h1 className="max-w-5xl font-display text-[4.2rem] leading-[0.92] tracking-[-0.04em] text-white sm:text-[5.6rem] lg:text-[7.8rem]">
                Каталог брендов,
                <span className="block text-mist">которому верят.</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-mist/84 sm:text-xl">
                Платформа объединяет локальные бренды, покупателей, партнёров и государственный контур в одной
                структуре: каталог, официальный статус, сценарии верификации и выразительная digital-витрина.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:translate-y-[-1px]"
              >
                Найти в каталоге
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/14"
              >
                Стать участником реестра
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-6 hidden h-40 w-40 rounded-full bg-primary/20 blur-3xl lg:block" />
            <div className="absolute -right-10 bottom-4 hidden h-40 w-40 rounded-full bg-highlight/20 blur-3xl lg:block" />
            <div className="animate-float rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-glow backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-[26px] border border-white/10 bg-black/20 p-6">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/90">North Star</p>
                      <p className="mt-3 font-display text-4xl text-white">Verified brand cards</p>
                    </div>
                    <BadgeCheck className="h-10 w-10 text-highlight" />
                  </div>
                  <p className="max-w-md text-sm leading-6 text-mist/78">
                    Главное измерение успеха — число активных карточек брендов с подтверждённым статусом, корректными
                    данными и действующим согласием на публикацию.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="font-display text-4xl text-white">{metric.value}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.24em] text-primary/90">{metric.label}</p>
                      <p className="mt-3 text-sm leading-6 text-mist/72">{metric.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Marquee items={marqueeItems} />
      </section>

      <section id="catalog" className="mx-auto max-w-7xl space-y-12 px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Industries"
          title="Отраслевой каталог, собранный как премиальная витрина"
          description="Структура сайта строится из поисковых интентов, сценариев аудитории и доверительных маркеров. Каждая отрасль получает свою страницу, SEO-логику и понятный путь к карточке бренда."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 py-14 lg:px-10">
        <SectionHeading
          eyebrow="Featured brands"
          title="Карточки брендов как кейсы, а не как скучный реестр"
          description="Формат карточки держит баланс между визуальной выразительностью и формальной верификацией: статус, отрасль, коллаборации, контакты и аккуратный юридический слой."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </section>

      <section id="registry" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Manifesto"
            title="Публичный дизайн с государственным уровнем доверия"
            description="Сайт отвечает не только за красивую витрину. Он превращает региональную политику развития креативных индустрий в понятный цифровой опыт."
          />
          <Link
            href="/registry"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white transition hover:bg-white/14"
          >
            Перейти в раздел реестра
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-glow">
          <div className="space-y-8">
            <Manifesto />
          </div>
        </div>
      </section>

      <section id="audience" className="mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-10">
        <SectionHeading
          eyebrow="Audience"
          title="Каждый сегмент получает свой мотив и свой CTA"
          description="Логика сценариев строится не только вокруг бизнеса. Каталог одновременно работает для покупателей, инвесторов, модераторов и авторов брендов."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {personas.map((persona, index) => (
            <div
              key={persona.name}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary/90">{persona.role}</p>
                  <h3 className="mt-3 font-display text-3xl text-white">{persona.name}</h3>
                </div>
                <Sparkles className="h-6 w-6 text-highlight" />
              </div>
              <div className="mt-6 space-y-4 text-sm leading-6 text-mist/76">
                <p>
                  <span className="font-medium text-white">Цель:</span> {persona.goal}
                </p>
                <p>
                  <span className="font-medium text-white">Барьер:</span> {persona.barrier}
                </p>
                <p>
                  <span className="font-medium text-white">Доверие:</span> {persona.trust}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-10">
        <SectionHeading
          eyebrow="Workflow"
          title="От SEO до релиза: производственный контур как часть продукта"
          description="Регламент из документов не прячется в PDF на финальном этапе. Он превращается в понятную архитектуру сайта, контента и публикации."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.phase} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/90">{item.phase}</p>
              <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-mist/76">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <ShieldCheck className="h-8 w-8 text-highlight" />
            <h3 className="mt-5 text-xl font-semibold text-white">152-ФЗ inside the UX</h3>
            <p className="mt-3 text-sm leading-6 text-mist/76">
              Согласия на обработку и распространение данных заложены в архитектуру формы и статусов, а не оставлены
              только в footer.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <ScrollText className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl font-semibold text-white">Content governance</h3>
            <p className="mt-3 text-sm leading-6 text-mist/76">
              Единые правила для логотипов, alt-текстов, категорий и прав на контент помогают сохранить качество
              витрины на масштабе.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <BadgeCheck className="h-8 w-8 text-amber" />
            <h3 className="mt-5 text-xl font-semibold text-white">Registry signal</h3>
            <p className="mt-3 text-sm leading-6 text-mist/76">
              Отметка верификации становится главным визуальным маркером доверия для покупателей, партнёров и самих
              брендов.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Ключевые вопросы о платформе"
          description="Смысл сайта — быстро снять барьеры и объяснить, что это за инструмент: для кого, зачем и как он работает."
        />
        <div className="grid gap-4">
          {faq.map((item) => (
            <div key={item.question} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-mist/76">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:pb-24">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-primary/20 via-white/[0.07] to-highlight/10 p-8 shadow-glow sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_25%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.32em] text-white/72">Call to action</p>
              <h2 className="max-w-3xl font-display text-5xl leading-none text-white sm:text-6xl">
                Оформить видимый, надёжный и расширяемый вход в креативную экономику региона.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-mist/86 sm:text-lg">
                Для первой версии сайта уже собраны ключевые отрасли, бренд-карточки, контентный манифест, legal-слой и
                визуальная система. Дальше сюда можно подключать реальные данные, CMS и back-office.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/90">Primary actions</p>
              <div className="mt-6 grid gap-4">
                <a
                  href="#catalog"
                  className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-medium text-ink transition hover:translate-y-[-1px]"
                >
                  Открыть каталог
                </a>
                <Link
                  href="/registry"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-white/16"
                >
                  Перейти в реестр
                </Link>
              </div>
              <p className="mt-6 text-sm leading-6 text-mist/72">
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
