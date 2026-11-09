import { PageCard } from "@/components/page-card";
import { getContractors } from "@/lib/queries";
import { ContractorsTable } from "./contractors-table";

export const instant = false;

export default async function ContractorsPage() {
  const rows = await getContractors();

  return (
    <PageCard title="Contractors">
      <ContractorsTable rows={rows} />
    </PageCard>
  );
}
