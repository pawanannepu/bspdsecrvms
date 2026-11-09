"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  FormCard,
  FormSection,
  SelectField,
  TextField,
} from "@/components/forms/form-fields";

export default function AddContractorPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage("Contractor registered successfully (demo).");
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
        >
          ← Back
        </Link>
      </div>

      <FormCard title="Create Contractor" centeredTitle>
        <form onSubmit={onSubmit}>
          <FormSection title="Contractor Information">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TextField
                label="Firm Name"
                required
                placeholder="Enter Firm Name..."
              />
              <SelectField
                label="Type of Firm"
                required
                placeholder="Select Type of Firm"
                options={["Proprietor", "Partnership", "Private Limited"]}
              />
              <TextField
                label="Director Name"
                required
                placeholder="Enter Director Name..."
              />
              <TextField
                label="Firm Office Address"
                required
                placeholder="Enter Firm Office Address..."
              />
              <TextField
                label="Firm Email"
                required
                type="email"
                placeholder="Enter Firm Email..."
              />
              <TextField
                label="Firm Contact No."
                required
                placeholder="Enter Firm Contact No..."
              />
            </div>
          </FormSection>

          {message ? (
            <p className="mb-3 rounded-md bg-[#ecfdf5] px-3 py-2 text-sm text-[#047857]">
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-md bg-[#4483f2] py-2.5 text-[15px] font-medium text-white hover:bg-[#3b76e0]"
          >
            Register
          </button>
        </form>
      </FormCard>
    </div>
  );
}
