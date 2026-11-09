"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, FileSpreadsheet } from "lucide-react";

type ContractReportRow = {
  id: number;
  name: string;
  agency: string;
  sectionLocation: string;
  category: string;
  startDate: string;
  endDate: string;
  licenceFeesPaidUpto: string;
};

const rows: ContractReportRow[] = [
  {
    id: 1,
    name: "M S ENTERPRISES",
    agency: "Railway",
    sectionLocation: "Anuppur",
    category: "RELAX CHAIR",
    startDate: "7/25/2026",
    endDate: "7/24/2029",
    licenceFeesPaidUpto: "10/25/2026",
  },
  {
    id: 2,
    name: "ANSARI CONSTRUCTINO",
    agency: "Railway",
    sectionLocation: "ABKP",
    category: "Pay & Use Waiting Hall",
    startDate: "7/20/2026",
    endDate: "7/19/2031",
    licenceFeesPaidUpto: "10/19/2026",
  },
  {
    id: 3,
    name: "BRIJESH SHRIVASTAVA",
    agency: "Railway",
    sectionLocation: "Bilaspur",
    category: "PARCEL LEASE",
    startDate: "7/14/2025",
    endDate: "6/4/2027",
    licenceFeesPaidUpto: "9/15/2026",
  },
  {
    id: 4,
    name: "CHITRAKOOT EXPRESS CARGO SERVICE",
    agency: "BSP DIV COMML",
    sectionLocation: "UslapurUslapur",
    category: "RCR",
    startDate: "8/1/2024",
    endDate: "7/31/2029",
    licenceFeesPaidUpto: "9/30/2026",
  },
  {
    id: 5,
    name: "K D FOODS",
    agency: "Railway",
    sectionLocation: "Bilaspur",
    category: "Refreshment Room",
    startDate: "1/1/2023",
    endDate: "12/31/2027",
    licenceFeesPaidUpto: "10/1/2026",
  },
  {
    id: 6,
    name: "Sameer Enterprises",
    agency: "Railway",
    sectionLocation: "Shahdol",
    category: "convenience store SDL",
    startDate: "3/15/2022",
    endDate: "3/14/2027",
    licenceFeesPaidUpto: "8/31/2026",
  },
  {
    id: 7,
    name: "City Parking",
    agency: "Railway",
    sectionLocation: "Korba",
    category: "Parking",
    startDate: "5/20/2021",
    endDate: "5/19/2026",
    licenceFeesPaidUpto: "9/30/2026",
  },
];

export default function ContractReportsPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("All Agency");
  const [category, setCategory] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [submitted, setSubmitted] = useState(true);

  const filtered = useMemo(() => {
    if (!submitted) return [];
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
      return true;
    });
  }, [submitted, name, agency, category]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-center font-serif text-[22px] font-bold text-[#1f2937]">
        License Fee Expired Contracts
      </h2>

      <form
        onSubmit={onSubmit}
        className="mb-4 flex flex-wrap items-end justify-between gap-3"
      >
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="mb-1 block text-xs text-[#6b7280]">From</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-[#6b7280]">To</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
          >
            Submit
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#16a34a] px-3 py-2 text-sm font-medium text-white hover:bg-[#15803d]"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Export To Excel
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-md bg-[#2563eb] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        </div>
      </form>

      <div className="mb-4 flex flex-wrap items-end gap-3 rounded-md bg-[#eef5fb] px-3 py-3">
        <div className="min-w-[150px] flex-1">
          <label className="mb-1 block text-xs text-[#6b7280]">
            Search Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search Name"
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div className="min-w-[140px]">
          <label className="mb-1 block text-xs text-[#6b7280]">Agency</label>
          <select
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          >
            <option>All Agency</option>
            <option>Railway</option>
            <option>BSP DIV COMML</option>
          </select>
        </div>
        <div className="min-w-[140px]">
          <label className="mb-1 block text-xs text-[#6b7280]">
            Section/Location
          </label>
          <div className="rounded border border-dashed border-[#cbd5e1] bg-white px-3 py-2 text-sm text-[#9ca3af]">
            Section/Location
          </div>
        </div>
        <div className="min-w-[150px] flex-1">
          <label className="mb-1 block text-xs text-[#6b7280]">
            Search Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Search Category"
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-[#6b7280]">From</label>
          <input
            type="date"
            value={filterFrom}
            onChange={(e) => setFilterFrom(e.target.value)}
            className="rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-[#6b7280]">To</label>
          <input
            type="date"
            value={filterTo}
            onChange={(e) => setFilterTo(e.target.value)}
            className="rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f3f6f9] text-[11px] uppercase tracking-wide text-[#64748b]">
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 font-medium">Agency</th>
              <th className="px-3 py-3 font-medium">Section/Location</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium">Start Date</th>
              <th className="px-3 py-3 font-medium">End Date</th>
              <th className="px-3 py-3 text-center font-medium leading-tight">
                Licence Fees Paid
                <br />
                Upto
              </th>
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
                  {row.sectionLocation}
                </td>
                <td className="px-3 py-3 text-[#374151]">{row.category}</td>
                <td className="px-3 py-3 text-[#2563eb]">{row.startDate}</td>
                <td className="px-3 py-3 text-[#2563eb]">{row.endDate}</td>
                <td className="px-3 py-3 text-center font-medium text-[#dc2626]">
                  {row.licenceFeesPaidUpto}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
