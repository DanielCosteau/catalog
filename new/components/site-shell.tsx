import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getSiteConfig } from "@/lib/content";

const navigation = [
  { href: "#catalog", label: "Каталог" },
  { href: "#registry", label: "Реестр" },
  { href: "#audience", label: "Аудитория" },
  { href: "#workflow", label: "Контур" },
];

const site = getSiteConfig();

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(115,169,255,0.26),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(126,245,213,0.12),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(255,187,118,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-mist/90">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-lg tracking-normal text-white">
              64
            </span>
            {site.shortName}
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-mist/80 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/16"
          >
            Подать заявку
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>
      <main className="relative">{children}</main>
      <footer className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-mist/70 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
          <div className="space-y-4">
            <p className="max-w-xl text-base text-mist/84">
              {site.name}. Цифровая витрина, официальный реестр и доверенная точка входа для брендов, покупателей и
              партнёров.
            </p>
            <p className="uppercase tracking-[0.24em] text-white/45">Compliance first. Editorial by design.</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-white">Разделы</p>
            <div className="space-y-2">
              <Link href="/registry" className="block transition hover:text-white">
                Реестр и право
              </Link>
              <a href="#catalog" className="block transition hover:text-white">
                Отрасли
              </a>
              <a href="#audience" className="block transition hover:text-white">
                Персоны
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-white">Ключевые CTA</p>
            <div className="space-y-2">
              <a href="#cta" className="block transition hover:text-white">
                Стать участником реестра
              </a>
              <a href="#catalog" className="block transition hover:text-white">
                Найти в каталоге
              </a>
              <Link href="/registry" className="block transition hover:text-white">
                Изучить регламент
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
