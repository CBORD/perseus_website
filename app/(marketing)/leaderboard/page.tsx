import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import { LeaderboardTable } from "@/components/sections/LeaderboardTable";

type LeaderboardRow = Record<string, string>;

function parseCsv(csv: string): { columns: string[]; rows: LeaderboardRow[] } {
  const lines = csv
    .replace("\uFEFF", "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return { columns: [], rows: [] };

  const columns = lines[0].split(",").map((column) => column.trim());
  const rows = lines.slice(1).map((line) => {
    const values = line.split(",");
    const row: LeaderboardRow = {};
    columns.forEach((column, index) => {
      row[column] = values[index]?.trim() ?? "";
    });
    return row;
  });

  return { columns, rows };
}

async function getLeaderboardData() {
  const csvPath = path.join(process.cwd(), "content/leaderboard/T2G_leaderboard.csv");
  const csv = await fs.readFile(csvPath, "utf8");
  return parseCsv(csv);
}

export default async function LeaderboardPage() {
  const { columns, rows } = await getLeaderboardData();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:pt-20">
        <div className="space-panel relative overflow-hidden rounded-2xl p-8 md:p-12">
          <div className="relative">
            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Text-to-Graph benchmark
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Perseus Leaderboard
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              Compare reliability, extraction quality, hallucination rates, latency, and cost across all reviewed
              models. Explore the full analytics table and identify the best model profile for your workload.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className="btn-primary px-5 py-2.5 text-sm font-bold"
              >
                Start with Perseus
              </Link>
              <Link
                href="/features"
                className="btn-secondary px-5 py-2.5 text-sm font-bold"
              >
                Explore platform features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeaderboardTable columns={columns} rows={rows} />
    </>
  );
}
