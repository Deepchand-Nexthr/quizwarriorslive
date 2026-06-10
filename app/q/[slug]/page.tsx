"use client";

import { useState, useEffect } from "react";
import { quizData } from "@/data/countries/india-001";
import Link from "next/link";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizData.questions[currentQuestion];

  useEffect(() => {
    if (showFact || quizComplete) return;

    if (timeLeft <= 0) {
      setIsCorrect(false);
      setSelectedAnswer("⏱ Time's Up");
      setShowFact(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showFact, quizComplete]);

  const handleAnswer = (selectedOption: string) => {
    if (showFact) return;

    const correct =
      selectedOption === question.correctAnswer;

    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setSelectedAnswer(selectedOption);
    setShowFact(true);
  };

  const nextQuestion = () => {
    if (
      currentQuestion <
      quizData.questionsPerAttempt - 1
    ) {
      setCurrentQuestion((prev) => prev + 1);
      setShowFact(false);
      setSelectedAnswer("");
      setTimeLeft(20);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFact(false);
    setSelectedAnswer("");
    setIsCorrect(false);
    setTimeLeft(20);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const accuracy = Math.round(
      (score / quizData.questionsPerAttempt) * 100
    );
    let message = "📚 Keep Learning";

if (accuracy >= 90) {
  message = "🏆 Quiz Master";
} else if (accuracy >= 70) {
  message = "⭐ Great Job";
} else if (accuracy >= 50) {
  message = "👍 Good Effort";
}

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-lg w-full text-center">
          <h1 className="text-5xl mb-6">🏆</h1>

          <h2 className="text-3xl font-bold mb-6">
            Quiz Complete
          </h2>

<div className="space-y-4 mb-8">
  <p className="text-xl">
    Score: {score}/{quizData.questionsPerAttempt}
  </p>

  <p className="text-lg">
    Accuracy: {accuracy}%
  </p>

  <p className="text-yellow-400 font-bold text-xl">
    {message}
  </p>

  <p className="text-zinc-400">
    Questions Answered: {quizData.questionsPerAttempt}
  </p>
</div>

          <button
            onClick={restartQuiz}
            className="w-full bg-yellow-500 text-black font-bold py-4 rounded-2xl"
          >
            Play Again
          </button>
          <Link
  href="/"
  className="block mt-4 w-full bg-zinc-800 text-white font-bold py-4 rounded-2xl text-center"
>
  Back To Home
</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress */}

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span>
              Question {currentQuestion + 1} of{" "}
              {quizData.questionsPerAttempt}
            </span>

            <span
  className={
    timeLeft <= 5
      ? "text-red-500 animate-pulse font-bold"
      : timeLeft <= 10
      ? "text-orange-400 font-semibold"
      : "text-yellow-400"
  }
>
  ⏱ {timeLeft}s
</span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-3">
            <div
              className="bg-yellow-500 h-3 rounded-full"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    quizData.questionsPerAttempt) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="text-yellow-400 text-sm mb-4">
            🇮🇳 INDIA CHALLENGE
          </div>

          <h1 className="text-3xl font-bold mb-8">
            {question.question}
          </h1>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fact Popup */}

      {showFact && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 max-w-md w-full">
            <div className="text-5xl mb-4">
              💡
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {isCorrect
                ? "✅ Correct!"
                : "❌ Incorrect!"}
            </h2>

            <p className="text-zinc-400 mb-2">
              Your Answer: {selectedAnswer}
            </p>

            <p className="text-green-400 font-semibold mb-4">
              Correct Answer: {question.correctAnswer}
            </p>

            <p className="text-zinc-300 mb-6">
              {question.fact}
            </p>

            <button
              onClick={nextQuestion}
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