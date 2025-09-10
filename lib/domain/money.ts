// Money as integer cents to avoid float errors
export type MoneyCents = number; // could switch to bigint later

export function toCents(input: number | string): MoneyCents {
  if (typeof input === "number") return Math.round(input * 100);
  // Normalize weird spaces and currency symbols
  const s = input
    .replace(/[^\d\-.,() ]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  // Handle negatives that are wrapped in parentheses: (123.45)
  const neg = /^\(.*\)$/.test(s);
  const core = s.replace(/[(),]/g, "");
  const n = Number(core);
  if (Number.isNaN(n)) return 0;
  const cents = Math.round(n * 100);
  return neg ? -Math.abs(cents) : cents;
}

export function fromCents(cents: MoneyCents): number {
  return cents / 100;
}

export function formatUSD(cents: MoneyCents): string {
  const n = fromCents(cents);
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export const add = (a: MoneyCents, b: MoneyCents) => a + b;
export const sub = (a: MoneyCents, b: MoneyCents) => a - b;
