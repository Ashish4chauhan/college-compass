"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data.data));
  }, []);

  const selectedCollege1 = colleges.find(
    (c) => c.id === college1
  );

  const selectedCollege2 = colleges.find(
    (c) => c.id === college2
  );

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
        <select
          className="border p-3 rounded"
          value={college1}
          onChange={(e) =>
            setCollege1(e.target.value)
          }
        >
          <option value="">
            Select College 1
          </option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded"
          value={college2}
          onChange={(e) =>
            setCollege2(e.target.value)
          }
        >
          <option value="">
            Select College 2
          </option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCollege1 && selectedCollege2 && (
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">
                  Feature
                </th>
                <th className="p-3 text-left">
                  {selectedCollege1.name}
                </th>
                <th className="p-3 text-left">
                  {selectedCollege2.name}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">
                  Location
                </td>
                <td className="p-3">
                  {selectedCollege1.location}
                </td>
                <td className="p-3">
                  {selectedCollege2.location}
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Fees</td>
                <td className="p-3">
                  ₹
                  {selectedCollege1.fees.toLocaleString()}
                </td>
                <td className="p-3">
                  ₹
                  {selectedCollege2.fees.toLocaleString()}
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">
                  Rating
                </td>
                <td className="p-3">
                  {selectedCollege1.rating}
                </td>
                <td className="p-3">
                  {selectedCollege2.rating}
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">
                  Average Package
                </td>
                <td className="p-3">
                  ₹
                  {selectedCollege1.averagePackage.toLocaleString()}
                </td>
                <td className="p-3">
                  ₹
                  {selectedCollege2.averagePackage.toLocaleString()}
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  Highest Package
                </td>
                <td className="p-3">
                  ₹
                  {selectedCollege1.highestPackage.toLocaleString()}
                </td>
                <td className="p-3">
                  ₹
                  {selectedCollege2.highestPackage.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}