"use client";

import { FormEvent, useState } from "react";
import {
  FormCard,
  FormSection,
  PasswordField,
  SelectField,
  TextField,
} from "@/components/forms/form-fields";

export default function AddAdminPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage("Admin registered successfully (demo).");
  };

  return (
    <FormCard title="Create Admin">
      <form onSubmit={onSubmit} className="space-y-2">
        <FormSection title="Personal Information">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="First Name"
              required
              placeholder="Enter Your Name..."
            />
            <TextField
              label="Middle Name"
              placeholder="Enter Your Middle Name..."
            />
            <TextField
              label="Last Name"
              required
              placeholder="Enter Your Last Name..."
            />
            <SelectField
              label="Designation"
              required
              placeholder="Select Designation"
              options={[
                "System Admin",
                "Approval",
                "Officer",
                "Commercial Inspector",
              ]}
            />
            <TextField
              label="Mobile Number"
              required
              placeholder="Enter Your Mobile Number..."
            />
            <TextField
              label="Email"
              required
              type="email"
              placeholder="Enter Your Email..."
            />
          </div>
        </FormSection>

        <FormSection title="Credentials">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PasswordField
              label="Password"
              required
              placeholder="Enter Your Password..."
            />
            <PasswordField
              label="Confirm Password"
              required
              placeholder="Enter Your Confirm Password..."
            />
          </div>
        </FormSection>

        {message ? (
          <p className="rounded-md bg-[#ecfdf5] px-3 py-2 text-sm text-[#047857]">
            {message}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-[#4483f2] py-2.5 text-[15px] font-medium text-white hover:bg-[#3b76e0]"
        >
          Register
        </button>
      </form>
    </FormCard>
  );
}
