import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">
        College Compass
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/predictor">Predictor</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}