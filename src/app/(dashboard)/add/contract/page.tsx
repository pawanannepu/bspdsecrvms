"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  FileField,
  FormCard,
  SelectField,
  TextField,
} from "@/components/forms/form-fields";

const sectionOptions = [
  "Bilaspur",
  "Korba",
  "Shahdol",
  "Raigarh",
  "Champa",
  "Anuppur",
  "Catering",
];

const stationOptions = [
  "Bilaspur",
  "Korba",
  "Shahdol",
  "Raigarh",
  "Champa",
  "Anuppur",
  "Uslapur",
];

export default function AddContractPage() {
  const [message, setMessage] = useState("");
  const [sectionQuery, setSectionQuery] = useState("");
  const [stationQuery, setStationQuery] = useState("");
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [selectedStations, setSelectedStations] = useState<string[]>([]);

  const filteredSections = useMemo(
    () =>
      sectionOptions.filter((item) =>
        item.toLowerCase().includes(sectionQuery.toLowerCase()),
      ),
    [sectionQuery],
  );

  const filteredStations = useMemo(
    () =>
      stationOptions.filter((item) =>
        item.toLowerCase().includes(stationQuery.toLowerCase()),
      ),
    [stationQuery],
  );

  const toggleValue = (
    value: string,
    list: string[],
    setList: (next: string[]) => void,
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
      return;
    }
    setList([...list, value]);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage("Contract saved successfully (demo).");
  };

  return (
    <FormCard title="Create Contract" centeredTitle={false} backHref="/">
      <form onSubmit={onSubmit} className="space-y-4">
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
              "Parcel Lease",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <TextField
              label="Section Names"
              placeholder="Search Section Name"
              value={sectionQuery}
              onChange={(e) => setSectionQuery(e.target.value)}
            />
            <div className="mt-2 max-h-28 overflow-auto rounded border border-[#e5e7eb] bg-[#f9fafb] p-2">
              {filteredSections.map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() =>
                    toggleValue(section, selectedSections, setSelectedSections)
                  }
                  className={`mb-1 block w-full rounded px-2 py-1 text-left text-sm ${
                    selectedSections.includes(section)
                      ? "bg-[#dbeafe] text-[#1d4ed8]"
                      : "hover:bg-[#f3f4f6]"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[#374151]">
              Selected Sections
            </p>
            <div className="min-h-28 rounded border border-dashed border-[#d1d5db] p-2 text-sm text-[#6b7280]">
              {selectedSections.length
                ? selectedSections.join(", ")
                : "No sections selected"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <TextField
              label="Names of Station"
              placeholder="Search Station Name"
              value={stationQuery}
              onChange={(e) => setStationQuery(e.target.value)}
            />
            <div className="mt-2 max-h-28 overflow-auto rounded border border-[#e5e7eb] bg-[#f9fafb] p-2">
              {filteredStations.map((station) => (
                <button
                  key={station}
                  type="button"
                  onClick={() =>
                    toggleValue(station, selectedStations, setSelectedStations)
                  }
                  className={`mb-1 block w-full rounded px-2 py-1 text-left text-sm ${
                    selectedStations.includes(station)
                      ? "bg-[#dbeafe] text-[#1d4ed8]"
                      : "hover:bg-[#f3f4f6]"
                  }`}
                >
                  {station}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[#374151]">
              Selected Station
            </p>
            <div className="min-h-28 rounded border border-dashed border-[#d1d5db] p-2 text-sm text-[#6b7280]">
              {selectedStations.length
                ? selectedStations.join(", ")
                : "No stations selected"}
            </div>
          </div>
        </div>

        <TextField
          label="Contract Period From"
          required
          type="date"
        />
        <TextField label="Contract Period To" required type="date" />
        <TextField
          label="License Fees Paid Upto Date"
          required
          type="date"
        />
        <TextField
          label="Licensee Name"
          required
          placeholder="Search Licensee Name"
        />
        <TextField
          label="Licensee Contact Details"
          required
          placeholder="Enter Licensee Contact Details"
        />
        <TextField
          label="Licensee Address"
          required
          placeholder="Enter Licensee Address"
        />
        <FileField
          label="Upload Authority Document"
          note="Note: Only Include pdf, jpeg and jpg"
        />

        {message ? (
          <p className="rounded-md bg-[#ecfdf5] px-3 py-2 text-sm text-[#047857]">
            {message}
          </p>
        ) : null}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="rounded-md bg-[#16a34a] px-10 py-2.5 text-[15px] font-medium text-white hover:bg-[#15803d]"
          >
            Save
          </button>
        </div>
      </form>
    </FormCard>
  );
}
