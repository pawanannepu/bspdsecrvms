"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type MobileNavContextValue = {
  open: boolean;
  openNav: () => void;
  closeNav: () => void;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

export function useMobileNav() {
  const value = useContext(MobileNavContext);
  if (!value) {
    throw new Error("useMobileNav must be used inside DashboardShell");
  }
  return value;
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Tracks the path the drawer was opened on, so navigating closes it.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const openNav = useCallback(() => setOpenedOn(pathname), [pathname]);
  const closeNav = useCallback(() => setOpenedOn(null), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenedOn(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <MobileNavContext.Provider value={{ open, openNav, closeNav }}>
      <div className="flex min-h-screen bg-[#f0f2f5]">{children}</div>
    </MobileNavContext.Provider>
  );
}
