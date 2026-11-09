"use client";

import Link from "next/link";
import { ChevronDown, LogOut, Menu, Moon, Sun, User } from "lucide-react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useMobileNav } from "@/components/dashboard-shell";
import { NotificationsBell } from "@/components/notifications-bell";
import { signOut } from "@/lib/auth-client";

const THEME_EVENT = "vms-theme-change";

function getThemeSnapshot() {
  return localStorage.getItem("vms-theme") === "dark";
}

function applyStoredTheme() {
  document.documentElement.classList.toggle("dark", getThemeSnapshot());
}

function subscribeTheme(onStoreChange: () => void) {
  const onChange = () => {
    applyStoredTheme();
    onStoreChange();
  };
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

function getServerThemeSnapshot() {
  return false;
}

export function Header() {
  const { openNav } = useMobileNav();
  const dark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Re-apply after a dev Strict Mode remount; reads storage, not hydration state.
  useLayoutEffect(applyStoredTheme, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    localStorage.setItem("vms-theme", dark ? "light" : "dark");
    window.dispatchEvent(new Event(THEME_EVENT));
    window.setTimeout(() => root.classList.remove("theme-transition"), 250);
  };

  const handleLogout = async () => {
    setMenuOpen(false);
    try {
      await signOut();
    } finally {
      // Full reload once — skip router.refresh() double wait after cookie clear.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- auth handoff needs a hard navigation
      window.location.assign("/login");
    }
  };

  return (
    <header className="app-header sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-[#e5e7eb] bg-white px-3 sm:px-4 lg:px-6">
      <div className="flex shrink-0 items-center xl:flex-1">
        <button
          type="button"
          onClick={openNav}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[#374151] hover:bg-[#f3f4f6] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <h1 className="min-w-0 flex-1 truncate text-center font-serif text-[14px] font-bold tracking-wide text-[#1e293b] sm:text-[16px] xl:flex-none xl:text-[18px]">
        <span className="hidden md:inline">
          WELCOME TO VENDOR MANAGEMENT SYSTEM BILASPUR-SECR
        </span>
        <span className="md:hidden">VMS BILASPUR-SECR</span>
      </h1>
      <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4 xl:flex-1">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-track relative flex h-7 w-12 items-center rounded-full px-1 transition-colors"
          aria-label="Toggle theme"
        >
          <span
            className={`theme-knob flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-transform ${
              dark ? "translate-x-5" : "translate-x-0"
            }`}
          >
            {dark ? (
              <Moon className="h-3 w-3 text-[#4f46e5]" />
            ) : (
              <Sun className="h-3 w-3 text-[#f59e0b]" />
            )}
          </span>
        </button>

        <NotificationsBell />

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center gap-1.5"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ec4899] text-[12px] font-semibold text-white">
              AV
            </span>
            <ChevronDown className="hidden h-4 w-4 text-[#6b7280] sm:block" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-md border border-[#e5e7eb] bg-white shadow-lg">
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 font-serif text-[15px] text-[#374151] hover:bg-[#f9fafb]"
              >
                <User className="h-4 w-4" />
                My Profile
              </Link>
              <div className="border-t border-[#e5e7eb]" />
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 font-serif text-[15px] text-[#374151] hover:bg-[#f9fafb]"
              >
                <LogOut className="h-4 w-4" />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
