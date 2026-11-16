import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-extrabold uppercase text-ink sm:text-8xl">
        4<span className="bg-acid px-2">0</span>4
      </p>
      <h1 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
        Страница не найдена
      </h1>
      <p className="mt-5 text-base leading-7 text-mute">
        Возможно, раздел ещё не опубликован или ссылка ведёт на устаревший маршрут внутри демо-каталога.
      </p>
      <Link
        href="/"
        className="mt-8 border-2 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-acid shadow-hard-sm transition hover:bg-acid hover:text-ink"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
