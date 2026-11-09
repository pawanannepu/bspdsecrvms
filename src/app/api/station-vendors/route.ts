import { NextRequest, NextResponse } from "next/server";
import { getVendorsByStation } from "@/lib/station-vendors-data";

export async function GET(request: NextRequest) {
  const station = request.nextUrl.searchParams.get("station") || "";
  const payload = getVendorsByStation(station);
  return NextResponse.json(payload);
}
