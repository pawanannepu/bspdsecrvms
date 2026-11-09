"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, SelectHTMLAttributes, useState } from "react";

export function RequiredMark() {
  return <span className="text-[#ef4444]">*</span>;
}

export function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-1.5 block text-[13px] font-medium text-[#374151]">
      {children}
      {required ? (
        <>
          {" "}
          <RequiredMark />
        </>
      ) : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-md border border-[#d1d5db] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#4483f2] focus:ring-2 focus:ring-[#4483f2]/15";

export function TextField({
  label,
  required,
  ...props
}: {
  label: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input className={inputClassName} {...props} />
    </div>
  );
}

export function SelectField({
  label,
  required,
  placeholder,
  options,
  ...props
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <select className={inputClassName} defaultValue="" {...props}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function PasswordField({
  label,
  required,
  placeholder,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          className={`${inputClassName} pr-10`}
        />
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280]"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

export function FileField({
  label,
  required,
  note,
}: {
  label: string;
  required?: boolean;
  note?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        type="file"
        accept=".pdf,.jpeg,.jpg,image/jpeg,application/pdf"
        className="block w-full text-sm text-[#6b7280] file:mr-3 file:rounded-md file:border-0 file:bg-[#e5e7eb] file:px-3 file:py-2 file:text-sm file:font-medium file:text-[#374151]"
      />
      {note ? <p className="mt-1 text-xs text-[#6b7280]">{note}</p> : null}
    </div>
  );
}

export function FormCard({
  title,
  centeredTitle = true,
  backHref,
  children,
}: {
  title: string;
  centeredTitle?: boolean;
  backHref?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg border border-[#e5e7eb] bg-white p-6 shadow-sm">
      <div
        className={`mb-6 flex items-center ${
          backHref ? "justify-between" : "justify-center"
        }`}
      >
        <h2
          className={`font-serif text-[24px] font-bold text-[#1e3a5f] ${
            centeredTitle && !backHref ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center rounded-md bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
          >
            ← Back
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 font-serif text-[18px] font-bold text-[#4b5563]">
      {children}
    </h3>
  );
}

export function FormSection({
  title,
  bordered,
  children,
}: {
  title: string;
  bordered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={
        bordered
          ? "mb-5 rounded-md border border-[#e5e7eb] p-4"
          : "mb-6"
      }
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}
