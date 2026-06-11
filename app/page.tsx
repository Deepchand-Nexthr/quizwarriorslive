import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-yellow-500 selection:text-black">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Brand */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="text-3xl md:text-4xl transform group-hover:rotate-12 transition-transform duration-300">
                ⚔️
              </div>
              <div>
                <div className="font-black text-xl md:text-2xl tracking-tight bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
                  QuizWarriors
                </div>
                <div className="text-xs text-yellow-500/80 font-mono tracking-wider">
                  BATTLE THROUGH KNOWLEDGE
                </div>
              </div>
            </Link>

            {/* Right Badges */}
            <div className="flex items-center gap-3">
              {/* XP Badge - Desktop */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                <span className="text-yellow-500 text-lg">🏆</span>
                <div>
                  <div className="text-[10px] text-yellow-500/70 font-mono">WARRIOR XP</div>
                  <div className="text-white font-black text-sm">0</div>
                </div>
              </div>

              {/* Guest Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-zinc-900/80 border border-zinc-700 rounded-full backdrop-blur-sm">
                <span className="text-zinc-400 text-sm md:text-base">👤</span>
                <div className="hidden md:block">
                  <div className="text-[10px] text-zinc-500 font-mono">GUEST</div>
                  <div className="text-white text-sm font-medium">Warrior</div>
                </div>
                <span className="md:hidden text-white text-sm font-medium">Guest</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column - Battle Card with Sticky */}
              <div className="relative group lg:sticky lg:top-28">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-6 md:p-8 shadow-2xl">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-mono font-bold">
                      🔥 TODAY'S BATTLE
                    </span>
                  </div>

                 <div className="text-yellow-700 font-mono text-sm mb-2">
  SEASON 1 • STAFFING
</div>

<h2 className="text-2xl md:text-3xl font-black text-white mb-2">
  US STAFFING CHALLENGE
</h2>

                  <p className="text-zinc-500 text-sm md:text-base mb-6">
                    Master US Staffing, visas, recruiting, Boolean search, LinkedIn,
W2/C2C/1099 and become a Staffing Warrior.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: "❓", value: "10", label: "Questions" },
                      { icon: "⏱️", value: "20", label: "Seconds" },
                      { icon: "🏆", value: "+100", label: "XP" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 bg-zinc-900/50 rounded-xl">
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-white font-black text-lg">{stat.value}</div>
                        <div className="text-zinc-500 text-xs font-mono">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/q/staffing-001"
                    className="inline-flex items-center justify-between w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-black font-black group-hover:shadow-lg transition-all"
                  >
                    <span>ENTER THE BATTLE</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column - Hero Text */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm animate-pulse">
                  <span className="text-yellow-500 text-sm md:text-base">🔥</span>
                  <span className="text-yellow-500 text-xs md:text-sm font-mono font-bold tracking-wide">
                    DAILY CHALLENGES AVAILABLE
                  </span>
                </div>

                {/* Main Headline - KNOWLEDGE IS WAR with responsive font */}
                <div>
                  <div className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tighter">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                      KNOWLEDGE
                    </span>
                  </div>
                  <div className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tighter mt-2">
                    <span className="text-white">IS WAR.</span>
                  </div>
                </div>

                {/* Subheadline */}
                <p className="text-zinc-300 text-base md:text-xl max-w-lg">
                  Become smarter. Become faster. Become a warrior. Learn something new in
                  just 2 minutes.
                </p>

                {/* Feature Stats - Chess.com style */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">⚔️</span>
                    <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">
                      10 QUESTIONS
                    </span>
                  </div>
                  <div className="w-1 h-1 bg-yellow-500/50 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">⏱️</span>
                    <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">
                      20 SECONDS
                    </span>
                  </div>
                  <div className="w-1 h-1 bg-yellow-500/50 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">💡</span>
                    <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">
                      FUN FACTS
                    </span>
                  </div>
                </div>

                {/* CTA Button - Bigger */}
                <Link
                  href="/q/staffing-001"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full font-black text-black text-lg md:text-xl uppercase tracking-wider overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="text-xl md:text-2xl">⚔️</span>
                    <span>ENTER THE ARENA</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Arena Section */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                <span className="text-white">⚔️ CHOOSE YOUR</span>
                <span className="text-yellow-500 block md:inline md:ml-3">ARENA</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
                Master different realms of knowledge and prove your worth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - Countries */}
             <div
  className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-8 min-h-[280px] lg:h-[400px] flex flex-col opacity-60 cursor-not-allowed overflow-hidden"
>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all"></div>
                <div className="text-7xl mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  🌍
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                  COUNTRIES
                </h3>
                <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                  <div>🇮🇳 INDIA</div>
                  <div>🚩 FLAGS</div>
                  <div>🏛 HISTORY</div>
                </div>
                <div className="text-yellow-500 font-black text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">
                  ENTER REALM →
                </div>
            </div>

              {/* Card 2 - Technology */}
              <div
  className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-8 min-h-[280px] lg:h-[400px] flex flex-col opacity-60 cursor-not-allowed overflow-hidden"
>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all"></div>
                <div className="text-7xl mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                  TECHNOLOGY
                </h3>
                <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                  <div>🤖 AI</div>
                  <div>☁️ CLOUD</div>
                  <div>⚡ SALESFORCE</div>
                </div>
                <div className="text-yellow-500 font-black text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">
                  ENTER REALM →
                </div>
              </div>

              {/* Card 3 - Careers */}
              <Link
                href="/q/staffing-001"
                className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-8 min-h-[280px] lg:h-[400px] flex flex-col transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 lg:hover:-translate-y-2 active:scale-95 lg:active:scale-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all"></div>
                <div className="text-7xl mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  💼
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                  STAFFING
                </h3>
                <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                  <div>🛂 VISAS</div>
<div>🔍 BOOLEAN</div>
<div>🤝 RECRUITING</div>
                </div>
                <div className="text-yellow-500 font-black text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">
                  ENTER BATTLE →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why QuizWarriors Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                WHY <span className="text-yellow-500">QUIZWARRIORS?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "🚀",
                  title: "No Signup Required",
                  desc: "Jump straight into battle. Zero barriers. Instant learning.",
                },
                {
                  icon: "⚡",
                  title: "Learn in 2 Minutes",
                  desc: "Fast-paced battles designed for your busy schedule.",
                },
                {
                  icon: "🏆",
                  title: "Battle Through Knowledge",
                  desc: "Compete, learn, and rise through the ranks of warriors.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group text-center p-6 md:p-8 bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800 rounded-2xl hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 lg:hover:-translate-y-1"
                >
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-yellow-500/50"></div>
            <div className="w-6 h-0.5 bg-yellow-500"></div>
            <div className="w-12 h-0.5 bg-yellow-500/50"></div>
          </div>
          <p className="text-zinc-300 text-sm md:text-base max-w-md mx-auto mb-6">
            Built for curious minds. No signups. No distractions. Just learning through
            play.
          </p>
          <div className="text-yellow-500/50 text-xs font-mono">
            © 2026 QuizWarriors — KNOWLEDGE IS WAR.
          </div>
          <p className="text-zinc-500 text-xs mt-3">
            Sharpen Your Mind. Conquer Every Day.
          </p>
        </div>
      </footer>
    </div>
  );
}