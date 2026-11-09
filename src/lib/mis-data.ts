export type VendorMisRow = {
  id: number;
  contract: string;
  vendorName: string;
  category: string;
  aadharNumber: string;
  stationName: string;
  validityFrom: string;
  validityTo: string;
  policeFrom: string;
  policeTo: string;
  policeToExpired?: boolean;
};

export const vendorMisRows: VendorMisRow[] = [
  {
    id: 1,
    contract: "K D FOODS",
    vendorName: "Ramesh Kumar",
    category: "Tea Stall",
    aadharNumber: "XXXX-XXXX-1234",
    stationName: "Bilaspur",
    validityFrom: "01/01/2023",
    validityTo: "31/12/2027",
    policeFrom: "01/01/2023",
    policeTo: "31/12/2024",
    policeToExpired: true,
  },
  {
    id: 2,
    contract: "M/s A S Sales Co.",
    vendorName: "Amit Sharma",
    category: "Convenience Store",
    aadharNumber: "XXXX-XXXX-5678",
    stationName: "Shahdol",
    validityFrom: "15/03/2022",
    validityTo: "14/03/2027",
    policeFrom: "15/03/2022",
    policeTo: "14/03/2026",
  },
  {
    id: 3,
    contract: "RAJ CATERERS",
    vendorName: "Rajesh Verma",
    category: "Catering",
    aadharNumber: "XXXX-XXXX-9012",
    stationName: "Champa",
    validityFrom: "01/02/2024",
    validityTo: "31/01/2029",
    policeFrom: "01/02/2024",
    policeTo: "31/01/2025",
    policeToExpired: true,
  },
  {
    id: 4,
    contract: "SECR VENDORS PVT LTD",
    vendorName: "Sunil Patel",
    category: "Parking",
    aadharNumber: "XXXX-XXXX-3456",
    stationName: "Korba",
    validityFrom: "20/05/2021",
    validityTo: "19/05/2026",
    policeFrom: "20/05/2021",
    policeTo: "19/05/2026",
  },
  {
    id: 5,
    contract: "BILASPUR SNACKS",
    vendorName: "Meena Gupta",
    category: "Refreshment Room",
    aadharNumber: "XXXX-XXXX-7890",
    stationName: "Bilaspur",
    validityFrom: "10/06/2022",
    validityTo: "09/06/2027",
    policeFrom: "10/06/2022",
    policeTo: "09/06/2025",
  },
  {
    id: 6,
    contract: "M/s Krishna Traders",
    vendorName: "Krishna Yadav",
    category: "Book Stall",
    aadharNumber: "XXXX-XXXX-2468",
    stationName: "Raigarh",
    validityFrom: "12/08/2022",
    validityTo: "11/08/2027",
    policeFrom: "12/08/2022",
    policeTo: "11/08/2024",
    policeToExpired: true,
  },
  {
    id: 7,
    contract: "SHRI RAM ENTERPRISES",
    vendorName: "Ram Prasad",
    category: "Tea Stall",
    aadharNumber: "XXXX-XXXX-1357",
    stationName: "Korba",
    validityFrom: "01/04/2023",
    validityTo: "31/03/2028",
    policeFrom: "01/04/2023",
    policeTo: "31/03/2026",
  },
  {
    id: 8,
    contract: "M/s City Parking",
    vendorName: "Vikram Joshi",
    category: "Parking",
    aadharNumber: "XXXX-XXXX-8642",
    stationName: "Bilaspur",
    validityFrom: "05/11/2021",
    validityTo: "04/11/2026",
    policeFrom: "05/11/2021",
    policeTo: "04/11/2025",
  },
];

export const approvalStatusRows = [
  {
    id: 1,
    contract: "K D FOODS",
    applicant: "K D SINGH",
    status: "Approved",
    submittedOn: "12/01/2025",
  },
  {
    id: 2,
    contract: "Sameer Enterprises",
    applicant: "Sameer Khan",
    status: "Pending",
    submittedOn: "18/02/2025",
  },
  {
    id: 3,
    contract: "Station Mart",
    applicant: "Anita Rao",
    status: "Rejected",
    submittedOn: "05/03/2025",
  },
];

export const contractReportRows = [
  {
    id: 1,
    name: "Neeraj Kumar Patel",
    agency: "Railway",
    category: "Tea Stall 193",
    startDate: "6/10/2022",
    endDate: "4/16/2028",
  },
  {
    id: 2,
    name: "Sameer Enterprises",
    agency: "Railway",
    category: "convenience store SDL",
    startDate: "3/15/2022",
    endDate: "3/14/2027",
  },
];

export const contractLocSecRows = [
  {
    id: 1,
    contract: "Sameer Enterprises",
    section: "Shahdol",
    location: "SDL Platform 1",
  },
  {
    id: 2,
    contract: "City Parking",
    section: "Korba",
    location: "Main Parking",
  },
  {
    id: 3,
    contract: "Station Mart",
    section: "Raigarh",
    location: "Concourse",
  },
];

export const stationVendorRows = [
  {
    id: 1,
    station: "Bilaspur",
    vendor: "Ramesh Kumar",
    contract: "K D FOODS",
  },
  {
    id: 2,
    station: "Shahdol",
    vendor: "Amit Sharma",
    contract: "M/s A S Sales Co.",
  },
  {
    id: 3,
    station: "Korba",
    vendor: "Sunil Patel",
    contract: "SECR VENDORS PVT LTD",
  },
];
