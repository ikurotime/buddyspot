// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { State } from "../../types/index.ts";

export function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  if (!ctx.state.user) {
    return new Response("Not logged in", {
      status: 302,
      headers: { Location: "/auth/login" },
    });
  }

  return ctx.next();
}
