"use client";

import { ProfileData } from "./types";
import { FaTrophy, FaCheckCircle, FaBullseye, FaFire, FaBolt, FaMedal } from "react-icons/fa";

interface ProfileStatsProps {
  profile: ProfileData;
}

export default function ProfileStats({ profile }: ProfileStatsProps) {
  const accuracy = profile.quizzesPlayed > 0
    ? Math.round((profile.correctAnswers / (profile.quizzesPlayed * 15)) * 100)
    : 0;

  const bestCategory = profile.quizHistory.length > 0
    ? profile.quizHistory.reduce((a, b) => (a.score / a.total > b.score / b.total ? a : b))
    : null;

  const stats = [
    { icon: FaTrophy, label: "Quizzes", value: profile.quizzesPlayed, color: "text-yellow-400" },
    { icon: FaCheckCircle, label: "Correct", value: profile.correctAnswers, color: "text-green-400" },
    { icon: FaBullseye, label: "Accuracy", value: `${accuracy}%`, color: "text-blue-400" },
    { icon: FaFire, label: "Streak", value: profile.streak, color: "text-orange-400" },
    { icon: FaBolt, label: "Total XP", value: profile.xp, color: "text-yellow-400" },
    { icon: FaMedal, label: "Best Category", value: bestCategory?.title.replace(" Quiz", "") || "—", color: "text-purple-400" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass-light rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-200 cursor-default"
        >
          <stat.icon className={`${stat.color} text-2xl mx-auto mb-1`} />
          <div className="text-xs text-gray-400">{stat.label}</div>
          <div className="text-lg font-bold text-white truncate">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}