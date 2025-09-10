import type { Transaction } from "./types";
import type { MoneyCents } from "./money";

export function computeTotals(rows: Transaction[]): {
  depositsCents: MoneyCents;
  withdrawalsCents: MoneyCents;
} {
  let deposits = 0,
    withdrawalsAbs = 0;
  for (const r of rows) {
    if (r.amountCents >= 0) deposits += r.amountCents;
    else withdrawalsAbs += -r.amountCents;
  }
  return { depositsCents: deposits, withdrawalsCents: withdrawalsAbs };
}
