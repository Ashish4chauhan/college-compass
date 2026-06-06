import Link from "next/link";

async function getColleges() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/colleges`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch colleges");
  }

  return res.json();
}

export default async function Home() {
  const result = await getColleges();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        College Compass
      </h1>

      <form action="/search" className="mb-6">
        <input
          type="text"
          name="query"
          placeholder="Search college..."
          className="border p-3 rounded-lg w-full"
        />
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {result.data?.map((college: any) => (
          <Link
            href={`/college/${college.id}`}
            key={college.id}
          >
            <div className="bg-white text-black shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">
                {college.name}
              </h2>

              <p className="text-gray-600">
                📍 {college.location}
              </p>

              <p className="mt-2">
                💰 Fees: ₹
                {college.fees.toLocaleString()}
              </p>

              <p>
                ⭐ Rating: {college.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}