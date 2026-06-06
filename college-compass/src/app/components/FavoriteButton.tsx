"use client";

export default function FavoriteButton({
  college,
}: {
  college: any;
}) {
  const saveCollege = () => {
    const existing =
      JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

    existing.push(college);

    localStorage.setItem(
      "favorites",
      JSON.stringify(existing)
    );

    alert("College Saved!");
  };

  return (
    <button
      onClick={saveCollege}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      ❤️ Save College
    </button>
  );
}