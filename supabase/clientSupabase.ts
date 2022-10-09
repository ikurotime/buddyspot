import { createClient } from "npm:@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  Deno.env.get("SUPABASE_URL"),
  Deno.env.get("SUPABASE_KEY"),
);
