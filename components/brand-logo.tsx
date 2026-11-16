const palette = [
  { bg: "#FF3D2E", fg: "#101010" },
  { bg: "#D4FF3F", fg: "#101010" },
  { bg: "#3D5AFE", fg: "#FFFFFF" },
  { bg: "#00E08A", fg: "#101010" },
  { bg: "#FF8A00", fg: "#101010" },
  { bg: "#FF2E88", fg: "#FFFFFF" },
  { bg: "#101010", fg: "#D4FF3F" },
  { bg: "#8E5AF7", fg: "#FFFFFF" },
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function BrandLogo({
  name,
  slug,
  size = "md",
}: {
  name: string;
  slug?: string;
  size?: "sm" | "md" | "lg";
}) {
  const colors = palette[hashString(slug ?? name) % palette.length];
  const initials = name
    .trim()
    .split(/[\s\-*]+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");

  const dims = {
    sm: "h-12 w-12 text-base",
    md: "h-16 w-16 text-xl",
    lg: "h-24 w-24 text-3xl",
  }[size];

  return (
    <span
      className={`${dims} inline-flex shrink-0 items-center justify-center border-2 border-ink font-display font-bold uppercase leading-none tracking-tight`}
      style={{ background: colors.bg, color: colors.fg }}
      aria-hidden
    >
      {initials || name.slice(0, 2).toUpperCase()}
    </span>
  );
}
