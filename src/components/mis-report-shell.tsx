"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";

type MisReportShellProps = {
  title: string;
  reportOptions?: string[];
  defaultReport?: string;
  onExport?: () => void;
  children: ReactNode;
};

export function MisReportShell({
  title,
  reportOptions = ["Police Validation Exp. Report"],
  defaultReport,
  onExport,
  children,
}: MisReportShellProps) {
  const [reportType, setReportType] = useState(
    defaultReport || reportOptions[0],
  );
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [submitted, setSubmitted] = useState(true);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
        >
          ← Back
        </Link>
        <button
          type="button"
          onClick={onExport}
          className="inline-flex items-center rounded-md bg-[#16a34a] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#15803d]"
        >
          Export to Excel
        </button>
      </div>

      <div className="rounded-lg border border-[#e5e7eb] bg-white p-3 shadow-sm sm:p-4">
        <h2 className="mb-4 font-serif text-[18px] font-bold text-[#1f2937] sm:text-[20px]">
          {title}
        </h2>

        <form
          onSubmit={onSubmit}
          className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-end"
        >
          <div className="min-w-0 sm:col-span-2 lg:min-w-[240px] lg:flex-1">
            <label className="mb-1 block text-xs text-[#6b7280]">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            >
              {reportOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-[#6b7280]">From</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-[#6b7280]">To</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8] sm:col-span-2 lg:w-auto"
          >
            Submit
          </button>
        </form>

        {submitted ? children : null}
      </div>
    </div>
  );
}
