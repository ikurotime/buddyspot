// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { State } from "../types/index.ts";

import { getCookies } from "../utils/cookies.ts";
import { supabase } from "../utils/supabaseClient.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const auth_token = getCookies(req.headers)["supabase.auth.token"] || "";
  const refresh_token = getCookies(req.headers)["supabase.auth.refreshToken"] ||
    "";

  if (auth_token && refresh_token) {
    const { data } = await supabase.auth.setSession({
      refresh_token: refresh_token,
      access_token: auth_token,
    });
    ctx.state.user = data.user;
  }

  return ctx.next();
}
