import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CardsSkeleton } from "@/components/table-skeleton";
import { getDashboardCounts } from "@/lib/queries";

export const instant = true;

const cards = [
  {
    key: "admins" as const,
    label: "Admins",
    href: "/admins",
    icon: "/icons/admin.svg",
    showCount: false,
  },
  {
    key: "appUsers" as const,
    label: "App Users",
    href: "/app-users",
    icon: "/icons/app-users.svg",
    showCount: false,
  },
  {
    key: "contractors" as const,
    label: "Contractors",
    href: "/contractors",
    icon: "/icons/contractors.svg",
    showCount: true,
  },
  {
    key: "contracts" as const,
    label: "Contracts",
    href: "/contracts",
    icon: "/icons/contracts.svg",
    showCount: true,
  },
];

async function DashboardCards() {
  const counts = await getDashboardCounts();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const count = counts[card.key];
        const title = card.showCount
          ? `${card.label} - ${count}`
          : card.label;

        return (
          <Link
            key={card.key}
            href={card.href}
            prefetch
            className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-[#e5e7eb] bg-white px-4 py-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)]"
          >
            <Image
              src={card.icon}
              alt={card.label}
              width={72}
              height={72}
              className="mb-4"
            />
            <p className="text-center text-[16px] font-medium text-[#111827]">
              {title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<CardsSkeleton />}>
      <DashboardCards />
    </Suspense>
  );
}
