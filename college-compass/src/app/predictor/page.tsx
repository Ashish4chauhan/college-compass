import Link from "next/link";

async function getPredictions(
  budget: string,
  location: string,
  rating: string
) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/predictor?budget=${budget}&location=${location}&rating=${rating}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return { data: [] };
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
}

interface SearchParams {
  budget?: string;
  location?: string;
  rating?: string;
}

export default async function PredictorPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const budget = params.budget || "";
  const location = params.location || "";
  const rating = params.rating || "";

  const result =
    budget || location || rating
      ? await getPredictions(
        budget,
        location,
        rating
      )
      : { data: [] };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          College Predictor
        </h1>

        {/* Prediction Form */}
        <form
          action="/predictor"
          className="bg-white p-6 rounded-2xl shadow-lg grid gap-4 mb-8"
        >
          <input
            name="budget"
            type="number"
            placeholder="Enter Budget (₹)"
            defaultValue={budget}
            className="border p-3 rounded-lg"
          />

          <input
            name="location"
            type="text"
            placeholder="Preferred Location"
            defaultValue={location}
            className="border p-3 rounded-lg"
          />

          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Minimum Rating"
            defaultValue={rating}
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Predict Colleges
          </button>
        </form>

        {/* Results */}
        {result.data?.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {result.data.map((college: any) => (
              <Link
                key={college.id}
                href={`/college/${college.id}`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">
                    {college.name}
                  </h2>

                  <p>
                    📍 <strong>Location:</strong>{" "}
                    {college.location}
                  </p>

                  <p>
                    💰 <strong>Fees:</strong> ₹
                    {college.fees.toLocaleString()}
                  </p>

                  <p>
                    ⭐ <strong>Rating:</strong>{" "}
                    {college.rating}
                  </p>

                  <p>
                    📈 <strong>Average Package:</strong> ₹
                    {college.averagePackage?.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          budget ||
            location ||
            rating ? (
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold text-red-600">
                No colleges found
              </h2>

              <p className="text-gray-600 mt-2">
                Try changing your filters.
              </p>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold">
                Enter your preferences to get recommendations
              </h2>
            </div>
          )
        )}
      </div>
    </main>
  );
}