"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { createProfile, checkUsernameAvailability } from "@/lib/supabase/profile";

const AVATARS = ["⚔️", "🏹", "🗡️", "🛡️", "⚡", "🔥", "👑", "🐉", "🦅", "🐺"];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Brazil",
  "South Africa",
  "Other",
];

export default function CreateProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    country: "India",
    avatar: "⚔️",
    bio: "",
  });

  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      // Check if user already has a profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profile) {
        router.push("/profile");
        return;
      }

      setUserId(user.id);
    };

    checkAuth();
  }, [router]);

  const validateUsername = (username: string): string | null => {
    if (username.length < 3) return "Username must be at least 3 characters";
    if (username.length > 20) return "Username must be at most 20 characters";
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers, and underscores";
    }
    return null;
  };

  const handleUsernameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, username: value });

    // Clear previous states
    setUsernameError(null);
    setUsernameAvailable(null);

    // Validate format
    const validationError = validateUsername(value);
    if (validationError) {
      setUsernameError(validationError);
      return;
    }

    if (value.length >= 3) {
      setCheckingUsername(true);
      try {
        const available = await checkUsernameAvailability(value);
        setUsernameAvailable(available);
        if (!available) {
          setUsernameError("Username is already taken");
        }
      } catch (err) {
        console.error("Username check failed:", err);
      } finally {
        setCheckingUsername(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!userId) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }

    // Final username validation
    const validationError = validateUsername(formData.username);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    // Check availability one more time
    const available = await checkUsernameAvailability(formData.username);
    if (!available) {
      setError("Username is already taken");
      setLoading(false);
      return;
    }

    try {
      await createProfile(userId, formData);
      router.push("/profile");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to create profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-3xl p-10 max-w-md w-full shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
            👑 Create Warrior Profile
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Join the arena and begin your journey!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-400 mb-1">
              Username <span className="text-yellow-400">*</span>
            </label>
            <div className="relative">
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleUsernameChange}
                required
                className={`w-full bg-zinc-800/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${
                  usernameError
                    ? "border-red-500 focus:border-red-500"
                    : usernameAvailable === true
                    ? "border-green-500 focus:border-green-500"
                    : "border-zinc-700 focus:border-yellow-500"
                }`}
                placeholder="Enter unique username"
                disabled={loading}
              />
              {checkingUsername && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-500"></div>
                </div>
              )}
              {usernameAvailable === true && !checkingUsername && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">✓</div>
              )}
            </div>
            {usernameError && (
              <p className="text-red-400 text-xs mt-1">{usernameError}</p>
            )}
            {usernameAvailable === true && !usernameError && (
              <p className="text-green-400 text-xs mt-1">✓ Username is available</p>
            )}
            <p className="text-zinc-500 text-xs mt-1">
              3-20 characters • letters, numbers, underscores only
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-zinc-400 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              placeholder="Your display name"
              disabled={loading}
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-zinc-400 mb-1">
              Country
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              disabled={loading}
            >
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Avatar
            </label>
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatar })}
                  className={`w-12 h-12 text-2xl rounded-xl transition-all ${
                    formData.avatar === avatar
                      ? "bg-yellow-500/20 border-2 border-yellow-500 scale-110"
                      : "bg-zinc-800/50 border border-zinc-700 hover:border-zinc-500"
                  }`}
                  disabled={loading}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-zinc-400 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              maxLength={150}
              rows={3}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              placeholder="Tell the arena about yourself..."
              disabled={loading}
            />
            <p className="text-zinc-500 text-xs mt-1 text-right">
              {formData.bio.length}/150
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <p className="text-yellow-400 text-xs">
              ⚠️ Username can only be created once. Choose wisely!
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !!usernameError || !usernameAvailable || !formData.username}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-4 rounded-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "CREATING PROFILE..." : "CREATE WARRIOR PROFILE"}
          </button>

          <Link
            href="/"
            className="block w-full bg-zinc-800 text-white font-bold py-4 rounded-2xl text-center hover:bg-zinc-700 transition-all"
          >
            BACK TO ARENA
          </Link>
        </form>
      </div>
    </main>
  );
}