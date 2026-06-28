"use client";

import { useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileTabs from "@/components/profile/ProfileTabs";
import EditProfileModal from "@/components/profile/EditProfileModal";
import { ProfileData } from "@/components/profile/types";
import Link from "next/link";

export default function ProfilePage() {
  const { profile, loading, updateProfile } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-yellow-400 text-xl">⚔️ Loading Warrior Profile...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-6xl mb-4">⚠️</div>
        <p>Profile not found. Please try again.</p>
      </div>
    );
  }

  const handleSaveProfile = (updatedData: Partial<ProfileData>) => {
    updateProfile(updatedData);
    setIsModalOpen(false);
  };

return (
  <div className="min-h-screen bg-black text-white">
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium"
      >
        ← Back to Arena
      </Link>

      <ProfileHeader profile={profile} />
      <ProfileStats profile={profile} />
      <ProfileTabs profile={profile} />

    
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 px-6 py-2.5 rounded-2xl border border-yellow-400/30 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
        >
          <span>✏️</span> Edit Profile
        </button>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  </div>
);
}