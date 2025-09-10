import { CATEGORIES } from "../../lib/domain/categories";
import { formatUSD, toCents } from "../../lib/domain/money";

export default function Home() {
  const example = formatUSD(toCents("(123.45)")); // → -$123.45
  return (
    <main className="min-h-dvh flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Teaching Forevian</h1>
        <p className="opacity-80">Baseline deployed via Firebase Hosting</p>
        <p className="opacity-70 text-sm">
          Categories loaded: {CATEGORIES.length} • Money demo: {example}
        </p>
      </div>
    </main>
  );
}
