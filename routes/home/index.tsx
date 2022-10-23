import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "../../components/Layout.tsx";
import HomeRooms from "../../islands/HomeRooms.tsx";
import LogoutButton from "../../islands/LogoutButton.tsx";
import { deleteCookie, getCookies } from "../../utils/cookies.ts";
import { supabase } from "../../utils/supabaseClient.ts";
export const handler: Handlers = {
  async GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || "";
    if (!cookie) {
      const domain = req.headers.get("host");
      if (domain === "localhost:8000") {
        return Response.redirect("http://localhost:8000/auth/login/");
      }
      return Response.redirect(`https://${domain}/auth/login/`);
    }
    const user = cookie ? JSON.parse(cookie) : null;
    const { data: roomsData } = await supabase.from("rooms").select(
      "*",
    ).eq(
      "user_id",
      user?.id
    );
    return ctx.render({user, roomsData});
  },
  POST(req, ctx) {
    const body1 = JSON.stringify({api:'LOGOUT'});
    const resp = new Response(body1);

    deleteCookie(resp.headers, "user",{path:"/"});
    deleteCookie(resp.headers, "supabase.auth.token",{path:"/"});
    deleteCookie(resp.headers, "supabase.auth.refreshToken",{path:"/"});

  return resp;
  },
};
export default function index({ data }: PageProps) {
  return (
    <Layout centered={false}>
      <div class="h-full flex flex-row">
        <div className="bg-yellow-200 p-5 rounded-lg h-full border-2 border-yellow-400 shadow fixed sm:relative transition duration-300 -translate-x-[100px] sm:translate-x-0">
          <a className="p-2" href="/home">
            <img src="/home.svg" />
          </a>
       <LogoutButton/>
        </div>
        <div className="flex flex-col w-full h-full">
          <div class="flex w-full h-16 justify-between px-10 items-center">
            <span className="text-3xl font-bold">Home</span>
            <a
              href="/home/create"
              className="px-5 py-3 rounded bg-yellow-300 hover:bg-yellow-400 transition duration-300"
            >
              Create a room
            </a>
          </div>
          <div className="grid w-full h-full">
            <HomeRooms data={data}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
