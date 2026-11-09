import { DashboardShell } from "@/components/dashboard-shell";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="min-w-0 flex-1 p-3 sm:p-4 lg:p-6">{children}</main>
        <Footer />
      </div>
    </DashboardShell>
  );
}
