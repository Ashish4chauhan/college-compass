import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      name: "Chandigarh University",
      averagePackage: 700000,
    },
    {
      name: "Amity University",
      averagePackage: 650000,
    },
    {
      name: "LPU",
      averagePackage: 600000,
    },
  ]);
}