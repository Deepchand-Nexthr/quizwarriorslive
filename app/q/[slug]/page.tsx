"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Confetti from "react-confetti";
import { quizRegistry } from "@/data/registry";
import { useParams } from "next/navigation";
import { saveQuizResult, getAuthenticatedUser } from "@/lib/supabase/quiz";

export default function QuizPage() {
  const params = useParams();
  const quizData = quizRegistry[params.slug as keyof typeof quizRegistry];

  if (!quizData) {
    throw new Error("Quiz not found");
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizData.timerPerQuestion);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState(() =>
    [...quizData.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, quizData.questionsPerAttempt)
  );

  const correctSound = useRef<HTMLAudioElement | null>(null);
  const wrongSound = useRef<HTMLAudioElement | null>(null);
  const victorySound = useRef<HTMLAudioElement | null>(null);
  const tauntSound = useRef<HTMLAudioElement | null>(null);
  const tickSound = useRef<HTMLAudioElement | null>(null);
  const question = questions[currentQuestion];
  const endTimeRef = useRef<number>(0);

  const stopTickSound = () => {
    if (tickSound.current) {
      tickSound.current.pause();
      tickSound.current.currentTime = 0;
    }
  };

  useEffect(() => {
    correctSound.current = new Audio("/sounds/correct.mp3");
    wrongSound.current = new Audio("/sounds/wrong.mp3");
    victorySound.current = new Audio("/sounds/victory.mp3");
    tauntSound.current = new Audio("/sounds/taunt.mp3");
    tickSound.current = new Audio("/sounds/tick.mp3");
  }, []);

  useEffect(() => {
    if (!quizComplete) return;
    if (score > quizData.questionsPerAttempt / 2) {
      victorySound.current?.play();
    } else {
      tauntSound.current?.play();
    }
  }, [quizComplete, score]);

  useEffect(() => {
    if (showFact || quizComplete) {
      stopTickSound();
      return;
    }

    endTimeRef.current = Date.now() + quizData.timerPerQuestion * 1000;
    setTimeLeft(quizData.timerPerQuestion);

    const interval = setInterval(() => {
      const remaining = Math.ceil((endTimeRef.current - Date.now()) / 1000);

      if (remaining <= 0) {
        clearInterval(interval);
        stopTickSound();

        if (selectedAnswer !== "") {
          return;
        }

        setTimeLeft(0);
        setIsCorrect(false);
        setSelectedAnswer("⏱️ Time's Up");
        wrongSound.current?.play();
        setShowFact(true);
        return;
      }

      setTimeLeft(remaining);

      if (tickSound.current && selectedAnswer === "") {
        tickSound.current.currentTime = 0;
        tickSound.current.play().catch(() => {});
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      stopTickSound();
    };
  }, [currentQuestion, showFact, quizComplete, selectedAnswer]);

  const handleAnswer = (selectedOption: string) => {
    if (showFact) return;
    stopTickSound();
    const correct = selectedOption === question.options[question.correct];

    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      correctSound.current?.play();
    } else {
      wrongSound.current?.play();
    }

    setSelectedAnswer(selectedOption);

    setTimeout(() => {
      setShowFact(true);
    }, 800);
  };

  const finishQuiz = async () => {
      console.log("finishQuiz called");
    try {
      const userId = await getAuthenticatedUser();
      await saveQuizResult(
        userId,
        params.slug as string,
        quizData.title,
        score,
        quizData.questionsPerAttempt
      );
    } catch (error) {
      console.error('Failed to save quiz result:', error);
    } finally {
      setQuizComplete(true);
    }
  };

  const nextQuestion = async () => {
    stopTickSound();
    if (currentQuestion < quizData.questionsPerAttempt - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowFact(false);
      setSelectedAnswer("");
      setTimeLeft(quizData.timerPerQuestion);
    } else {
       await finishQuiz();
    }
  };

  const restartQuiz = () => {
    stopTickSound();
    setQuestions(
      [...quizData.questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, quizData.questionsPerAttempt)
    );
    setCurrentQuestion(0);
    setScore(0);
    setShowFact(false);
    setSelectedAnswer("");
    setIsCorrect(false);
    setTimeLeft(quizData.timerPerQuestion);
    setQuizComplete(false);
    endTimeRef.current = 0;
  };

  if (quizComplete) {
    const accuracy = Math.round((score / quizData.questionsPerAttempt) * 100);
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
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl">
          {accuracy >= 80 && (
            <Confetti
              recycle={false}
              numberOfPieces={accuracy >= 90 ? 400 : 200}
            />
          )}

          <div className="mb-6">
            <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              ⚔️ Battle Complete!
            </h2>
            <p className="text-zinc-400 mt-2">
              Knowledge is power. Come back tomorrow for another battle.
            </p>
            <p className="text-zinc-400 mt-2 text-sm font-mono">
              {quizData.title.toUpperCase()} • SEASON 1
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <p className="text-zinc-400 text-sm">Score</p>
              <p className="text-yellow-400 font-black text-2xl">
                {score}/{quizData.questionsPerAttempt}
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <p className="text-zinc-400 text-sm">Accuracy</p>
              <p className="text-yellow-400 font-black text-2xl">
                {accuracy}%
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <p className="text-zinc-400 text-sm">XP Earned</p>
              <p className="text-yellow-400 font-black text-2xl">
                +{score * 10}
              </p>
            </div>
          </div>

          <p className="text-yellow-400 font-bold text-lg mb-6">
            Rank:{" "}
            {accuracy === 100
              ? "👑 Mythic Warrior"
              : accuracy >= 90
              ? "🏆 Legendary Warrior"
              : accuracy >= 80
              ? "🥇 Gold Warrior"
              : accuracy >= 70
              ? "🥈 Silver Warrior"
              : accuracy >= 50
              ? "🥉 Bronze Warrior"
              : "⚔️ Rookie Warrior"}
          </p>

          <div className="pt-4 mb-8">
            <p className="text-yellow-400 font-black text-xl">{message}</p>
            <p className="text-zinc-400 text-sm mt-2">
              Thank you for playing QuizWarriors ⚔️
            </p>
          </div>

          <button
            onClick={restartQuiz}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-4 rounded-2xl hover:scale-105 transition-all mb-4 shadow-lg"
          >
            🔥 NEXT ROUND
          </button>

          <Link
            href="/"
            className="block w-full bg-zinc-800 text-white font-bold py-4 rounded-2xl text-center hover:bg-zinc-700 transition-all"
          >
            BACK TO ARENA
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-sm font-mono font-bold tracking-wider">
                ⚔️ BATTLE #{currentQuestion + 1}
              </span>
              <div className="w-px h-4 bg-zinc-700"></div>
              <span className="text-zinc-400 text-sm font-mono">
                {currentQuestion + 1}/{quizData.questionsPerAttempt}
              </span>
            </div>

            <span
              className={`font-mono font-black text-lg ${
                timeLeft <= 5
                  ? "text-red-500 animate-pulse"
                  : timeLeft <= 10
                  ? "text-orange-400"
                  : "text-yellow-500"
              }`}
            >
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#3f3f46"
                    strokeWidth="5"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={
                      timeLeft <= 5
                        ? "#ef4444"
                        : timeLeft <= 10
                        ? "#f97316"
                        : "#eab308"
                    }
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={176}
                    strokeDashoffset={
                      176 - (timeLeft / quizData.timerPerQuestion) * 176
                    }
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black">
                  {timeLeft}
                </div>
              </div>
            </span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / quizData.questionsPerAttempt) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-[32px] p-6 md:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full">
              <span className="text-yellow-400 text-xs md:text-sm font-black tracking-wider">
                {quizData.title.toUpperCase()} • SEASON 1
              </span>
            </div>

            <div className="bg-zinc-800 px-4 py-2 rounded-full">
              <span className="text-yellow-500 font-black animate-pulse">
                🏆 SCORE: {score}
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-8">
            {question.text}
          </h1>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`
                  w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 
                  font-semibold text-base md:text-lg active:scale-95 disabled:cursor-not-allowed
                  ${
                    showFact
                      ? option === question.options[question.correct]
                        ? "bg-green-500/20 border-green-500 text-green-300"
                        : selectedAnswer !== "⏱️ Time's Up" && option === selectedAnswer
                        ? "bg-red-500/20 border-red-500 text-red-300"
                        : "bg-zinc-800/50 border-zinc-700 text-zinc-400"
                      : "bg-zinc-800/50 border-zinc-700 hover:border-yellow-500 hover:bg-zinc-700 hover:scale-[1.02]"
                  }
                `}
                disabled={showFact}
              >
                <span className="text-yellow-500 mr-3 font-mono font-bold">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showFact && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/30 rounded-[32px] p-8 max-w-xl w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-6">
              {isCorrect ? (
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <span className="text-4xl">✅</span>
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                  <span className="text-4xl">❌</span>
                </div>
              )}
              <h2 className="text-3xl font-black mb-2">
                {selectedAnswer === "⏱️ Time's Up"
                  ? "TIME'S UP!"
                  : isCorrect
                  ? "VICTORY!"
                  : "DEFEAT!"}
              </h2>

              <p className="text-zinc-400">
                {selectedAnswer === "⏱️ Time's Up"
                  ? "The clock defeated you..."
                  : isCorrect
                  ? "You struck with precision!"
                  : "The knowledge escaped you..."}
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-3 mb-3">
              <p className="text-zinc-400 text-sm mb-2">Your Answer</p>
              <p
                className={`font-bold text-lg ${
                  selectedAnswer === "⏱️ Time's Up"
                    ? "text-orange-400"
                    : isCorrect
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {selectedAnswer}
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-3 mb-4">
              <p className="text-green-400 text-sm mb-2">Correct Answer</p>
              <p className="font-bold text-white text-lg">
                {question.options[question.correct]}
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6 min-h-[180px]">
              <p className="text-yellow-400 text-sm mb-2">💡 DID YOU KNOW?</p>
              <p className="text-zinc-200 text-base leading-7">
                {question.fact}
              </p>
            </div>

            <button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-4 rounded-xl hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {currentQuestion === quizData.questionsPerAttempt - 1
                ? "VIEW RESULTS"
                : "CONTINUE BATTLE"}
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}