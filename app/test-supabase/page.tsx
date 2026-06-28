"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export default function TestPage() {
  useEffect(() => {
    async function test() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("USER =", user);
    }

    test();
  }, []);

  return <div>Check Console</div>;
}