"use client";

import Link from "next/link";
import { ChevronDown, LogOut, Moon, Sun, User } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { NotificationsBell } from "@/components/notifications-bell";
import { signOut } from "@/lib/auth-client";

const THEME_EVENT = "vms-theme-change";

function subscribeTheme(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("vms-theme") === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

export function Header() {
  const router = useRouter();
  const dark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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
    const next = !dark;
    localStorage.setItem("vms-theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const handleLogout = async () => {
    setMenuOpen(false);
    await signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#e5e7eb] bg-white px-6">
      <div className="flex-1" />
      <h1 className="text-center font-serif text-[18px] font-bold tracking-wide text-[#1e293b]">
        WELCOME TO VENDOR MANAGEMENT SYSTEM BILASPUR-SECR
      </h1>
      <div className="flex flex-1 items-center justify-end gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="relative flex h-7 w-12 items-center rounded-full bg-[#e5e7eb] px-1 transition-colors dark:bg-[#374151]"
          aria-label="Toggle theme"
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-transform ${
              dark ? "translate-x-5" : "translate-x-0"
            }`}
          >
            {dark ? (
              <Moon className="h-3 w-3 text-[#4b5563]" />
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
            <ChevronDown className="h-4 w-4 text-[#6b7280]" />
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
