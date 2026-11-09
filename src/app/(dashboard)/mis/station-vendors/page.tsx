"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import {
  availableStations,
  formatVendorName,
  type StationVendor,
  type StationVendorsResponse,
} from "@/lib/station-vendors-data";

export default function StationVendorsPage() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StationVendorsResponse>({
    count: 0,
    message: "",
    vendors: [],
  });
  const [activeStation, setActiveStation] = useState("");

  const runSearch = async (stationName: string) => {
    const value = stationName.trim();
    setQuery(value);
    setLoading(true);
    setSearched(true);
    setActiveStation(value);

    try {
      const response = await fetch(
        `/api/station-vendors?station=${encodeURIComponent(value)}`,
      );
      const data = (await response.json()) as StationVendorsResponse;
      setResult(data);
    } catch {
      setResult({
        count: 0,
        message: "failed to fetch vendors",
        vendors: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void runSearch(query);
  };

  const displayStation = (vendor: StationVendor) =>
    vendor.Contractor.stationName[0] || activeStation;

  return (
    <div className="min-h-[70vh] rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-serif text-[22px] font-bold text-[#1e3a5f]">
          Station Wise Vendors :{searched ? result.count : 0}
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-md bg-[#2563eb] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>
      </div>

      <form
        onSubmit={onSubmit}
        className="mb-2 flex flex-wrap items-center gap-3 rounded-md bg-[#eef2f6] px-3 py-3"
      >
        <div className="flex min-w-[240px] items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Name"
            className="w-full rounded border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
          />
          <button
            type="submit"
            className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
            aria-label="Search station"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        <div className="ml-auto hidden flex-1 items-center justify-around gap-8 text-[12px] font-medium uppercase tracking-wide text-[#6b7280] md:flex">
          <span>Vendor Name</span>
          <span>Category</span>
          <span>Agency</span>
        </div>
      </form>

      <div className="mb-4 flex flex-wrap gap-2 px-1 text-xs text-[#6b7280]">
        <span>Try:</span>
        {availableStations.map((station) => (
          <button
            key={station}
            type="button"
            onClick={() => void runSearch(station)}
            className="rounded border border-[#d1d5db] bg-white px-2 py-0.5 text-[#2563eb] hover:bg-[#eff6ff]"
          >
            {station}
          </button>
        ))}
      </div>

      {!searched || (!loading && result.count === 0 && !activeStation) ? (
        <div className="flex min-h-[420px] items-center justify-center">
          <p className="font-serif text-[42px] font-bold text-[#1e3a5f]">
            Enter Station Name
          </p>
        </div>
      ) : loading ? (
        <div className="flex min-h-[420px] items-center justify-center text-sm text-[#6b7280]">
          Fetching vendors...
        </div>
      ) : result.count === 0 ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-2">
          <p className="font-serif text-[28px] font-bold text-[#1e3a5f]">
            No vendors found
          </p>
          <p className="text-sm text-[#6b7280]">
            No data for “{activeStation}”. Try Bilaspur, Korba, Shahdol,
            Raigarh, Champa, or Anuppur.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="mb-2 flex gap-3 px-3 text-[12px] font-medium uppercase tracking-wide text-[#6b7280] md:hidden">
            <span className="flex-1">Station</span>
            <span className="flex-1">Vendor Name</span>
            <span className="flex-1">Category</span>
            <span className="flex-1">Agency</span>
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {result.vendors.map((vendor) => (
              <div
                key={vendor._id}
                className="grid grid-cols-1 gap-2 px-3 py-4 text-sm text-[#374151] sm:grid-cols-4"
              >
                <div className="font-medium text-[#111827]">
                  {displayStation(vendor)}
                </div>
                <div className="font-medium text-[#111827]">
                  {formatVendorName(vendor)}
                </div>
                <div className="text-[#2563eb]">
                  {vendor.Contractor.category}
                </div>
                <div>{vendor.Contractor.agency}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
