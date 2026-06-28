"use client";

import { useState, useEffect } from "react";
import { ProfileData } from "./types";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: Partial<ProfileData>) => void;
}

const AVATARS = ["⚔️", "🔥", "👑", "🧠", "🎯", "🏆", "🛡️", "⚡"];

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  onSave,
}: EditProfileModalProps) {
  const [fullName, setFullName] = useState(profile.fullName);
  const [bio, setBio] = useState(profile.bio);
  const [country, setCountry] = useState(profile.country);
  const [avatar, setAvatar] = useState(profile.avatar);

  useEffect(() => {
    if (isOpen) {
      setFullName(profile.fullName);
      setBio(profile.bio);
      setCountry(profile.country);
      setAvatar(profile.avatar);
    }
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ fullName, bio, country, avatar });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4 animate-fadeIn">
      <div className="glass rounded-3xl w-full max-w-lg p-6 md:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white">⚔️ Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Bio</label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Warrior motto..."
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-2">Avatar</label>
            <div className="flex flex-wrap gap-3 text-3xl">
              {AVATARS.map((emoji) => (
                <span
                  key={emoji}
                  onClick={() => setAvatar(emoji)}
                  className={`cursor-pointer hover:scale-125 transition-all rounded-xl p-1.5 ${
                    avatar === emoji
                      ? "border-2 border-yellow-400 bg-yellow-400/10"
                      : "border-2 border-transparent hover:border-yellow-400/50"
                  }`}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-2xl transition-all hover:scale-[1.02]"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}