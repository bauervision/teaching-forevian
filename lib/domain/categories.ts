// Single source of truth (includes 'Travel' per your preference)
export const CATEGORIES = [
  "Fast Food",
  "Dining",
  "Groceries",
  "Fuel",
  "Home/Utilities",
  "Insurance",
  "Entertainment",
  "Shopping",
  "Amazon",
  "Income/Payroll",
  "Transfer: Savings",
  "Transfer: Investing",
  "Rent/Mortgage",
  "Debt",
  "Impulse/Misc",
  "Doctors",
  "Memberships",
  "Subscriptions",
  "Cash Back",
  "Uncategorized",
  "Starbucks",
  "Allowance",
  "Vehicle/City Related",
  "Travel",
] as const;

export type Category = (typeof CATEGORIES)[number];
export const DEFAULT_CATEGORY: Category = "Uncategorized";

// Case-insensitive exact match to canonical; no fuzzy here (rules handle that later)
export function normalizeToCanonical(name?: string): Category {
  if (!name) return DEFAULT_CATEGORY;
  const low = name.trim().toLowerCase();
  const hit = CATEGORIES.find((c) => c.toLowerCase() === low);
  return hit ?? DEFAULT_CATEGORY;
}
