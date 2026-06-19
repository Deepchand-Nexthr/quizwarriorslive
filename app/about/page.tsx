export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-yellow-500 mb-8">
          About QuizWarriors
        </h1>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          Welcome to QuizWarriors.
        </p>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          QuizWarriors is an interactive learning platform built to make
          knowledge fun, engaging, and accessible for everyone. Our mission is
          to help students, professionals, and lifelong learners test their
          knowledge through short quizzes and challenges.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          What We Offer
        </h2>

        <p className="text-zinc-300 mb-4">
          We offer quizzes across multiple categories including:
        </p>

        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-8">
          <li>Business Analyst</li>
          <li>Salesforce</li>
          <li>PMP</li>
          <li>Cyber Security</li>
          <li>Staffing & Recruitment</li>
          <li>Technology</li>
          <li>History</li>
          <li>Culture</li>
          <li>General Knowledge</li>
        </ul>

        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Our Mission
        </h2>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          Our goal is simple: learn something new every day in just a few
          minutes.
        </p>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          Whether you are preparing for interviews, improving professional
          skills, or simply exploring new topics, QuizWarriors provides a quick
          and enjoyable way to learn.
        </p>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          We continuously add new quizzes and learning challenges to help users
          sharpen their minds, build confidence, and expand their knowledge.
        </p>

        <div className="mt-12 p-6 border border-yellow-500/20 rounded-2xl bg-zinc-900/50">
          <h3 className="text-xl font-bold text-yellow-500 mb-3">
            QuizWarriors ⚔️
          </h3>

          <p className="text-zinc-300">
            Thank you for being part of the QuizWarriors community.
          </p>

          <p className="text-yellow-500 font-semibold mt-3">
            Knowledge is War.
          </p>
        </div>
      </div>
    </main>
  );
}