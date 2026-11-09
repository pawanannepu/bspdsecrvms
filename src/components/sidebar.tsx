"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  FilePenLine,
  LayoutGrid,
  Plus,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useMobileNav } from "@/components/dashboard-shell";

type MenuChild = { label: string; href: string };
type MenuItem = {
  label: string;
  href?: string;
  icon: typeof Users;
  children?: MenuChild[];
};

const menuItems: MenuItem[] = [
  {
    label: "Contract Info",
    href: "/contracts",
    icon: Users,
  },
  {
    label: "MIS Reports",
    icon: FilePenLine,
    children: [
      { label: "Vendors", href: "/mis/vendors" },
      { label: "Approval Status", href: "/mis/approval-status" },
      { label: "Contract Reports", href: "/mis/contract-reports" },
      { label: "Contract Loc/Sec", href: "/mis/contract-loc-sec" },
      { label: "Station Vendors", href: "/mis/station-vendors" },
    ],
  },
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutGrid,
  },
  {
    label: "Master",
    icon: FilePenLine,
    children: [
      { label: "Admins", href: "/admins" },
      { label: "App Users", href: "/app-users" },
      { label: "Contractors", href: "/contractors" },
    ],
  },
  {
    label: "Add Data",
    icon: Plus,
    children: [
      { label: "Add Admin", href: "/add/admin" },
      { label: "Add AppUser", href: "/add/app-user" },
      { label: "Add Contractor", href: "/add/contractor" },
      { label: "Add Contract", href: "/add/contract" },
      { label: "Add Vendor", href: "/add/vendor" },
    ],
  },
];

function isChildActive(pathname: string, children?: MenuChild[]) {
  return children?.some(
    (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { open, closeNav } = useMobileNav();
  const [manualOpenMenus, setManualOpenMenus] = useState<
    Record<string, boolean>
  >({});

  const pathOpenMenus = useMemo(() => {
    const next: Record<string, boolean> = {};
    for (const item of menuItems) {
      if (isChildActive(pathname, item.children)) {
        next[item.label] = true;
      }
    }
    return next;
  }, [pathname]);

  const isMenuOpen = (label: string) =>
    label in manualOpenMenus
      ? Boolean(manualOpenMenus[label])
      : Boolean(pathOpenMenus[label]);

  const toggle = (label: string) => {
    const currentlyOpen = isMenuOpen(label);
    setManualOpenMenus((prev) => ({ ...prev, [label]: !currentlyOpen }));
  };

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={closeNav}
          aria-hidden
        />
      ) : null}
    <aside
      className={`app-sidebar fixed inset-y-0 left-0 z-50 flex w-[260px] max-w-[85vw] shrink-0 flex-col overflow-y-auto border-r border-[#e5e7eb] bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-[220px] lg:max-w-none lg:translate-x-0 ${
        open ? "translate-x-0 shadow-xl" : "-translate-x-full"
      }`}
      aria-label="Main navigation"
    >
      <button
        type="button"
        onClick={closeNav}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-[#6b7280] hover:bg-[#f3f4f6] lg:hidden"
        aria-label="Close menu"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-center justify-center px-4 py-5">
        <Link href="/" prefetch aria-label="Go to home">
          <Image
            src="/logo.png"
            alt="SECR Logo"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
        </Link>
      </div>

      <div className="px-5 pb-3">
        <p className="text-[11px] font-medium tracking-[0.14em] text-[#9ca3af]">
          MENU
        </p>
      </div>

      <nav className="flex flex-col gap-1 px-2 pb-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = Boolean(item.children?.length);
          const childActive = isChildActive(pathname, item.children);
          const isActive =
            item.href === pathname ||
            (item.href === "/" && pathname === "/") ||
            childActive;

          if (hasChildren) {
            const isOpen = isMenuOpen(item.label);
            return (
              <div key={item.label} className="rounded-md">
                <button
                  type="button"
                  onClick={() => toggle(item.label)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[14px] transition-colors ${
                    isActive || isOpen
                      ? "bg-[#f3f4f6] font-medium text-[#1f2937]"
                      : "text-[#374151] hover:bg-[#f9fafb]"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0 stroke-[1.75]" />
                  <span className="flex-1">{item.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-[#9ca3af] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-0.5 overflow-hidden rounded-md bg-[#f3f4f6] py-1">
                    {item.children?.map((child) => {
                      const active =
                        pathname === child.href ||
                        pathname.startsWith(`${child.href}/`);
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          prefetch
                          className={`block px-4 py-2 pl-11 text-[13px] transition-colors ${
                            active
                              ? "font-semibold text-[#111827]"
                              : "text-[#4b5563] hover:text-[#111827]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href!}
              prefetch
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-[14px] transition-colors ${
                isActive
                  ? "bg-[#f3f4f6] font-medium text-[#1f2937]"
                  : "text-[#374151] hover:bg-[#f9fafb]"
              }`}
            >
              <Icon className="h-[18px] w-[18px] shrink-0 stroke-[1.75]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
    </>
  );
}
