"use client";

import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { useSession } from "@/lib/auth-client";

function ProfileField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-1 flex items-center gap-2 text-[#1e3a5f]">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="break-words pl-6 text-sm text-[#4b5563]">{value}</p>
    </div>
  );
}

export default function ProfilePage() {
  const { data: session } = useSession();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [message, setMessage] = useState("");

  const email = session?.user?.email || "adminbilaspur@gmail.com";
  const profile = {
    initials: "AV",
    name: "Avishek",
    designation: "System Admin",
    mobile: "9876543210",
    email,
    role: "SuperAdmin",
  };

  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg border border-[#e5e7eb] bg-white p-8 shadow-sm">
      <h2 className="mb-8 font-serif text-[26px] font-bold text-[#1e3a5f]">
        Profile Details
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex shrink-0 justify-center md:justify-start">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#ec4899] text-[42px] font-semibold text-white">
            {profile.initials}
          </div>
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          <ProfileField
            icon={<User className="h-4 w-4" />}
            label="Name"
            value={profile.name}
          />
          <ProfileField
            icon={<User className="h-4 w-4" />}
            label="Designation"
            value={profile.designation}
          />
          <ProfileField
            icon={<Phone className="h-4 w-4" />}
            label="Mobile"
            value={profile.mobile}
          />
          <ProfileField
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={profile.email}
          />
          <ProfileField
            icon={<User className="h-4 w-4" />}
            label="Role"
            value={profile.role}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={() => {
            setShowPasswordForm((open) => !open);
            setMessage("");
          }}
          className="rounded-md bg-[#dc2626] px-4 py-2 text-sm font-medium text-white hover:bg-[#b91c1c]"
        >
          Update Password
        </button>
      </div>

      {showPasswordForm ? (
        <form
          className="mt-6 grid max-w-xl grid-cols-1 gap-4 border-t border-[#e5e7eb] pt-6 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage("Password update saved (demo).");
            setShowPasswordForm(false);
          }}
        >
          <div>
            <label className="mb-1.5 block text-sm text-[#374151]">
              Current Password
            </label>
            <input
              type="password"
              required
              className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-[#374151]">
              New Password
            </label>
            <input
              type="password"
              required
              className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm outline-none focus:border-[#2563eb]"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-md bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
            >
              Save Password
            </button>
          </div>
        </form>
      ) : null}

      {message ? (
        <p className="mt-4 rounded-md bg-[#ecfdf5] px-3 py-2 text-sm text-[#047857]">
          {message}
        </p>
      ) : null}
    </div>
  );
}
