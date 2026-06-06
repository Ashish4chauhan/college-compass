"use client";

import { useState, useEffect } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [college, setCollege] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const savedReviews = JSON.parse(
      localStorage.getItem("reviews") || "[]"
    );

    if (savedReviews.length > 0) {
      setReviews(savedReviews);
    } else {
      const defaultReviews = [
        {
          college: "Chandigarh University",
          rating: 5,
          review: "Excellent placements and campus.",
        },
        {
          college: "Amity University",
          rating: 4,
          review: "Good infrastructure and faculty.",
        },
        {
          college: "LPU",
          rating: 4,
          review: "Large campus with many opportunities.",
        },
      ];

      setReviews(defaultReviews);

      localStorage.setItem(
        "reviews",
        JSON.stringify(defaultReviews)
      );
    }
  }, []);

  const addReview = () => {
    if (!college || !rating || !reviewText) {
      alert("Please fill all fields");
      return;
    }

    const updatedReviews = [
      ...reviews,
      {
        college,
        rating: Number(rating),
        review: reviewText,
      },
    ];

    setReviews(updatedReviews);

    localStorage.setItem(
      "reviews",
      JSON.stringify(updatedReviews)
    );

    setCollege("");
    setRating("");
    setReviewText("");
  };

  const deleteReview = (index: number) => {
    const updatedReviews = reviews.filter(
      (_, i) => i !== index
    );

    setReviews(updatedReviews);

    localStorage.setItem(
      "reviews",
      JSON.stringify(updatedReviews)
    );
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        College Reviews
      </h1>

      {/* Add Review Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Add Your Review
        </h2>

        <input
          type="text"
          placeholder="College Name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="border p-3 rounded w-full mb-3"
        />

        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-3 rounded w-full mb-3"
        />

        <textarea
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) =>
            setReviewText(e.target.value)
          }
          className="border p-3 rounded w-full mb-3"
          rows={4}
        />

        <button
          onClick={addReview}
          className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold">
              {review.college}
            </h2>

            <p className="text-yellow-500 text-lg">
              {"⭐".repeat(review.rating)}
            </p>

            <p className="mt-2">
              {review.review}
            </p>

            <button
              onClick={() =>
                deleteReview(index)
              }
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete Review
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}