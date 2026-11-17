import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { industries } from "./generated/industries";
import { brands } from "./generated/brands";
import { metrics } from "./generated/metrics";
import { personas } from "./generated/personas";
import { faq } from "./generated/faq";
import { timeline } from "./generated/timeline";
import { site } from "./generated/site";

export type Industry = {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  h1: string;
  spotlight: string;
  stats: string;
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  city: string;
  verified: boolean;
  status: string;
  summary: string;
  description: string;
  audience: string;
  collaboration: string;
  websiteUrl: string;
  websiteLabel: string;
  accents: string[];
};

export type Metric = {
  value: string;
  label: string;
  note: string;
};

export type Persona = {
  name: string;
  role: string;
  goal: string;
  barrier: string;
  trust: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  phase: string;
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  baseUrl: string;
  region: string;
};

function readYamlFile<T>(filename: string): T {
  const fullPath = path.join(process.cwd(), "content", "site", filename);
  const source = fs.readFileSync(fullPath, "utf8");
  return yaml.load(source) as T;
}

export function getIndustries() {
  return readYamlFile<Industry[]>("industries.yml");
export function getIndustries(): Industry[] {
  return industries as unknown as Industry[];
}

export function getIndustryBySlug(slug: string) {
  return getIndustries().find((item) => item.slug === slug);
}

export function getBrands() {
  return readYamlFile<Brand[]>("brands.yml");

export function getBrands(): Brand[] {
  return brands as unknown as Brand[];
}

export function getBrandBySlug(slug: string) {
  return getBrands().find((item) => item.slug === slug);
}

export function getBrandsByIndustry(industry: string) {
  return getBrands().filter((item) => item.industry === industry);
}

export function getMetrics() {
  return readYamlFile<Metric[]>("metrics.yml");
}

export function getPersonas() {
  return readYamlFile<Persona[]>("personas.yml");
}

export function getFaq() {
  return readYamlFile<FAQ[]>("faq.yml");
}

export function getTimeline() {
  return readYamlFile<TimelineItem[]>("timeline.yml");
}

export function getSiteConfig() {
  return readYamlFile<SiteConfig>("site.yml");

export function getMetrics(): Metric[] {
  return metrics as unknown as Metric[];
}

export function getPersonas(): Persona[] {
  return personas as unknown as Persona[];
}

export function getFaq(): FAQ[] {
  return faq as unknown as FAQ[];
}

export function getTimeline(): TimelineItem[] {
  return timeline as unknown as TimelineItem[];
}

export function getSiteConfig(): SiteConfig {
  return site as unknown as SiteConfig;
}
