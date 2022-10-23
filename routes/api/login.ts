import { Handler } from "$fresh/server.ts";
import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return new Response(JSON.stringify(error));
  }
  const defaultProps = `HttpOnly; Path=/; SameSite=Lax; Max-Age=604800; Expires=${new Date( Date.now() + 604800000).toUTCString()};`
  const response = new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "set-cookie":
        `supabase.auth.token=${data.session?.access_token}; ${defaultProps} }`, 
    },
  });
  response.headers.append(
    "set-cookie",
    `supabase.auth.refreshToken=${data.session?.refresh_token}; ${defaultProps};`,
  );
  response.headers.append(
    "set-cookie",
    `user=${JSON.stringify(data.user)}; ${defaultProps};`,
  );

  return response;
};
