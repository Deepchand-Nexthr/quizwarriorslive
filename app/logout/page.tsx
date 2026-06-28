"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/supabase/auth";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await signOut();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        router.push("/");
        router.refresh();
      }
    };

    performLogout();
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mx-auto mb-4">
          <span className="text-4xl">👋</span>
        </div>
        <h2 className="text-2xl font-black text-yellow-400">Signing Out...</h2>
        <p className="text-zinc-400 mt-2 text-sm">See you soon, Warrior!</p>
        <div className="mt-6 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        </div>
      </div>
    </main>
  );
}