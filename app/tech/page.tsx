import Link from "next/link";

export default function TechPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black">
            💻 TECH HUB
          </h1>

          <p className="text-zinc-400 mt-4">
            Choose your battlefield.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/q/salesforceadmin-001"
            className="p-8 rounded-2xl border border-cyan-500/30 bg-zinc-900 hover:border-cyan-400 transition"
          >
            <div className="text-5xl mb-4">⚡</div>

            <h2 className="text-2xl font-black">
              Salesforce
            </h2>

            <p className="text-zinc-400 mt-2">
              Admin, Flow & Platform quizzes
            </p>
          </Link>

          <div className="p-8 rounded-2xl border border-zinc-700 bg-zinc-900 opacity-70">
            <div className="text-5xl mb-4">🛡️</div>

            <h2 className="text-2xl font-black">
              Cyber Security
            </h2>

            <p className="text-zinc-400 mt-2">
              Coming Soon
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-zinc-700 bg-zinc-900 opacity-70">
            <div className="text-5xl mb-4">💻</div>

            <h2 className="text-2xl font-black">
              Developer
            </h2>

            <p className="text-zinc-400 mt-2">
              Coming Soon
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-zinc-700 bg-zinc-900 opacity-70">
            <div className="text-5xl mb-4">🤖</div>

            <h2 className="text-2xl font-black">
              Artificial Intelligence
            </h2>

            <p className="text-zinc-400 mt-2">
              Coming Soon
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}