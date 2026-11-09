"use client";

import { Bell, CheckCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  href?: string;
  read: boolean;
};

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    title: "Pending Vendor Approval",
    message: "rahul rr gedam (ODS / Parking) is waiting for approval.",
    time: "2 min ago",
    href: "/mis/approval-status",
    read: false,
  },
  {
    id: "2",
    title: "License Fee Expired",
    message: "M S ENTERPRISES license fee needs review.",
    time: "1 hr ago",
    href: "/mis/contract-reports",
    read: false,
  },
  {
    id: "3",
    title: "New Station Vendors",
    message: "5 vendors found for Bilaspur station.",
    time: "Yesterday",
    href: "/mis/station-vendors",
    read: false,
  },
  {
    id: "4",
    title: "Contract Reminder",
    message: "Sameer Enterprises contract end date is approaching.",
    time: "2 days ago",
    href: "/contracts",
    read: true,
  },
];

const STORAGE_KEY = "vms-notifications";

export function NotificationsBell() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setNotifications(JSON.parse(stored) as NotificationItem[]);
      }
    } catch {
      // ignore invalid storage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!panelRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const unreadCount = notifications.filter((item) => !item.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const openNotification = (item: NotificationItem) => {
    markAsRead(item.id);
    setOpen(false);
    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#dbeafe] text-[#6b7280] hover:text-[#111827]"
        aria-label="Notifications"
        aria-expanded={open}
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-semibold text-white">
            {unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <div className="absolute right-0 z-40 mt-2 w-[340px] overflow-hidden rounded-lg border border-[#e5e7eb] bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3">
            <div>
              <p className="font-serif text-[15px] font-semibold text-[#1f2937]">
                Notifications
              </p>
              <p className="text-xs text-[#6b7280]">
                {unreadCount > 0
                  ? `${unreadCount} unread`
                  : "You're all caught up"}
              </p>
            </div>
            {unreadCount > 0 ? (
              <button
                type="button"
                onClick={markAllAsRead}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#2563eb] hover:bg-[#eff6ff]"
              >
                <CheckCheck className="h-3.5 w-3.5" />
                Mark all read
              </button>
            ) : null}
          </div>

          <div className="max-h-[360px] overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-[#6b7280]">
                No notifications
              </p>
            ) : (
              notifications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openNotification(item)}
                  className={`block w-full border-b border-[#f3f4f6] px-4 py-3 text-left transition hover:bg-[#f9fafb] ${
                    item.read ? "bg-white" : "bg-[#eff6ff]"
                  }`}
                >
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-[#111827]">
                      {item.title}
                    </p>
                    {!item.read ? (
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2563eb]" />
                    ) : null}
                  </div>
                  <p className="text-xs leading-5 text-[#4b5563]">
                    {item.message}
                  </p>
                  <p className="mt-1 text-[11px] text-[#9ca3af]">{item.time}</p>
                </button>
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
