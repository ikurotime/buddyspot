import { createClient } from "https://esm.sh/@supabase/supabase-js@1.35.6";

export const sb = createClient(
  Deno.env.get("SUPABASE_URL") as string,
  Deno.env.get("SUPABASE_KEY") as string,
);
