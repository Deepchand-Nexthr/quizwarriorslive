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
            {/* Left Brand - Fixed without logo.png */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="h-12 w-12 md:h-16 md:w-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-black text-xl md:text-2xl">QW</span>
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
                  <div className="text-[10px] text-yellow-500/70 font-mono">BETA</div>
                  <div className="text-white font-black text-sm">Launch</div>
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

      {/* Hero Section - FIXED */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Today's Challenges Panel */}
            <div className="relative lg:sticky lg:top-28">
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-zinc-800">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-mono font-bold mb-3">
                    🔥 TODAY'S CHALLENGES
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Choose your battle. Complete one today.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Challenge 1 - RAMAYAN */}
                  <Link
                    href="/q/ramayan-001"
                    className="group relative block bg-gradient-to-br from-orange-950/90 via-amber-950/80 to-orange-900/90 border border-orange-500/40 rounded-2xl p-5 transition-all duration-300 hover:border-orange-400/70 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/30 transition-all"></div>
                    <div className="absolute top-3 right-3 z-20">
                      <span className="text-xs font-black text-orange-300 bg-orange-500/20 px-2 py-1 rounded-full">⭐ FEATURED</span>
                    </div>
                    <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🏹</span>
                        <div>
                          <h3 className="font-black text-white text-lg group-hover:text-orange-300 transition-colors">RAMAYAN CHALLENGE</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-orange-300 text-xs font-mono">15 Questions</span>
                            <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                            <span className="text-orange-300 text-xs font-mono">+150 XP</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-orange-400 group-hover:translate-x-1 transition-transform">→</div>
                    </div>
                  </Link>

                  {/* Challenge 2 - STAFFING */}
                  <Link
                    href="/q/staffing-001"
                    className="group relative block bg-gradient-to-br from-yellow-950/50 to-amber-950/50 border border-yellow-500/30 rounded-2xl p-3 transition-all duration-300 hover:border-yellow-500/60 hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl group-hover:bg-yellow-500/30 transition-all"></div>
                    <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💼</span>
                        <div>
                          <h3 className="font-black text-white text-base group-hover:text-yellow-300 transition-colors">STAFFING CHALLENGE</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-yellow-300 text-xs font-mono">15 Questions</span>
                            <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                            <span className="text-yellow-300 text-xs font-mono">+150 XP</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-yellow-400 group-hover:translate-x-1 transition-transform">→</div>
                    </div>
                  </Link>

                  {/* Challenge 3 - SALESFORCE */}
                  <Link
                    href="/q/salesforceadmin-001"
                    className="group relative block bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-2xl p-3 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
                    <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <h3 className="font-black text-white text-base group-hover:text-cyan-300 transition-colors">SALESFORCE CHALLENGE</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-cyan-300 text-xs font-mono">15 Questions</span>
                            <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                            <span className="text-cyan-300 text-xs font-mono">+150 XP</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</div>
                    </div>
                  </Link>

                  {/* Challenge 4 - PMP (Disabled) */}
                  <Link
                    href="/q/pmp-001"
                    className="group relative block bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-500/30 rounded-2xl p-3 transition-all duration-300 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📋</span>
                        <div>
                          <h3 className="font-black text-white text-base">
                            PMP CHALLENGE
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-purple-300 text-xs font-mono">
                              15 Questions
                            </span>
                            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                            <span className="text-purple-300 text-xs font-mono">
                              +150 XP
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-purple-400">→</div>
                    </div>
                  </Link>

                  {/* Challenge 5 - BUSINESS ANALYST (Disabled) */}
                  <Link
                    href="/q/ba-001"
                    className="group relative block bg-gradient-to-br from-emerald-950/50 to-green-950/50 border border-emerald-500/30 rounded-2xl p-3 transition-all duration-300 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <h3 className="font-black text-white text-base">
                            BUSINESS ANALYST CHALLENGE
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-emerald-300 text-xs font-mono">
                              15 Questions
                            </span>
                            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                            <span className="text-emerald-300 text-xs font-mono">
                              +150 XP
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-emerald-400">→</div>
                    </div>
                  </Link>

                  {/* Daily Streak Indicator */}
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-sm">🔥</span>
                        <span className="text-zinc-400 text-xs font-mono">DAILY STREAK</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">Soon</span>
                        <span className="text-zinc-500 text-xs">feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* Close left column */}

            {/* Right Column - Hero Text */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm animate-pulse">
                <span className="text-yellow-500 text-sm md:text-base">🔥</span>
                <span className="text-yellow-500 text-xs md:text-sm font-mono font-bold tracking-wide">DAILY CHALLENGES AVAILABLE</span>
              </div>

              <div>
                <div className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tighter">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">KNOWLEDGE</span>
                </div>
                <div className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tighter mt-2">
                  <span className="text-white">IS WAR.</span>
                </div>
              </div>

              <p className="text-zinc-300 text-base md:text-xl max-w-lg">
                Become smarter. Become faster. Become a warrior. Learn something new in just 2 minutes.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">⚔️</span>
                  <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">15 QUESTIONS</span>
                </div>
                <div className="w-1 h-1 bg-yellow-500/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">⏱️</span>
                  <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">20 SECONDS</span>
                </div>
                <div className="w-1 h-1 bg-yellow-500/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">💡</span>
                  <span className="text-white text-xs md:text-sm font-mono font-bold tracking-wide">FUN FACTS</span>
                </div>
              </div>

              <Link
                href="/q/ramayan-001"
                className="group relative inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full font-black text-black text-lg md:text-xl uppercase tracking-wider overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  <span className="text-xl md:text-2xl">⚔️</span>
                  <span>CHOOSE YOUR CHALLENGE</span>
                </span>
              </Link>
            </div>
          </div> {/* Close grid */}
        </div> {/* Close container */}
      </section>

      {/* Arena Section - Categories */}
      <section className="py-16 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">⚔️ EXPLORE QUIZ</span>
              <span className="text-yellow-500 block md:inline md:ml-3">CATEGORIES</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              Master different realms of knowledge and prove your worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - CAREER PATH - FIXED */}
            <Link
              href="/career"
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-6 min-h-[340px] flex flex-col transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 lg:hover:-translate-y-2 active:scale-95 lg:active:scale-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 relative z-10">CAREER PATH</h3>
              <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                <div>💼 Staffing</div>
                <div>📋 PMP</div>
                <div>📊 Business Analyst</div>
              </div>
              <div className="text-yellow-500 font-black text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">EXPLORE CAREERS →</div>
            </Link>

            {/* Card 2 - TECH HUB - FIXED */}
            <Link
              href="/tech"
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-6 min-h-[340px] flex flex-col transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 lg:hover:-translate-y-2 active:scale-95 lg:active:scale-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 relative z-10">TECH HUB</h3>
              <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                <div>⚡ Salesforce</div>
                <div>🛡️ Cyber Security</div>
                <div>💻 Developer</div>
              </div>
              <div className="text-cyan-400 font-black text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">ENTER TECH HUB →</div>
            </Link>

            {/* Card 3 - COUNTRIES */}
            <Link
              href="/countries"
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-6 min-h-[340px] flex flex-col transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 lg:hover:-translate-y-2 active:scale-95 lg:active:scale-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 relative z-10">COUNTRIES</h3>
              <div className="space-y-2 text-zinc-400 font-semibold tracking-wide flex-1 relative z-10">
                <div>🇮🇳 India</div>
                <div>🚩 Flags</div>
                <div>🏛 History</div>
              </div>
              <div className="text-emerald-400 font-black text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10 mt-4">
                EXPLORE COUNTRIES →
              </div>
            </Link>

            {/* Card 4 - SANATAN DHARMA - FIXED */}
            <Link
              href="/sanatan"
              className="group relative bg-gradient-to-br from-orange-950/90 via-amber-950/80 to-orange-900/90 border border-orange-500/40 rounded-2xl p-6 md:p-6 min-h-[340px] flex flex-col transition-all duration-300 hover:border-orange-400/70 hover:shadow-2xl hover:shadow-orange-500/40 lg:hover:-translate-y-3 active:scale-95 lg:active:scale-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/40 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all"></div>
              <div className="text-7xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">🕉️</div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 relative z-10 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">SANATAN DHARMA</h3>
              <div className="space-y-2 text-orange-200/80 font-semibold tracking-wide flex-1 relative z-10">
                <div className="flex items-center gap-2"><span className="text-amber-400">🏹</span> Ramayan</div>
                <div className="flex items-center gap-2"><span className="text-amber-400">📖</span> Bhagavad Gita</div>
                <div className="flex items-center gap-2"><span className="text-amber-400">⚔️</span> Mahabharat</div>
                <div className="flex items-center gap-2"><span className="text-amber-400">🕉</span> Ancient Wisdom</div>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-orange-400 font-black text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-yellow-400">BEGIN JOURNEY →</div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why QuizWarriors Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">WHY <span className="text-yellow-500">QUIZWARRIORS?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "🚀", title: "No Signup Required", desc: "Jump straight into battle. Zero barriers. Instant learning." },
              { icon: "⚡", title: "Learn in 2 Minutes", desc: "Fast-paced battles designed for your busy schedule." },
              { icon: "🏆", title: "Battle Through Knowledge", desc: "Compete, learn, and rise through the ranks of warriors." },
            ].map((feature) => (
              <div key={feature.title} className="group text-center p-6 md:p-8 bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800 rounded-2xl hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 lg:hover:-translate-y-1">
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span>🚀</span>
            <span className="text-yellow-500 text-sm font-bold">NEW CHALLENGES COMING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Keep Coming Back.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">New quizzes are added regularly. Sharpen your mind and conquer new arenas.</p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 opacity-60">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-black text-white">PMP</h3>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 opacity-60">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-black text-white">Business Analyst</h3>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 opacity-60">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-black text-white">Cyber Security</h3>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 opacity-60">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-black text-white">Developer</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-yellow-500/50"></div>
            <div className="w-6 h-0.5 bg-yellow-500"></div>
            <div className="w-12 h-0.5 bg-yellow-500/50"></div>
          </div>
          <p className="text-zinc-300 text-sm md:text-base max-w-md mx-auto mb-6">Built for curious minds. No signups. No distractions. Just learning through play.</p>
          <div className="text-yellow-700/100 text-xs font-mono">© 2026 QuizWarriors — KNOWLEDGE IS WAR.</div>
          <p className="text-zinc-300 text-sm md:text-base mt-4 font-semibold">Sharpen Your Mind. Conquer Every Day.</p>
          <p className="text-yellow-500/80 text-sm md:text-base mt-2 font-medium">⚔️ New quizzes added regularly</p>
          <div className="mt-6">
            <p className="text-yellow-500 font-bold text-sm mb-3">Follow QuizWarriors ⚔️</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://youtube.com/@QuizWarrriors" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-red-500 transition">▶️ YouTube</a>
              <a href="https://instagram.com/Quizwarriors" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 transition">📷 Instagram</a>
              <a href="https://linkedin.com/company/quizwarriors" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition">💼 LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-6 flex-wrap text-sm">
  <Link
    href="/about"
    className="text-zinc-400 hover:text-yellow-500 transition"
  >
    About
  </Link>

  <Link
    href="/contact"
    className="text-zinc-400 hover:text-yellow-500 transition"
  >
    Contact
  </Link>

  <Link
    href="/privacy"
    className="text-zinc-400 hover:text-yellow-500 transition"
  >
    Privacy Policy
  </Link>

  <Link
    href="/terms"
    className="text-zinc-400 hover:text-yellow-500 transition"
  >
    Terms of Service
  </Link>
</div>
        </div>
      </footer>
    </div>
  );
}