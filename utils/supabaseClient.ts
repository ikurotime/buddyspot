import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js?dts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_KEY") as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
