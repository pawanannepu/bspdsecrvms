"use client";

import { MisReportShell } from "@/components/mis-report-shell";
import { vendorMisRows } from "@/lib/mis-data";


export default function VendorsMisPage() {
  return (
    <MisReportShell
      title="Vendors MIS Report"
      reportOptions={[
        "Police Validation Exp. Report",
        "Validity Exp. Report",
        "All Vendors Report",
      ]}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full whitespace-nowrap text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[11px] uppercase tracking-wide text-[#9ca3af]">
              <th className="px-3 py-3 font-medium">Contract</th>
              <th className="px-3 py-3 font-medium">Vendor Name</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium">Aadhar Number</th>
              <th className="px-3 py-3 font-medium">Station Name</th>
              <th className="px-3 py-3 font-medium">Validity From</th>
              <th className="px-3 py-3 font-medium">Validity To</th>
              <th className="px-3 py-3 font-medium">Police Verification From</th>
              <th className="px-3 py-3 font-medium">Police Verification To</th>
            </tr>
          </thead>
          <tbody>
            {vendorMisRows.map((row) => (
              <tr key={row.id} className="border-b border-[#f3f4f6]">
                <td className="px-3 py-3 font-medium text-[#111827]">
                  {row.contract}
                </td>
                <td className="px-3 py-3 text-[#374151]">{row.vendorName}</td>
                <td className="px-3 py-3 text-[#374151]">{row.category}</td>
                <td className="px-3 py-3 text-[#374151]">{row.aadharNumber}</td>
                <td className="px-3 py-3 text-[#374151]">{row.stationName}</td>
                <td className="px-3 py-3 text-[#3b82f6]">{row.validityFrom}</td>
                <td className="px-3 py-3 text-[#3b82f6]">{row.validityTo}</td>
                <td className="px-3 py-3 text-[#3b82f6]">{row.policeFrom}</td>
                <td
                  className={`px-3 py-3 ${
                    row.policeToExpired ? "text-[#dc2626]" : "text-[#3b82f6]"
                  }`}
                >
                  {row.policeTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MisReportShell>
  );
}
