import Link from "next/link";

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black text-emerald-400 mb-4">
          🌍 COUNTRIES
        </h1>

        <p className="text-zinc-400 mb-4">
          Countries page is working!
        </p>

        <Link href="/" className="text-yellow-500 underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}