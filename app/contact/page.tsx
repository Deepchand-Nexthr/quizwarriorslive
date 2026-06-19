export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-yellow-500 mb-8">
          Contact Us
        </h1>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          We'd love to hear from you.
        </p>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          If you have feedback, quiz suggestions, partnership opportunities,
          business inquiries, or would like to report an issue, please reach
          out to us.
        </p>

        <div className="bg-zinc-900/50 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Contact Information
          </h2>

          <p className="text-zinc-300 mb-3">
            📧 Email:
          </p>

          <p className="text-yellow-500 font-semibold break-all">
            deepc774@gmail.com
          </p>
        </div>

        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Business & Partnerships
        </h2>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          QuizWarriors welcomes collaboration opportunities with educators,
          trainers, staffing firms, technology communities, content creators,
          and organizations looking to build engaging knowledge-based quizzes.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Response Time
        </h2>

        <p className="text-zinc-300 mb-8 leading-relaxed">
          We aim to respond to all inquiries within 2–5 business days.
        </p>

        <div className="mt-12 p-6 border border-yellow-500/20 rounded-2xl bg-zinc-900/50">
          <h3 className="text-xl font-bold text-yellow-500 mb-3">
            QuizWarriors ⚔️
          </h3>

          <p className="text-zinc-300">
            Thank you for supporting our mission of making learning engaging,
            competitive, and fun.
          </p>

          <p className="text-yellow-500 font-semibold mt-3">
            Knowledge is War.
          </p>
        </div>
      </div>
    </main>
  );
}