import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2
        className={[
          "font-display text-3xl font-semibold text-white sm:text-4xl",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={[
          "text-base leading-7 text-mist/88 sm:text-lg",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={[
          "space-y-3 text-sm leading-6 text-mist/80 sm:text-base",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={["flex gap-3", className].filter(Boolean).join(" ")} {...props} />
    ),
    strong: ({ className, ...props }) => (
      <strong className={["font-semibold text-white", className].filter(Boolean).join(" ")} {...props} />
    ),
    ...components,
  };
}
