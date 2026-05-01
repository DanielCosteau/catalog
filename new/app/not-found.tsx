import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.32em] text-primary/90">404</p>
      <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl">Страница не найдена</h1>
      <p className="mt-5 text-base leading-7 text-mist/80">
        Возможно, раздел ещё не опубликован или ссылка ведёт на устаревший маршрут внутри демо-каталога.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white transition hover:bg-white/14"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
