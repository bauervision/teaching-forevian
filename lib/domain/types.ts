import type { Category } from "./categories";
import type { MoneyCents } from "./money";

export type Transaction = {
  id: string; // unique (e.g., date+idx or hash)
  dateISO: string; // YYYY-MM-DD
  description: string;
  amountCents: MoneyCents; // signed: deposits > 0, withdrawals < 0
  category: Category;
  runningBalanceCents?: MoneyCents; // optional if parsing two-column statements
  notes?: string;
};

export type Statement = {
  id: string; // YYYY-MM
  transactions: Transaction[];
};

export type Totals = {
  depositsCents: MoneyCents;
  withdrawalsCents: MoneyCents; // absolute sum of negatives
  endingBalanceCents?: MoneyCents; // optional snapshot from statement
};
