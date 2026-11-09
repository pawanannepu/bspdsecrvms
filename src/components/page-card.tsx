import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageCardProps = {
  title: string;
  showBack?: boolean;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export function PageCard({
  title,
  showBack = true,
  actions,
  children,
}: PageCardProps) {
  return (
    <div className="rounded-lg border border-[#e5e7eb] bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f3f4f6] px-4 py-3 sm:px-5 sm:py-4">
        <h2 className="font-serif text-[18px] font-bold text-[#1f2937] sm:text-[20px]">
          {title}
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {actions}
          {showBack && (
            <Link
              href="/"
              prefetch
              className="inline-flex items-center gap-1 rounded-md bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>
          )}
        </div>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}
