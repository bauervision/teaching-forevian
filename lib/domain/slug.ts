import { CATEGORIES, type Category, DEFAULT_CATEGORY } from "./categories";

// kebab-case slugs for stable URLs/ids
export function catToSlug(c: Category): string {
  return c
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const SLUG_TO_CAT: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [catToSlug(c), c])
);

export function slugToCat(slug?: string): Category {
  if (!slug) return DEFAULT_CATEGORY;
  return SLUG_TO_CAT[slug] ?? DEFAULT_CATEGORY;
}
