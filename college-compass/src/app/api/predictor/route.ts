import { NextResponse } from "next/server";

const colleges = [
  {
    id: "1",
    name: "Chandigarh University",
    location: "Punjab",
    fees: 160000,
    rating: 4.4,
    averagePackage: 700000,
  },
  {
    id: "2",
    name: "Amity University",
    location: "Noida",
    fees: 180000,
    rating: 4.3,
    averagePackage: 650000,
  },
  {
    id: "3",
    name: "Lovely Professional University",
    location: "Punjab",
    fees: 170000,
    rating: 4.2,
    averagePackage: 600000,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const budget = Number(searchParams.get("budget")) || Infinity;
  const location = searchParams.get("location") || "";
  const rating = Number(searchParams.get("rating")) || 0;

  const filtered = colleges.filter((college) => {
    const budgetMatch = college.fees <= budget;

    const locationMatch =
      !location ||
      college.location
        .toLowerCase()
        .includes(location.toLowerCase());

    const ratingMatch =
      college.rating >= rating;

    return (
      budgetMatch &&
      locationMatch &&
      ratingMatch
    );
  });

  return NextResponse.json({
    data: filtered,
  });
}