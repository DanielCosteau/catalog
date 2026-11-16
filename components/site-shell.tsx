import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { getSiteConfig } from "@/lib/content";

const navigation = [
  { href: "#catalog", label: "Каталог" },
  { href: "/registry", label: "Реестр" },
  { href: "#audience", label: "Аудитория" },
  { href: "#workflow", label: "Контур" },
];

const site = getSiteConfig();

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Верхняя hazard-полоса в духе streetwear-маркировки */}
      <div className="relative overflow-hidden border-b border-ink bg-ink px-4 py-2.5">
        <div className="stripe-band absolute inset-0 opacity-[0.12]" />
        <p className="relative text-center tech-label text-acid">
          {site.region} · официальная витрина креативных брендов · реестр №64 · verified only
        </p>
      </div>

      <header className="sticky top-0 z-30 border-b-2 border-ink bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink bg-acid font-display text-base font-extrabold shadow-hard-sm transition group-hover:shadow-none">
              64
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-extrabold uppercase tracking-tight">
                {site.shortName}
              </span>
              <span className="block tech-label text-mute">Regional brand registry</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-xs font-bold uppercase tracking-[0.18em] text-ink/70 transition hover:text-ink"
              >
                <span className="mr-1.5 text-[10px] text-neon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-acid transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#search"
              className="hidden h-11 w-11 items-center justify-center border-2 border-ink bg-card transition hover:bg-ink hover:text-paper sm:inline-flex"
              aria-label="Поиск по каталогу"
            >
              <Search className="h-4 w-4" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-acid transition hover:bg-acid hover:text-ink"
            >
              Подать заявку
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t-2 border-ink bg-ink text-paper">
        {/* Гигантская контурная надпись как на nn-creative / vitrine */}
        <div className="overflow-hidden border-b border-paper/10 px-4 pt-14 sm:px-6 lg:px-8">
          <p className="whitespace-nowrap font-display text-[16vw] font-extrabold uppercase leading-[0.85] tracking-tight text-outline lg:text-[11rem]">
            Registry 64 ✦
          </p>
        </div>

        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
          <div className="space-y-5">
            <p className="font-display text-2xl font-extrabold uppercase leading-tight">
              Каталог брендов<span className="text-acid">.</span>
            </p>
            <p className="max-w-md text-sm leading-6 text-paper/70">
              {site.name}. Витрина, официальный реестр и доверенная точка входа для брендов, покупателей и партнёров.
            </p>
            <p className="tech-label text-acid">Streetwear energy · Registry discipline</p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="tech-label text-paper/40">Разделы</p>
            <div className="space-y-2">
              <Link href="/registry" className="block text-paper/80 transition hover:text-acid">
                Реестр и право
              </Link>
              <a href="#catalog" className="block text-paper/80 transition hover:text-acid">
                Отрасли
              </a>
              <a href="#brands" className="block text-paper/80 transition hover:text-acid">
                Бренды
              </a>
              <a href="#audience" className="block text-paper/80 transition hover:text-acid">
                Персоны
              </a>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="tech-label text-paper/40">Ключевые CTA</p>
            <div className="space-y-2">
              <a href="#cta" className="block text-paper/80 transition hover:text-acid">
                Стать участником реестра
              </a>
              <a href="#catalog" className="block text-paper/80 transition hover:text-acid">
                Найти в каталоге
              </a>
              <Link href="/registry" className="block text-paper/80 transition hover:text-acid">
                Изучить регламент
              </Link>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="tech-label text-paper/40">Статус системы</p>
            <div className="space-y-2 text-paper/80">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-mint" /> Uptime 99.9%
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-acid" /> Moderation queue: open
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon" /> Demo data set
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/15 px-4 py-5 text-center tech-label text-paper/45 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} · 152-ФЗ ready · Law 63-ЗСО · Данные демонстрационные
        </div>
      </footer>
    </div>
  );
}
