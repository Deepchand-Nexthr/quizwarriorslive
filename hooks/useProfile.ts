"use client";

import { useState, useEffect } from "react";
import { ProfileData } from "@/components/profile/types";
import { supabase } from "@/lib/supabase/client";

export function useProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      // Fetch profile data
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
   .select(`
  user_id,
  username,
  display_name,
  email,
  avatar_url,
  country,
  bio,
  joined_at,
  last_login,
  role
`)
        .eq("user_id", userId)
        .single();
        

      if (profileError) {
         console.error("Error fetching profile:", profileError);
        setProfile(null);
        setLoading(false);
        return;
      }

      if (!profileData) {
        setProfile(null);
        setLoading(false);
        return;
      }

      // Fetch user stats
      const { data: statsData, error: statsError } = await supabase
        .from("user_stats")
        .select(`
          xp,
          current_streak,
          quizzes_taken,
          correct_answers
        `)
        .eq("user_id", userId)
        .single();

      if (statsError) {
        console.error("Error fetching stats:", statsError);
        setProfile(null);
        setLoading(false);
        return;
      }

      // Fetch quiz history (latest 20)
      const { data: historyData, error: historyError } = await supabase
        .from("quiz_results")
        .select(`
          quiz_title,
          score,
          total_questions,
          created_at
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(20);

     if (historyError) {
  console.error("History Error:", historyError);
}



      // Map to ProfileData interface
      const mappedProfile: ProfileData = {
        id: profileData.user_id,
        username: profileData.username,
        fullName: profileData.display_name || "",
        country: profileData.country || "",
        avatar: profileData.avatar_url || "⚔️",
        bio: profileData.bio || "",
        xp: statsData?.xp || 0,
        streak: statsData?.current_streak || 0,
        quizzesPlayed: statsData?.quizzes_taken || 0,
        correctAnswers: statsData?.correct_answers || 0,
        achievements: [],
        badges: [],
        quizHistory: historyData?.map((item) => ({
          title: item.quiz_title || "Quiz",
          score: item.score || 0,
          total: item.total_questions || 0,
          date: item.created_at ? new Date(item.created_at).toISOString().split("T")[0] : "",
        })) || [],
        emailVerified: false,
isPremium: false,
        createdAt: profileData.joined_at || "",
        lastActiveAt: profileData.last_login || "",
      };

      setProfile(mappedProfile);
    } catch (error) {
      console.error("Error in fetchProfile:", error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);

      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      await fetchProfile(user.id);
    };

    loadProfile();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          await fetchProfile(session.user.id);
        } else if (event === "SIGNED_OUT") {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const updateProfile = async (updates: Partial<ProfileData>) => {
    if (!profile) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      console.error("No authenticated user");
      return;
    }

    // Map ProfileData fields to database columns
    const dbUpdates: any = {};
    if (updates.fullName !== undefined) dbUpdates.display_name = updates.fullName;
    if (updates.bio !== undefined) dbUpdates.bio = updates.bio;
    if (updates.country !== undefined) dbUpdates.country = updates.country;
    if (updates.avatar !== undefined) dbUpdates.avatar_url = updates.avatar;

    if (Object.keys(dbUpdates).length === 0) {
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        ...dbUpdates,
        last_login: new Date().toISOString(),
      })
      .eq("user_id", user.id);

    if (error) {
      console.error("Error updating profile:", error);
      return;
    }

    // Update local state
    setProfile((prev) => {
      if (!prev) return null;
      return { ...prev, ...updates };
    });
  };

  return { profile, loading, updateProfile };
}