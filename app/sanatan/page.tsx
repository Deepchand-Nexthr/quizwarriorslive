import Link from "next/link";

export default function SanatanPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold text-sm mb-6">
            🕉️ ETERNAL KNOWLEDGE
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            SANATAN DHARMA
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Explore timeless wisdom, epic stories, and spiritual teachings
            through immersive quiz battles.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Ramayan */}
          <Link
            href="/q/ramayan-001"
            className="group relative overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-br from-orange-950/90 via-amber-950/80 to-orange-900/90 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/30"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-6xl mb-5">🏹</div>

              <h2 className="text-3xl font-black text-white mb-3">
                Ramayan
              </h2>

              <p className="text-orange-200/80 mb-6">
                Test your knowledge of Lord Rama, Sita, Hanuman, and the epic
                journey through Ayodhya and Lanka.
              </p>

              <div className="flex items-center gap-2 text-orange-300 text-sm font-mono mb-6">
                <span>LIVE</span>
                <span>•</span>
                <span>Questions Ready</span>
              </div>

              <div className="text-orange-300 font-black group-hover:text-yellow-400 transition">
                BEGIN JOURNEY →
              </div>
            </div>
          </Link>

          {/* Bhagavad Gita */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 opacity-80">
            <div className="text-6xl mb-5">📖</div>

            <h2 className="text-3xl font-black mb-3">
              Bhagavad Gita
            </h2>

            <p className="text-zinc-400 mb-6">
              Discover the teachings of Lord Krishna and the timeless wisdom
              of dharma and self-realization.
            </p>

            <span className="inline-flex px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm font-bold">
              COMING SOON
            </span>
          </div>

          {/* Mahabharat */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 opacity-80">
            <div className="text-6xl mb-5">⚔️</div>

            <h2 className="text-3xl font-black mb-3">
              Mahabharat
            </h2>

            <p className="text-zinc-400 mb-6">
              Dive into the greatest epic of duty, war, sacrifice, and destiny.
            </p>

            <span className="inline-flex px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm font-bold">
              COMING SOON
            </span>
          </div>

          {/* Ancient Wisdom */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 opacity-80">
            <div className="text-6xl mb-5">🕉️</div>

            <h2 className="text-3xl font-black mb-3">
              Ancient Wisdom
            </h2>

            <p className="text-zinc-400 mb-6">
              Explore Vedic insights, philosophy, and timeless teachings that
              shaped civilizations.
            </p>

            <span className="inline-flex px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm font-bold">
              COMING SOON
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}