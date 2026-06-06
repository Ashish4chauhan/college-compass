import { NextRequest, NextResponse } from "next/server";

import { searchCollegeSchema } from "@/src/lib/validations";
import { searchColleges } from "@/src/services/college.service";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(
      req.nextUrl.searchParams.entries()
    );

    const filters = searchCollegeSchema.parse(params);

    const result = await searchColleges(filters);

    return NextResponse.json({
      success: true,
      data: result.colleges,
      pagination: {
        total: result.total,
        page: filters.page,
        limit: filters.limit,
        totalPages: Math.ceil(
          result.total / filters.limit
        ),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      {
        status: 400,
      }
    );
  }
}