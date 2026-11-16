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
    <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 border-2 border-ink bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-hard-sm transition hover:bg-ink hover:text-acid"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <p className="tech-label text-neon">Registry / compliance</p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Верификация, право<span className="bg-acid px-2">и контур</span>
          </h1>
          <p className="max-w-xl text-base leading-8 text-mute sm:text-lg">
            Этот раздел показывает, как проект соединяет визуальную витрину с государственным уровнем доверия:
            модерация, права на контент, персональные данные, статус участника реестра и эксплуатационный чек-лист.
          </p>
        </div>
        <div className="border-2 border-ink bg-card p-6 shadow-hard sm:p-8">
          <Registry />
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="border-2 border-ink bg-mint p-6 shadow-hard">
          <ShieldCheck className="h-8 w-8" />
          <h2 className="mt-4 font-display text-lg font-extrabold uppercase">Consent orchestration</h2>
          <p className="mt-3 text-sm leading-6 text-ink/80">
            Согласия на обработку, публикацию и отзыв данных должны быть разнесены по сценариям и иметь прозрачный
            журнал действий.
          </p>
        </div>
        <div className="border-2 border-ink bg-electric p-6 text-paper shadow-hard">
          <LockKeyhole className="h-8 w-8" />
          <h2 className="mt-4 font-display text-lg font-extrabold uppercase">Content rights</h2>
          <p className="mt-3 text-sm leading-6 text-paper/85">
            Логотипы, фотографии, тексты и документы должны иметь понятное основание использования и статус проверки.
          </p>
        </div>
        <div className="border-2 border-ink bg-acid p-6 shadow-hard">
          <Waypoints className="h-8 w-8" />
          <h2 className="mt-4 font-display text-lg font-extrabold uppercase">Release discipline</h2>
          <p className="mt-3 text-sm leading-6 text-ink/80">
            До релиза фиксируются контент, права, метрика, DNS, SSL, резервные копии и версия в репозитории.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="border-2 border-ink bg-card p-6 shadow-hard sm:p-8">
          <p className="tech-label text-mute">Key targets</p>
          <div className="mt-6 grid gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-2 border-ink/15 bg-paper p-5 transition hover:border-ink">
                <p className="font-display text-3xl font-extrabold">{metric.value}</p>
                <p className="mt-1 tech-label text-neon">{metric.label}</p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 border-ink bg-ink p-6 text-paper shadow-hard sm:p-8">
          <p className="tech-label text-acid">Release contour</p>
          <div className="mt-6 space-y-4">
            {timeline.map((item, index) => (
              <div key={item.phase} className="border-2 border-paper/20 p-5 transition hover:border-acid">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="tech-label text-acid">{item.phase}</p>
                  <span className="font-display text-xl font-extrabold text-paper/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-extrabold uppercase">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-paper/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
