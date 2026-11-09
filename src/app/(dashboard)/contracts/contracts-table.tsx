"use client";

import { useMemo, useState } from "react";
import { CheckCheck, Trash2, UserPen, UserPlus } from "lucide-react";

type Contract = {
  id: number;
  name: string;
  agency: string;
  sectionLocation: string | null;
  category: string;
  startDate: string;
  endDate: string;
};

export function ContractsTable({ rows }: { rows: Contract[] }) {
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("All Agency");
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      if (name && !row.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (agency !== "All Agency" && row.agency !== agency) return false;
      if (
        category &&
        !row.category.toLowerCase().includes(category.toLowerCase())
      ) {
        return false;
      }
      if (from && new Date(row.startDate) < new Date(from)) return false;
      if (to && new Date(row.endDate) > new Date(to)) return false;
      return true;
    });
  }, [rows, name, agency, category, from, to]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search Name"
          className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
        />
        <select
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
          className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
        >
          <option>All Agency</option>
          <option>Railway</option>
        </select>
        <div className="rounded border border-dashed border-[#d1d5db] px-3 py-2 text-sm text-[#9ca3af]">
          Section/Location
        </div>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Search Category"
          className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
        />
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full whitespace-nowrap text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[12px] uppercase tracking-wide text-[#9ca3af]">
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 font-medium">Agency</th>
              <th className="px-3 py-3 font-medium">Section/Location</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium">Start Date</th>
              <th className="px-3 py-3 font-medium">End Date</th>
              <th className="px-3 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-b border-[#f3f4f6]">
                <td className="px-3 py-3 font-medium text-[#111827]">
                  {row.name}
                </td>
                <td className="px-3 py-3 text-[#374151]">{row.agency}</td>
                <td className="px-3 py-3 text-[#374151]">
                  {row.sectionLocation || ""}
                </td>
                <td className="px-3 py-3 text-[#374151]">{row.category}</td>
                <td className="px-3 py-3">
                  <span className="text-[#3b82f6]">{row.startDate}</span>
                </td>
                <td className="px-3 py-3">
                  <span className="text-[#3b82f6]">{row.endDate}</span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#16a34a] text-white hover:bg-[#15803d]"
                      aria-label="Approve"
                      title="Approve"
                    >
                      <CheckCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#eab308] text-white hover:bg-[#ca8a04]"
                      aria-label="Add user"
                      title="Add user"
                    >
                      <UserPlus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                      aria-label="Edit user"
                      title="Edit user"
                    >
                      <UserPen className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#dc2626] text-white hover:bg-[#b91c1c]"
                      aria-label="Delete"
                      title="Delete"
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
    </div>
  );
}
