import { Suspense } from "react";
import { PageCard } from "@/components/page-card";
import { TableSkeleton } from "@/components/table-skeleton";
import { getContractors } from "@/lib/queries";
import { ContractorsTable } from "./contractors-table";

export const instant = true;

async function ContractorsContent() {
  const rows = await getContractors();
  return <ContractorsTable rows={rows} />;
}

export default function ContractorsPage() {
  return (
    <PageCard title="Contractors">
      <Suspense fallback={<TableSkeleton />}>
        <ContractorsContent />
      </Suspense>
    </PageCard>
  );
}
