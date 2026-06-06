import Link from "next/link";
import { fetchCollegeById } from "@/src/services/college.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegePage({
  params,
}: Props) {
  const { id } = await params;

  const college = await fetchCollegeById(id);

  if (!college) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            College Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            The college you are looking for does not exist.
          </p>

          <Link
            href="/search"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Search
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          {college.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-2">
              Basic Information
            </h2>

            <p>
              📍 <strong>Location:</strong> {college.location}
            </p>

            <p>
              ⭐ <strong>Rating:</strong> {college.rating}
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-2">
              Fees & Placement
            </h2>

            <p>
              💰 <strong>Fees:</strong> ₹
              {college.fees.toLocaleString()}
            </p>

            <p>
              📈 <strong>Average Package:</strong> ₹
              {college.averagePackage.toLocaleString()}
            </p>

            <p>
              🏆 <strong>Highest Package:</strong> ₹
              {college.highestPackage.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-8 border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {college.overview}
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/search"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Search
          </Link>

          <Link
            href="/compare"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Compare Colleges
          </Link>
        </div>
      </div>
    </main>
  );
}