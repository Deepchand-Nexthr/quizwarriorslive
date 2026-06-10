
 "use client";

import { useState } from "react";

export default function QuizPage() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(20);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span>Question 1 of 5</span>
            <span className="text-yellow-400">20%</span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-3">
            <div className="bg-yellow-500 h-3 rounded-full w-1/5"></div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h1 className="text-3xl font-bold mb-8">
            Who is known as the Father of the Indian Constitution?
          </h1>

          <div className="space-y-4">

            <button
              onClick={() => setShowFact(true)}
              className="w-full text-left p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700"
            >
              A. Mahatma Gandhi
            </button>

            <button
              onClick={() => setShowFact(true)}
              className="w-full text-left p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700"
            >
              B. Dr. B. R. Ambedkar
            </button>

            <button
              onClick={() => setShowFact(true)}
              className="w-full text-left p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700"
            >
              C. Jawaharlal Nehru
            </button>

            <button
              onClick={() => setShowFact(true)}
              className="w-full text-left p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700"
            >
              D. Sardar Patel
            </button>

          </div>

        </div>

      </div>

      {showFact && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">

          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 max-w-md w-full">

            <div className="text-5xl mb-4">
              💡
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Did You Know?
            </h2>

            <p className="text-zinc-300 mb-6">
              Dr. B. R. Ambedkar is widely regarded as the chief architect of the Indian Constitution.
            </p>

            <button
              onClick={() => setShowFact(false)}
              className="w-full bg-yellow-500 text-black font-bold py-4 rounded-2xl"
            >
              Continue →
            </button>

          </div>

        </div>
      )}

    </main>
  );
}