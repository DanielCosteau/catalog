import type { Metadata } from "next";
import { Rubik, Unbounded } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { getSiteConfig } from "@/lib/content";

const site = getSiteConfig();

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${rubik.variable} ${unbounded.variable}`}>
      <body className="bg-paper text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
