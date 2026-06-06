"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.data || []);
      })
      .catch((err) =>
        console.error("Error fetching colleges:", err)
      );

    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (collegeId: string) => {
    let updatedFavorites: string[];

    if (favorites.includes(collegeId)) {
      updatedFavorites = favorites.filter(
        (id) => id !== collegeId
      );
    } else {
      updatedFavorites = [
        ...favorites,
        collegeId,
      ];
    }

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const filteredColleges = colleges
    .filter((college) => {
      const matchesSearch = college.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLocation =
        location === "All Locations" ||
        college.location === location;

      return matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "fees") {
        return a.fees - b.fees;
      }

      return 0;
    });

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Search Colleges
      </h1>

      <input
        type="text"
        placeholder="Search college..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="border p-3 rounded w-full mb-4"
      />

      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        className="border p-3 rounded w-full mb-4"
      >
        <option>All Locations</option>
        <option>Punjab</option>
        <option>Noida</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className="border p-3 rounded w-full mb-6"
      >
        <option value="">Sort By</option>
        <option value="rating">
          Rating High → Low
        </option>
        <option value="fees">
          Fees Low → High
        </option>
      </select>

      <div className="space-y-4">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <div
              key={college.id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-2xl font-bold">
                {college.name}
              </h2>

              <p className="text-xs text-gray-500">
                ID: {college.id}
              </p>

              <p>📍 {college.location}</p>

              <p>
                💰 Fees: ₹
                {college.fees?.toLocaleString()}
              </p>

              <p>
                ⭐ Rating: {college.rating}
              </p>

              <div className="flex gap-3 mt-3">
                <Link
                  href={`/college/${college.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    toggleFavorite(college.id)
                  }
                  className={`px-4 py-2 rounded text-white ${favorites.includes(college.id)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  {favorites.includes(college.id)
                    ? "❌ Remove Favorite"
                    : "❤️ Add Favorite"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500">
            No colleges found.
          </p>
        )}
      </div>
    </main>
  );
}