"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const colleges = [
  {
    id: "00145426-06de-43e2-bc48-d7ff7ea988e7",
    name: "Chandigarh University",
    location: "Punjab",
    fees: 160000,
    rating: 4.4,
  },
  {
    id: "be519dac-cd65-46db-bf8f-f9f52ece2990",
    name: "Amity University",
    location: "Noida",
    fees: 180000,
    rating: 4.3,
  },
  {
    id: "ea50aaee-a42a-43fd-a6e4-39bd7efd7b09",
    name: "Lovely Professional University",
    location: "Punjab",
    fees: 170000,
    rating: 4.2,
  },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const favoriteColleges = colleges.filter((college) =>
      savedIds.includes(college.id)
    );

    setFavorites(favoriteColleges);
  }, []);

  const removeFavorite = (id: string) => {
    const savedIds = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const updatedIds = savedIds.filter(
      (collegeId: string) => collegeId !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedIds)
    );

    setFavorites(
      favorites.filter(
        (college) => college.id !== id
      )
    );
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Favorite Colleges ❤️
      </h1>

      {favorites.length > 0 ? (
        <div className="space-y-4">
          {favorites.map((college) => (
            <div
              key={college.id}
              className="border p-4 rounded-lg bg-white shadow"
            >
              <h2 className="text-2xl font-bold">
                {college.name}
              </h2>

              <p>📍 {college.location}</p>

              <p>
                💰 Fees: ₹
                {college.fees.toLocaleString()}
              </p>

              <p>
                ⭐ Rating: {college.rating}
              </p>

              <p className="text-xs text-gray-500">
                ID: {college.id}
              </p>

              <div className="flex gap-3 mt-3 flex-wrap">
                <Link
                  href={`/college/${college.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    removeFavorite(college.id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-lg">
            No favorite colleges yet ❤️
          </p>

          <Link
            href="/search"
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Browse Colleges
          </Link>
        </div>
      )}
    </main>
  );
}