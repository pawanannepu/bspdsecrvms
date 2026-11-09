export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-3" aria-hidden>
      <div className="h-10 rounded bg-[#f3f4f6]" />
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-11 rounded bg-[#f9fafb]" />
      ))}
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="min-h-[150px] animate-pulse sm:min-h-[180px] rounded-lg border border-[#e5e7eb] bg-white"
        />
      ))}
    </div>
  );
}
