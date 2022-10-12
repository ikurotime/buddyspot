import { Handler } from "$fresh/server.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;

  const res = await fetch(
    "https://ljgeixztpzcldgicupdn.supabase.co/auth/v1/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: Deno.env.get("SUPABASE_KEY") as string,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );
  const data = await res.json();
  return new Response(JSON.stringify(data));
};
