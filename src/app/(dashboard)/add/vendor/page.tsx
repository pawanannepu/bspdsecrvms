"use client";

import { FormEvent, useState } from "react";
import {
  FileField,
  FormCard,
  FormSection,
  SelectField,
  TextField,
} from "@/components/forms/form-fields";

export default function AddVendorPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage("Vendor saved successfully (demo).");
  };

  return (
    <FormCard title="Register Vendor" centeredTitle={false} backHref="/">
      <form onSubmit={onSubmit} className="space-y-1">
        <FormSection title="Contractor Information" bordered>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SelectField
              label="Contract Allotting Agency"
              required
              placeholder="Contract Allotting Agency"
              options={["Railway", "BSP DIV COMML"]}
            />
            <SelectField
              label="Type of Contract"
              required
              placeholder="Type of Contract"
              options={[
                "Tea Stall",
                "Parking",
                "Refreshment Room",
                "Convenience Store",
                "Catering",
              ]}
            />
            <SelectField
              label="Contractor Name"
              required
              placeholder="Contractor Name"
              options={[
                "M/s A S Sales Co.",
                "K D FOODS",
                "RAJ CATERERS",
                "M/s City Parking",
                "Sameer Enterprises",
              ]}
            />
          </div>
        </FormSection>

        <FormSection title="Vendor Validity" bordered>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField label="Validity From" required type="date" />
            <TextField label="Validity To" required type="date" />
          </div>
        </FormSection>

        <FormSection title="Personal Information" bordered>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="First Name"
              required
              placeholder="Enter your name"
            />
            <TextField
              label="Middle Name"
              placeholder="Enter your middle name"
            />
            <TextField
              label="Last Name"
              required
              placeholder="Enter your last name"
            />
            <TextField label="Date of Birth" required type="date" />
            <FileField label="Upload Profile Photo" required />
            <TextField
              label="Mobile Number"
              required
              placeholder="Enter 10 digit Contact Number"
            />
            <FileField label="Upload Aadhar Card" required />
            <TextField
              label="Aadhar Number"
              required
              placeholder="Enter 12 digit Aadhar number"
            />
          </div>
        </FormSection>

        <FormSection title="Police Verification Information" bordered>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="Police Verification Date From"
              required
              type="date"
            />
            <TextField
              label="Police Verification Date To"
              required
              type="date"
            />
            <FileField
              label="Upload Police Verification Document"
              required
            />
          </div>
        </FormSection>

        <FormSection title="Medical Verification Information" bordered>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="Medical Validity Date From"
              required
              type="date"
            />
            <TextField label="Medical Validity Date To" required type="date" />
            <FileField label="Upload Medical Validity Document" required />
          </div>
        </FormSection>

        <FormSection title="Validity Authority" bordered>
          <SelectField
            label="Validity Authority"
            required
            placeholder="Select Validity Authority"
            options={[
              "Sr. DCM Bilaspur",
              "DCM Bilaspur",
              "ACM Bilaspur",
              "System Admin",
            ]}
          />
        </FormSection>

        {message ? (
          <p className="rounded-md bg-[#ecfdf5] px-3 py-2 text-sm text-[#047857]">
            {message}
          </p>
        ) : null}

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-md bg-[#2563eb] px-8 py-2.5 text-[15px] font-medium text-white hover:bg-[#1d4ed8]"
          >
            Save
          </button>
        </div>
      </form>
    </FormCard>
  );
}
