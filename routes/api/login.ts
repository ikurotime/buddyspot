import { Handler } from "$fresh/server.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;
  const apikey = Deno.env.get("SUPABASE_KEY") as string;
  console.log({ apikey });
  const res = await fetch(
    "https://ljgeixztpzcldgicupdn.supabase.co/auth/v1/token?grant_type=password",
    {
      method: "POST",
      headers: {
        "apikey": apikey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const data = await res.json();
  const { user } = data;
  const cookie_duration = res.headers.get("set-cookie")?.split(";", 5);
  cookie_duration?.shift();

  const cookies = `user=${JSON.stringify(user)};${
    cookie_duration?.join(";")
  }; Secure`;
  //return multiple cookies in response
  const response = new Response(JSON.stringify(data));

  response.headers.append("set-cookie", cookies);

  return response;
};
