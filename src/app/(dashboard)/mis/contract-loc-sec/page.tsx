"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, FileSpreadsheet } from "lucide-react";

type LocSecRow = {
  id: number;
  name: string;
  agency: string;
  section: string;
  station: string;
  category: string;
  startDate: string;
  endDate: string;
  licenceFeesPaidUpto: string;
};

const rows: LocSecRow[] = [
  {
    id: 1,
    name: "Neeraj Kumar Patel",
    agency: "Railway",
    section: "Korba",
    station: "Shahdol",
    category: "Tea Stall 193",
    startDate: "6/10/2022",
    endDate: "4/16/2028",
    licenceFeesPaidUpto: "6/9/2027",
  },
  {
    id: 2,
    name: "Sameer Enterprises",
    agency: "Railway",
    section: "Uslapur",
    station: "Anuppur",
    category: "PBO6-ITC",
    startDate: "3/15/2022",
    endDate: "3/14/2027",
    licenceFeesPaidUpto: "12/31/2026",
  },
  {
    id: 3,
    name: "K D FOODS",
    agency: "Railway",
    section: "Bilaspur",
    station: "Bilaspur",
    category: "Refreshment Room",
    startDate: "1/1/2023",
    endDate: "12/31/2027",
    licenceFeesPaidUpto: "12/18/2026",
  },
  {
    id: 4,
    name: "City Parking",
    agency: "Railway",
    section: "Korba",
    station: "Korba",
    category: "Parking",
    startDate: "5/20/2021",
    endDate: "5/19/2026",
    licenceFeesPaidUpto: "1/1/2027",
  },
  {
    id: 5,
    name: "Station Mart",
    agency: "Railway",
    section: "Raigarh",
    station: "Raigarh",
    category: "Convenience Store",
    startDate: "8/12/2022",
    endDate: "8/11/2027",
    licenceFeesPaidUpto: "12/18/2026",
  },
  {
    id: 6,
    name: "Raj Caterers",
    agency: "Railway",
    section: "Champa",
    station: "Champa",
    category: "Catering",
    startDate: "2/1/2024",
    endDate: "1/31/2029",
    licenceFeesPaidUpto: "1/10/2027",
  },
  {
    id: 7,
    name: "M S ENTERPRISES",
    agency: "Railway",
    section: "Anuppur",
    station: "Anuppur",
    category: "RELAX CHAIR",
    startDate: "7/25/2026",
    endDate: "7/24/2029",
    licenceFeesPaidUpto: "10/25/2026",
  },
];

export default function ContractLocSecPage() {
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("All Agency");
  const [section, setSection] = useState("");
  const [station, setStation] = useState("");
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
        section &&
        !row.section.toLowerCase().includes(section.toLowerCase())
      ) {
        return false;
      }
      if (
        station &&
        !row.station.toLowerCase().includes(station.toLowerCase())
      ) {
        return false;
      }
      if (
        category &&
        !row.category.toLowerCase().includes(category.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [name, agency, section, station, category]);

  return (
    <div className="rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-[140px]" />
        <h2 className="text-center font-serif text-[22px] font-bold text-[#1f2937]">
          Station/Section wise Contracts
        </h2>
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
      </div>

      <div className="mb-4 flex flex-wrap items-end gap-3 rounded-md bg-[#eef5fb] px-3 py-3">
        <div className="min-w-[140px] flex-1">
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
        <div className="min-w-[140px] flex-1">
          <label className="mb-1 block text-xs text-[#6b7280]">
            Search Section
          </label>
          <input
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Search Section"
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div className="min-w-[140px] flex-1">
          <label className="mb-1 block text-xs text-[#6b7280]">
            Search Station
          </label>
          <input
            value={station}
            onChange={(e) => setStation(e.target.value)}
            placeholder="Search Station"
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div className="min-w-[140px] flex-1">
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
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-[#6b7280]">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1150px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f3f6f9] text-[11px] uppercase tracking-wide text-[#64748b]">
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 text-center font-medium">Agency</th>
              <th className="px-3 py-3 text-center font-medium">Section</th>
              <th className="px-3 py-3 text-center font-medium">Station</th>
              <th className="px-3 py-3 text-center font-medium">Category</th>
              <th className="px-3 py-3 text-center font-medium">Start Date</th>
              <th className="px-3 py-3 text-center font-medium">End Date</th>
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
                <td className="px-3 py-3 text-center text-[#6b7280]">
                  {row.agency}
                </td>
                <td className="px-3 py-3 text-center text-[#6b7280]">
                  {row.section}
                </td>
                <td className="px-3 py-3 text-center text-[#6b7280]">
                  {row.station}
                </td>
                <td className="px-3 py-3 text-center text-[#6b7280]">
                  {row.category}
                </td>
                <td className="px-3 py-3 text-center text-[#2563eb]">
                  {row.startDate}
                </td>
                <td className="px-3 py-3 text-center text-[#2563eb]">
                  {row.endDate}
                </td>
                <td className="px-3 py-3 text-center font-medium text-[#d9534f]">
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
