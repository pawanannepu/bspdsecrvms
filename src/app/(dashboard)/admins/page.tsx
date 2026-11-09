import { Pencil, Trash2 } from "lucide-react";
import { PageCard } from "@/components/page-card";
import { getAdmins } from "@/lib/queries";

export const instant = false;

export default async function AdminsPage() {
  const rows = await getAdmins();

  return (
    <PageCard title="Admin">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[12px] uppercase tracking-wide text-[#9ca3af]">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Designation</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Mobile No.</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#f3f4f6]">
                <td className="px-4 py-3 font-medium text-[#111827]">
                  {row.name}
                </td>
                <td className="px-4 py-3 text-[#374151]">{row.designation}</td>
                <td className="px-4 py-3 text-[#374151]">{row.email}</td>
                <td className="px-4 py-3">
                  <a
                    href={`tel:${row.mobile}`}
                    className="text-[#3b82f6] hover:underline"
                  >
                    {row.mobile}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#16a34a] text-white hover:bg-[#15803d]"
                      aria-label="Edit admin"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#dc2626] text-white hover:bg-[#b91c1c]"
                      aria-label="Delete admin"
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
    </PageCard>
  );
}
