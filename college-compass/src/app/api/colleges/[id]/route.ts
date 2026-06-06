import { NextResponse } from "next/server";
import { fetchCollegeById } from "@/src/services/college.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const college = await fetchCollegeById(id);

  return NextResponse.json({
    success: true,
    data: college,
  });
}