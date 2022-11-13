import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "https://esm.sh/v96/@supabase/gotrue-js@2.0.1/dist/module/index.d.ts";

import Layout from "../../components/Layout.tsx";
import HomeRooms from "../../islands/HomeRooms.tsx";
import LogoutButton from "../../islands/LogoutButton.tsx";
import { State } from "../../types/index.ts";
import { deleteCookie } from "../../utils/cookies.ts";
import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handlers<unknown, State> = {
  async GET(_, ctx) {
    const user: User | null = ctx.state.user;
    const { data: roomsData } = await supabase.from("rooms").select(
      "*",
    ).eq(
      "user_id",
      user?.id,
    );

    return ctx.render({ user, roomsData });
  },
  POST(req, ctx) {
    const body1 = JSON.stringify({ api: "LOGOUT" });
    const resp = new Response(body1);
    supabase.auth.signOut();
    deleteCookie(resp.headers, "supabase.auth.token", { path: "/" });
    deleteCookie(resp.headers, "supabase.auth.refreshToken", { path: "/" });

    return resp;
  },
};
export default function index({ data }: PageProps) {
  return (
    <Layout centered={false}>
      <div class="h-full flex flex-row">
        <div className="bg-gray-700 p-5 rounded-lg h-full shadow fixed sm:relative transition duration-300 -translate-x-[150px] sm:translate-x-0">
          <a className="p-2" href="/home">
            <img src="/home.svg" />
          </a>
          <LogoutButton />
        </div>
        <div className="flex flex-col w-full h-full">
          <div class="flex w-full h-16 justify-between px-10 items-center">
            <span className="text-3xl font-bold">Home</span>
            <a
              href="/home/create"
              className="px-5 py-3 transition duration-300 bg-green-400 rounded hover:bg-green-500"
            >
              Create a room
            </a>
          </div>
          <div className="grid w-full h-full overflow-y-auto">
            <HomeRooms data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
