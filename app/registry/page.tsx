import Link from "next/link";
import { ArrowLeft, LockKeyhole, ShieldCheck, Waypoints } from "lucide-react";
import Registry from "@/content/pages/registry.mdx";
import { getMetrics, getTimeline } from "@/lib/content";

export const metadata = {
  title: "Реестр и правовой контур",
  description:
    "Верификация брендов, согласия на обработку данных, публикационный workflow и контентный регламент платформы.",
};

export default function RegistryPage() {
  const metrics = getMetrics();
  const timeline = getTimeline();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist/72 transition hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/90">Registry / compliance</p>
          <h1 className="font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
            Верификация, право и публикационный контур
          </h1>
          <p className="max-w-xl text-base leading-8 text-mist/82 sm:text-lg">
            Этот раздел показывает, как проект соединяет визуальную витрину с государственным уровнем доверия:
            модерация, права на контент, персональные данные, статус участника реестра и эксплуатационный чек-лист.
          </p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-glow">
          <Registry />
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
          <ShieldCheck className="h-8 w-8 text-highlight" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Consent orchestration</h2>
          <p className="mt-4 text-sm leading-6 text-mist/76">
            Согласия на обработку, публикацию и отзыв данных должны быть разнесены по сценариям и иметь прозрачный
            журнал действий.
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
          <LockKeyhole className="h-8 w-8 text-primary" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Content rights</h2>
          <p className="mt-4 text-sm leading-6 text-mist/76">
            Логотипы, фотографии, тексты и документы должны иметь понятное основание использования и статус проверки.
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
          <Waypoints className="h-8 w-8 text-amber" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Release discipline</h2>
          <p className="mt-4 text-sm leading-6 text-mist/76">
            До релиза фиксируются контент, права, метрика, DNS, SSL, резервные копии и версия в репозитории.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/90">Key targets</p>
          <div className="mt-6 grid gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="font-display text-4xl text-white">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-primary/90">{metric.label}</p>
                <p className="mt-3 text-sm leading-6 text-mist/76">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/90">Release contour</p>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <div key={item.phase} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/90">{item.phase}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist/76">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
