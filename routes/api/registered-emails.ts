import { Handler } from "$fresh/server.ts";
import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { email } = body;

  const { statusText } = await supabase.from("registered_emails").insert({
    email,
  });

  return new Response(JSON.stringify(statusText), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
