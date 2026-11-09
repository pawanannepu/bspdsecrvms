import { Plus } from "lucide-react";
import { Suspense } from "react";
import { PageCard } from "@/components/page-card";
import { TableSkeleton } from "@/components/table-skeleton";
import { getContracts } from "@/lib/queries";
import { ContractsTable } from "./contracts-table";

export const instant = true;

async function ContractsContent() {
  const rows = await getContracts();
  return <ContractsTable rows={rows} />;
}

export default function ContractsPage() {
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
      <Suspense fallback={<TableSkeleton />}>
        <ContractsContent />
      </Suspense>
    </PageCard>
  );
}
