import { Plus } from "lucide-react";
import { PageCard } from "@/components/page-card";
import { getContracts } from "@/lib/queries";
import { ContractsTable } from "./contracts-table";

export const instant = false;

export default async function ContractsPage() {
  const rows = await getContracts();

  return (
    <PageCard
      title="Contracts"
      actions={
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Contract
        </button>
      }
    >
      <ContractsTable rows={rows} />
    </PageCard>
  );
}
