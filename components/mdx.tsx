import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2
        className={[
          "font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-3xl",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={["text-base leading-7 text-ink/75 sm:text-lg", className].filter(Boolean).join(" ")}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={[
          "space-y-3 rounded-board border-2 border-dashed border-ink/25 bg-paper p-5 text-sm leading-6 text-ink/75 sm:text-base",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={[
          "flex gap-3 marker:hidden before:mt-1 before:h-2.5 before:w-2.5 before:shrink-0 before:rotate-45 before:bg-acid before:outline before:outline-2 before:-outline-offset-1 before:outline-ink before:content-['']",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong className={["font-bold text-ink", className].filter(Boolean).join(" ")} {...props} />
    ),
    ...components,
  };
}
