"use client";

import { useState } from "react";
import { ProfileData } from "./types";

interface ProfileTabsProps {
  profile: ProfileData;
}

export default function ProfileTabs({ profile }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "badges">("overview");

  const tabs = [
    { id: "overview" as const, label: "Overview" },
    { id: "history" as const, label: "Quiz History" },
    { id: "badges" as const, label: "Badges" },
  ];

  return (
    <div className="glass rounded-3xl p-1">
      <div className="flex border-b border-yellow-400/10 px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-yellow-400/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5 min-h-[280px]">
        {activeTab === "overview" && <OverviewTab profile={profile} />}
        {activeTab === "history" && <HistoryTab profile={profile} />}
        {activeTab === "badges" && <BadgesTab profile={profile} />}
      </div>
    </div>
  );
}

function OverviewTab({ profile }: { profile: ProfileData }) {
  const earned = profile.achievements.filter(a => a.earned).length;
  const total = profile.achievements.length;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-light p-4 rounded-2xl">
          <span className="text-gray-400 text-xs">Rank</span>
          <div className="text-xl font-bold text-yellow-400">#42</div>
        </div>
        <div className="glass-light p-4 rounded-2xl">
          <span className="text-gray-400 text-xs">Favorite Category</span>
          <div className="text-xl font-bold text-white">Salesforce</div>
        </div>
        <div className="glass-light p-4 rounded-2xl">
          <span className="text-gray-400 text-xs">Achievements</span>
          <div className="text-xl font-bold text-white">{earned}/{total}</div>
        </div>
      </div>

      <div>
        <span className="text-gray-400 text-xs block mb-2">🏅 Achievements ({earned} earned)</span>
        <div className="flex flex-wrap gap-3">
          {profile.achievements.map((a) => (
            <span
              key={a.id}
              className={`text-2xl bg-black/30 p-2 rounded-xl border border-yellow-400/10 transition-all ${
                a.earned ? "hover:scale-110" : "opacity-40 grayscale"
              }`}
              title={a.earned ? a.name : "🔒 Locked"}
            >
              {a.icon} {!a.earned && "🔒"}
            </span>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-500">
        ⚔️ "{profile.bio}" · {profile.country}
      </div>
    </div>
  );
}

function HistoryTab({ profile }: { profile: ProfileData }) {
  if (profile.quizHistory.length === 0) {
    return <div className="text-gray-400 text-center py-8">No quiz history yet. Start a battle!</div>;
  }

  return (
    <div className="space-y-3">
      {profile.quizHistory.map((quiz, index) => (
        <div
          key={index}
          className="glass-light p-4 rounded-2xl flex flex-wrap justify-between items-center hover:bg-white/5 transition"
        >
          <div>
            <span className="font-medium text-white">{quiz.title}</span>
            <span className="text-xs text-gray-400 ml-3">{quiz.date}</span>
          </div>
          <div className="text-yellow-400 font-bold">
            {quiz.score}/{quiz.total}
          </div>
        </div>
      ))}
    </div>
  );
}

function BadgesTab({ profile }: { profile: ProfileData }) {
  if (profile.badges.length === 0) {
    return <div className="text-gray-400 text-center py-8">No badges earned yet. Keep fighting!</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {profile.badges.map((badge) => (
        <div
          key={badge.id}
          className="glass-light p-4 rounded-2xl text-center w-32 hover:scale-105 transition-transform cursor-default"
        >
          <div className="text-4xl">{badge.icon}</div>
          <div className="text-xs text-gray-300 mt-1">{badge.name}</div>
        </div>
      ))}
    </div>
  );
}