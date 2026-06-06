import CollegeChart from "../../components/CollegeChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Total Colleges
          </h2>

          <p className="text-3xl font-bold text-blue-600">
            3
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Highest Rating
          </h2>

          <p className="text-3xl font-bold text-green-600">
            4.4
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Avg Package
          </h2>

          <p className="text-3xl font-bold text-purple-600">
            ₹7L
          </p>
        </div>
      </div>

      <CollegeChart />
    </main>
  );
}