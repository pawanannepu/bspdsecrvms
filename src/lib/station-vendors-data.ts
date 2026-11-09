export type StationVendor = {
  isRejected: { status: boolean };
  _id: string;
  fname: string;
  mname: string;
  lname: string;
  mobile: number;
  aadhar: number;
  qrcode: string;
  locationOfStall: string;
  isApproved: boolean;
  Contractor: {
    agency: string;
    category: string;
    subcategory: string;
    licensee: string;
    stationName: string[];
  };
};

export type StationVendorsResponse = {
  count: number;
  message: string;
  vendors: StationVendor[];
};

const bilaspurVendors: StationVendor[] = [
  {
    isRejected: { status: false },
    _id: "68a6ca9fade3f0deee9a8817",
    fname: "Dipendra",
    mname: "",
    lname: "Singh",
    mobile: 9753984070,
    aadhar: 272906029484,
    qrcode: "1K7XP0",
    locationOfStall: "TS/32/BSP/PF-7/8",
    isApproved: true,
    Contractor: {
      agency: "Railway",
      category: "Tea Stall 32",
      subcategory: "Tea Stall",
      licensee: "M/s A S Sales Co.",
      stationName: ["Bilaspur"],
    },
  },
  {
    isRejected: { status: false },
    _id: "68cd4a3969a529a96204aeee",
    fname: "Ranjeet",
    mname: "",
    lname: ".",
    mobile: 9770176782,
    aadhar: 546189266250,
    qrcode: "4SY0WU",
    locationOfStall: "TS/32/BSP/PF-7/8",
    isApproved: true,
    Contractor: {
      agency: "Railway",
      category: "Tea Stall 32",
      subcategory: "Tea Stall",
      licensee: "M/s A S Sales Co.",
      stationName: ["Bilaspur"],
    },
  },
  {
    isRejected: { status: false },
    _id: "68d297afd714dd4b5d02eaf4",
    fname: "Koushlendra",
    mname: "",
    lname: "Singh",
    mobile: 9131605898,
    aadhar: 507845232006,
    qrcode: "RVY5YU",
    locationOfStall: "TS/32/BSP/PF-7/8",
    isApproved: true,
    Contractor: {
      agency: "Railway",
      category: "Tea Stall 32",
      subcategory: "Tea Stall",
      licensee: "M/s A S Sales Co.",
      stationName: ["Bilaspur"],
    },
  },
  {
    isRejected: { status: false },
    _id: "6abcea3388dd4ff8f0bf85ef",
    fname: "Bachchu",
    mname: "",
    lname: "Singh Bhadoriya",
    mobile: 9753984070,
    aadhar: 410295287061,
    qrcode: "ITWX5M",
    locationOfStall: "TS/32/BSP/PF-7/8",
    isApproved: true,
    Contractor: {
      agency: "Railway",
      category: "Tea Stall 32",
      subcategory: "Tea Stall",
      licensee: "M/s A S Sales Co.",
      stationName: ["Bilaspur"],
    },
  },
  {
    isRejected: { status: false },
    _id: "6abcec3b88dd4ff8f0bf8619",
    fname: "Satendra",
    mname: "",
    lname: "Singh",
    mobile: 9793984070,
    aadhar: 486501013960,
    qrcode: "DVDAW6",
    locationOfStall: "TS/32/BSP/PF-7/8",
    isApproved: true,
    Contractor: {
      agency: "Railway",
      category: "Tea Stall 32",
      subcategory: "Tea Stall",
      licensee: "M/s A S Sales Co.",
      stationName: ["Bilaspur"],
    },
  },
];

const stationVendorsMap: Record<string, StationVendor[]> = {
  bilaspur: bilaspurVendors,
  korba: [
    {
      isRejected: { status: false },
      _id: "korba-vendor-1",
      fname: "Vikram",
      mname: "",
      lname: "Joshi",
      mobile: 9827612345,
      aadhar: 111122223333,
      qrcode: "KB1PAR",
      locationOfStall: "PK/01/KRBA",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Parking",
        subcategory: "Parking",
        licensee: "M/s City Parking",
        stationName: ["Korba"],
      },
    },
    {
      isRejected: { status: false },
      _id: "korba-vendor-2",
      fname: "Suresh",
      mname: "",
      lname: "Das",
      mobile: 9755512345,
      aadhar: 222233334444,
      qrcode: "KB2TEA",
      locationOfStall: "TS/05/KRBA",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Tea Stall 05",
        subcategory: "Tea Stall",
        licensee: "TEA STALL SERVICES",
        stationName: ["Korba"],
      },
    },
    {
      isRejected: { status: false },
      _id: "korba-vendor-3",
      fname: "Meena",
      mname: "",
      lname: "Gupta",
      mobile: 9827011122,
      aadhar: 333344445555,
      qrcode: "KB3SNK",
      locationOfStall: "RR/02/KRBA",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Refreshment Room",
        subcategory: "Catering",
        licensee: "BILASPUR SNACKS",
        stationName: ["Korba"],
      },
    },
  ],
  shahdol: [
    {
      isRejected: { status: false },
      _id: "shahdol-vendor-1",
      fname: "Amit",
      mname: "",
      lname: "Sharma",
      mobile: 9752123456,
      aadhar: 444455556666,
      qrcode: "SDL1CS",
      locationOfStall: "CS/01/SDL",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "convenience store SDL",
        subcategory: "Convenience Store",
        licensee: "Sameer Enterprises",
        stationName: ["Shahdol"],
      },
    },
    {
      isRejected: { status: false },
      _id: "shahdol-vendor-2",
      fname: "Neeraj",
      mname: "Kumar",
      lname: "Patel",
      mobile: 9876543210,
      aadhar: 555566667777,
      qrcode: "SDL2TS",
      locationOfStall: "TS/193/SDL",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Tea Stall 193",
        subcategory: "Tea Stall",
        licensee: "Neeraj Kumar Patel",
        stationName: ["Shahdol"],
      },
    },
  ],
  raigarh: [
    {
      isRejected: { status: false },
      _id: "raigarh-vendor-1",
      fname: "Anita",
      mname: "",
      lname: "Rao",
      mobile: 9009812345,
      aadhar: 666677778888,
      qrcode: "RGH1SM",
      locationOfStall: "SM/01/RGH",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Convenience Store",
        subcategory: "Convenience Store",
        licensee: "M/s Station Mart",
        stationName: ["Raigarh"],
      },
    },
    {
      isRejected: { status: false },
      _id: "raigarh-vendor-2",
      fname: "Krishna",
      mname: "",
      lname: "Yadav",
      mobile: 9406123456,
      aadhar: 777788889999,
      qrcode: "RGH2BK",
      locationOfStall: "BK/03/RGH",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Book Stall",
        subcategory: "Book Stall",
        licensee: "M/s Krishna Traders",
        stationName: ["Raigarh"],
      },
    },
  ],
  champa: [
    {
      isRejected: { status: false },
      _id: "champa-vendor-1",
      fname: "Rajesh",
      mname: "",
      lname: "Verma",
      mobile: 9425012345,
      aadhar: 888899990000,
      qrcode: "CHP1CT",
      locationOfStall: "CT/01/CHP",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Catering",
        subcategory: "Catering",
        licensee: "RAJ CATERERS",
        stationName: ["Champa"],
      },
    },
  ],
  anuppur: [
    {
      isRejected: { status: false },
      _id: "anuppur-vendor-1",
      fname: "Manoj",
      mname: "",
      lname: "Sahu",
      mobile: 9811122233,
      aadhar: 121212121212,
      qrcode: "APR1RC",
      locationOfStall: "RC/01/APR",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "RELAX CHAIR",
        subcategory: "Waiting Hall",
        licensee: "M S ENTERPRISES",
        stationName: ["Anuppur"],
      },
    },
    {
      isRejected: { status: false },
      _id: "anuppur-vendor-2",
      fname: "Pooja",
      mname: "",
      lname: "Dewangan",
      mobile: 9822233344,
      aadhar: 131313131313,
      qrcode: "APR2WH",
      locationOfStall: "WH/02/APR",
      isApproved: true,
      Contractor: {
        agency: "Railway",
        category: "Pay & Use Waiting Hall",
        subcategory: "Waiting Hall",
        licensee: "ANSARI CONSTRUCTINO",
        stationName: ["Anuppur"],
      },
    },
  ],
};

export const availableStations = [
  "Bilaspur",
  "Korba",
  "Shahdol",
  "Raigarh",
  "Champa",
  "Anuppur",
];

export function getVendorsByStation(
  stationName: string,
): StationVendorsResponse {
  const key = stationName.trim().toLowerCase();
  if (!key) {
    return {
      count: 0,
      message: "enter station name",
      vendors: [],
    };
  }

  const vendors = stationVendorsMap[key] ?? [];
  return {
    count: vendors.length,
    message:
      vendors.length > 0
        ? "vendors fetched with station name"
        : "no vendors found for station name",
    vendors,
  };
}

export function formatVendorName(vendor: StationVendor) {
  return [vendor.fname, vendor.mname, vendor.lname]
    .filter((part) => part !== undefined && part !== null && String(part).length > 0)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
