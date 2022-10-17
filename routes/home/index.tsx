import { Handlers } from "$fresh/server.ts";

import Layout from "../../components/Layout.tsx";
import HomeRooms from "../../islands/HomeRooms.tsx";
import { getCookies } from "../../utils/cookies.ts";
export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || null;
    if (!cookie) {
      const domain = req.headers.get("host");
      if (domain === "localhost:8000") {
        return Response.redirect("http://localhost:8000/auth/login/");
      }
      return Response.redirect(`https://${domain}/auth/login/`);
    }
    return ctx.render(null);
  },
};
export default function index() {
  return (
    <Layout centered={false}>
      <div class="h-full flex flex-row">
        <div className="bg-yellow-200 p-5 rounded-lg h-full border-2 border-yellow-400 shadow fixed sm:relative transition duration-300 -translate-x-[100px] sm:translate-x-0">
          <a className="p-2" href="/home">
            <img src="/home.svg" />
          </a>
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
            <HomeRooms />
          </div>
        </div>
      </div>
    </Layout>
  );
}
