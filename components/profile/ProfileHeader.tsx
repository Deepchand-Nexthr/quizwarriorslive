"use client";

import { ProfileData, XPStats } from "./types";
import { FaGlobeAsia, FaBriefcase } from "react-icons/fa";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const level = Math.floor(profile.xp / 1000) + 1;
  const nextLevelXP = level * 1000;
  const prevLevelXP = (level - 1) * 1000;
  const progress = ((profile.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

  return (
    <header className="glass rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-6 items-center">
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="text-6xl md:text-7xl bg-black/40 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border border-yellow-400/30 shadow-xl">
          {profile.avatar}
        </div>
        <div className="md:hidden">
          <div className="text-2xl font-bold text-white">{profile.fullName}</div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-yellow-400/90">
            <span>⭐ Level {level}</span>
            <span>•</span>
            <span>⚡ {profile.xp} XP</span>
          </div>
        </div>
      </div>

      {/* Middle Info */}
      <div className="hidden md:block">
        <div className="text-3xl font-bold text-white">{profile.fullName}</div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-yellow-400/80">
          <span className="bg-yellow-400/10 px-3 py-0.5 rounded-full border border-yellow-400/30">
            🏆 {profile.bio}
          </span>
          <span>
            <FaGlobeAsia className="inline mr-1" /> {profile.country}
          </span>
          <span>
            <FaBriefcase className="inline mr-1" /> {profile.bio}
          </span>
        </div>
      </div>

      {/* XP Progress */}
      <div className="w-full md:w-64 space-y-1">
        <div className="flex justify-between text-xs text-gray-400">
          <span>XP</span>
          <span>{profile.xp} / {nextLevelXP}</span>
        </div>
        <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-yellow-400/70">
          <span>Level {level}</span>
          <span>{nextLevelXP - profile.xp} XP to next level</span>
        </div>
      </div>
    </header>
  );
}