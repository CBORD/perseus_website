"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type LeaderboardRow = Record<string, string>;

type LeaderboardTableProps = {
  columns: string[];
  rows: LeaderboardRow[];
};

function asNumber(value: string): number | null {
  const cleaned = value.replaceAll(",", "").trim();
  if (cleaned.length === 0) return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

export function LeaderboardTable({ columns, rows }: LeaderboardTableProps) {
  const [query, setQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("Output Reliability (%)");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const filteredRows = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();
    if (!lowerQuery) return rows;
    return rows.filter((row) => row["Run ID"]?.toLowerCase().includes(lowerQuery));
  }, [query, rows]);

  const sortedRows = useMemo(() => {
    const sorted = [...filteredRows];
    sorted.sort((a, b) => {
      const leftRaw = a[sortColumn] ?? "";
      const rightRaw = b[sortColumn] ?? "";
      const leftNumber = asNumber(leftRaw);
      const rightNumber = asNumber(rightRaw);

      if (leftNumber !== null && rightNumber !== null) {
        return sortDirection === "asc" ? leftNumber - rightNumber : rightNumber - leftNumber;
      }
      return sortDirection === "asc" ? leftRaw.localeCompare(rightRaw) : rightRaw.localeCompare(leftRaw);
    });
    return sorted;
  }, [filteredRows, sortColumn, sortDirection]);

  const topReliability = useMemo(() => {
    const values = rows.map((row) => asNumber(row["Output Reliability (%)"] ?? "")).filter((value) => value !== null);
    if (!values.length) return "N/A";
    return `${Math.max(...values).toFixed(2)}%`;
  }, [rows]);

  const fastestLatency = useMemo(() => {
    const values = rows.map((row) => asNumber(row["Avg Latency (s)"] ?? "")).filter((value) => value !== null);
    if (!values.length) return "N/A";
    return `${Math.min(...values).toFixed(2)}s`;
  }, [rows]);

  const cheapestCost = useMemo(() => {
    const values = rows.map((row) => asNumber(row["Avg Cost ($)"] ?? "")).filter((value) => value !== null);
    if (!values.length) return "N/A";
    return `$${Math.min(...values).toFixed(2)}`;
  }, [rows]);

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setSortColumn(column);
    setSortDirection("desc");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-400/14">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Best reliability</p>
          <p className="mt-2 text-2xl font-black text-white">{topReliability}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-400/14">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Fastest average latency</p>
          <p className="mt-2 text-2xl font-black text-white">{fastestLatency}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-400/14">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Lowest average cost</p>
          <p className="mt-2 text-2xl font-black text-white">{cheapestCost}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search model name..."
          className="w-full rounded-md border border-white/15 bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 md:max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleSort("Output Reliability (%)")}
            className="btn-secondary px-3 py-2 text-xs font-semibold"
          >
            Sort by reliability
          </button>
          <button
            type="button"
            onClick={() => handleSort("Avg Latency (s)")}
            className="btn-secondary px-3 py-2 text-xs font-semibold"
          >
            Sort by latency
          </button>
          <button
            type="button"
            onClick={() => handleSort("Avg Cost ($)")}
            className="btn-secondary px-3 py-2 text-xs font-semibold"
          >
            Sort by cost
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70">
        <div className="overflow-x-auto">
          <table className="min-w-[2200px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="sticky left-0 z-20 min-w-[90px] bg-slate-950/95 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Rank
                </th>
                <th className="sticky left-[90px] z-20 min-w-[300px] bg-slate-950/95 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Model
                </th>
                {columns.filter((column) => column !== "Run ID").map((column) => (
                  <th key={column} className="min-w-[150px] px-3 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <button
                      type="button"
                      onClick={() => handleSort(column)}
                      className="text-left transition-colors hover:text-cyan-200"
                    >
                      {column}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row, index) => (
                <tr key={`${row["Run ID"]}-${index}`} className="border-b border-white/5 text-slate-200 hover:bg-white/5">
                  <td className="sticky left-0 z-10 bg-slate-950/95 px-4 py-3 font-semibold text-cyan-200">{index + 1}</td>
                  <td className="sticky left-[90px] z-10 bg-slate-950/95 px-4 py-3 font-medium text-white">{row["Run ID"]}</td>
                  {columns.filter((column) => column !== "Run ID").map((column) => (
                    <td key={`${row["Run ID"]}-${column}`} className="px-3 py-3">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-400">
          Scroll horizontally to explore all analytics. Click any column header to sort.
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Turn benchmarks into production</p>
          <h3 className="mt-2 text-2xl font-black text-white">Get your API key and run your own evaluation in minutes</h3>
        </div>
        <div className="flex gap-3">
          <Link
            href="/sign-up"
            className="btn-primary px-5 py-2.5 text-center text-sm font-bold"
          >
            Create free account
          </Link>
          <Link
            href="/prof-services"
            className="btn-secondary px-5 py-2.5 text-center text-sm font-bold"
          >
            Work with our team
          </Link>
        </div>
      </div>
    </section>
  );
}
