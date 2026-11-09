"use client";

import { useMemo, useState } from "react";
import { Info, KeyRound, Trash2, UserPlus } from "lucide-react";

type Contractor = {
  id: number;
  firmName: string;
  firmType: string;
  directorName: string;
  firmContact: string;
  firmEmail: string;
};

export function ContractorsTable({ rows }: { rows: Contractor[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => row.firmName.toLowerCase().includes(q));
  }, [query, rows]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[12px] uppercase tracking-wide text-[#9ca3af]">
            <th className="px-3 py-3 font-medium">Id</th>
            <th className="px-3 py-3 font-medium">
              <div>Firm Name</div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="mt-1 w-full rounded border border-[#d1d5db] px-2 py-1 text-[12px] normal-case tracking-normal text-[#111827] outline-none focus:border-[#2563eb]"
              />
            </th>
            <th className="px-3 py-3 font-medium">Firm Type</th>
            <th className="px-3 py-3 font-medium">Director Name</th>
            <th className="px-3 py-3 font-medium">Firm Contact</th>
            <th className="px-3 py-3 font-medium">Firm Email</th>
            <th className="px-3 py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, index) => (
            <tr key={row.id} className="border-b border-[#f3f4f6]">
              <td className="px-3 py-3 text-[#374151]">{index + 1}</td>
              <td className="px-3 py-3 font-semibold text-[#111827]">
                {row.firmName}
              </td>
              <td className="px-3 py-3 text-[#374151]">{row.firmType}</td>
              <td className="px-3 py-3 text-[#374151]">{row.directorName}</td>
              <td className="px-3 py-3 text-[#374151]">{row.firmContact}</td>
              <td className="px-3 py-3 text-[#374151]">{row.firmEmail}</td>
              <td className="px-3 py-3">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#2563eb] text-white"
                    aria-label="Info"
                  >
                    <Info className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#eab308] text-white"
                    aria-label="Assign user"
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#16a34a] text-white"
                    aria-label="Permissions"
                  >
                    <KeyRound className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#dc2626] text-white"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
