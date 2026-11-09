"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";

type ApprovalRow = {
  id: number;
  contractName: string;
  category: string;
  vendorName: string;
  qrCode: string;
  aadharNumber: string;
  validityFrom: string;
  validityTo: string;
  policeFrom: string;
  policeTo: string;
  medicalFrom: string;
  medicalTo: string;
};

const rows: ApprovalRow[] = [
  {
    id: 1,
    contractName: "ODS",
    category: "Parking",
    vendorName: "rahul rr gedam",
    qrCode: "OAC9GL",
    aadharNumber: "676407036977",
    validityFrom: "8/20/2025",
    validityTo: "12/31/2025",
    policeFrom: "1/1/2025",
    policeTo: "1/1/2026",
    medicalFrom: "1/1/2025",
    medicalTo: "1/1/2026",
  },
  {
    id: 2,
    contractName: "K D FOODS",
    category: "Tea Stall",
    vendorName: "ramesh kumar",
    qrCode: "KD8F21",
    aadharNumber: "452301987654",
    validityFrom: "1/1/2025",
    validityTo: "12/31/2027",
    policeFrom: "1/1/2025",
    policeTo: "12/31/2025",
    medicalFrom: "2/1/2025",
    medicalTo: "1/31/2026",
  },
  {
    id: 3,
    contractName: "M/s A S Sales Co.",
    category: "Convenience Store",
    vendorName: "amit sharma",
    qrCode: "AS7M44",
    aadharNumber: "889012345678",
    validityFrom: "3/15/2025",
    validityTo: "3/14/2027",
    policeFrom: "3/15/2025",
    policeTo: "3/14/2026",
    medicalFrom: "3/15/2025",
    medicalTo: "3/14/2026",
  },
  {
    id: 4,
    contractName: "City Parking",
    category: "Parking",
    vendorName: "vikram joshi",
    qrCode: "CP2K19",
    aadharNumber: "334455667788",
    validityFrom: "5/20/2025",
    validityTo: "5/19/2026",
    policeFrom: "5/20/2025",
    policeTo: "5/19/2026",
    medicalFrom: "5/20/2025",
    medicalTo: "5/19/2026",
  },
  {
    id: 5,
    contractName: "Station Mart",
    category: "Book Stall",
    vendorName: "anita rao",
    qrCode: "SM5R88",
    aadharNumber: "998877665544",
    validityFrom: "8/12/2025",
    validityTo: "8/11/2027",
    policeFrom: "8/12/2025",
    policeTo: "8/11/2026",
    medicalFrom: "8/12/2025",
    medicalTo: "8/11/2026",
  },
];

function ViewLink() {
  return (
    <button
      type="button"
      className="mt-0.5 block text-[12px] text-[#2563eb] hover:underline"
    >
      View
    </button>
  );
}

export default function ApprovalStatusPage() {
  const [reportType, setReportType] = useState("Pending Vendors Report");
  const [contractQuery, setContractQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [vendorQuery, setVendorQuery] = useState("");

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      if (
        contractQuery &&
        !row.contractName.toLowerCase().includes(contractQuery.toLowerCase())
      ) {
        return false;
      }
      if (
        categoryQuery &&
        !row.category.toLowerCase().includes(categoryQuery.toLowerCase())
      ) {
        return false;
      }
      if (
        vendorQuery &&
        !row.vendorName.toLowerCase().includes(vendorQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [contractQuery, categoryQuery, vendorQuery]);

  return (
    <div className="space-y-5">
      <h2 className="text-center font-serif text-[18px] font-bold text-[#1f2937] sm:text-[22px]">
        Pending Approval Status
      </h2>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="w-full rounded border sm:w-auto sm:min-w-[220px] border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#374151] outline-none focus:border-[#2563eb]"
        >
          <option>Pending Vendors Report</option>
          <option>Approved Vendors Report</option>
          <option>Rejected Vendors Report</option>
          <option>All Vendors Report</option>
        </select>

        <button
          type="button"
          className="w-full rounded-md bg-[#16a34a] px-4 py-2 text-sm font-medium text-white hover:bg-[#15803d] sm:w-auto"
        >
          Export To Excel
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-[#e5e7eb] bg-white shadow-sm">
        <table className="w-full min-w-[1400px] whitespace-nowrap text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[11px] uppercase tracking-wide text-[#9ca3af]">
              <th className="px-3 py-3 font-medium">Contract Name</th>
              <th className="px-3 py-3 font-medium">Search Category</th>
              <th className="px-3 py-3 font-medium">Search Vendor Name</th>
              <th className="px-3 py-3 font-medium">QR Code</th>
              <th className="px-3 py-3 font-medium">Aadhar Number</th>
              <th className="px-3 py-3 font-medium">Vendor Validity From</th>
              <th className="px-3 py-3 font-medium">Vendor Validity To</th>
              <th className="px-3 py-3 font-medium">Police Verification From</th>
              <th className="px-3 py-3 font-medium">Police Verification To</th>
              <th className="px-3 py-3 font-medium">Medical Verification From</th>
              <th className="px-3 py-3 font-medium">Medical Verification To</th>
              <th className="px-3 py-3 font-medium">Action</th>
            </tr>
            <tr className="border-b border-[#e5e7eb] bg-white">
              <th className="px-3 py-2">
                <input
                  value={contractQuery}
                  onChange={(e) => setContractQuery(e.target.value)}
                  placeholder="Contract Name"
                  className="w-full rounded border border-[#d1d5db] px-2 py-1.5 text-[12px] font-normal normal-case tracking-normal text-[#111827] outline-none focus:border-[#2563eb]"
                />
              </th>
              <th className="px-3 py-2">
                <input
                  value={categoryQuery}
                  onChange={(e) => setCategoryQuery(e.target.value)}
                  placeholder="Search Category"
                  className="w-full rounded border border-[#d1d5db] px-2 py-1.5 text-[12px] font-normal normal-case tracking-normal text-[#111827] outline-none focus:border-[#2563eb]"
                />
              </th>
              <th className="px-3 py-2">
                <input
                  value={vendorQuery}
                  onChange={(e) => setVendorQuery(e.target.value)}
                  placeholder="Search Vendor Name"
                  className="w-full rounded border border-[#d1d5db] px-2 py-1.5 text-[12px] font-normal normal-case tracking-normal text-[#111827] outline-none focus:border-[#2563eb]"
                />
              </th>
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-b border-[#f3f4f6] align-top">
                <td className="px-3 py-3 font-medium text-[#111827]">
                  {row.contractName}
                </td>
                <td className="px-3 py-3 text-[#374151]">{row.category}</td>
                <td className="px-3 py-3 text-[#374151]">{row.vendorName}</td>
                <td className="px-3 py-3 text-[#374151]">{row.qrCode}</td>
                <td className="px-3 py-3 text-[#374151]">
                  <div>{row.aadharNumber}</div>
                  <ViewLink />
                </td>
                <td className="px-3 py-3 text-[#2563eb]">{row.validityFrom}</td>
                <td className="px-3 py-3 text-[#2563eb]">{row.validityTo}</td>
                <td className="px-3 py-3 text-[#2563eb]">
                  <div>{row.policeFrom}</div>
                  <ViewLink />
                </td>
                <td className="px-3 py-3 text-[#2563eb]">{row.policeTo}</td>
                <td className="px-3 py-3 text-[#2563eb]">
                  <div>{row.medicalFrom}</div>
                  <ViewLink />
                </td>
                <td className="px-3 py-3 text-[#2563eb]">{row.medicalTo}</td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#d1d5db] bg-[#f3f4f6] text-[#2563eb] hover:bg-[#e5e7eb]"
                    aria-label="Approve"
                  >
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
