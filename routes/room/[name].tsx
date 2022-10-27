import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import { getCookies } from "../../utils/cookies.ts";
import { supabase } from "../../utils/supabaseClient.ts";
export const handler: Handlers = {
  async GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || null;
    if (!cookie) {
      return Response.redirect("http://localhost:8000/auth/login");
    }
    const user = cookie ? JSON.parse(cookie) : null;
    const roomId = ctx.params.name;
    console.log(user.id);
    const { data: roomsData, error } = await supabase.from("rooms").select(
      "*,creator_data:profiles(id,username)",
    ).eq(
      "id",
      roomId,
    ).eq("user_id", user.id);
    console.log(roomsData);
    console.log(error);
    return ctx.render(roomsData![0]);
  },
};
export default function Greet({ data }: PageProps) {
  return (
    <Layout>
      <img
        src={data.room_bg_image}
        alt="Room backgound"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
      />
      <div
        className="flex flex-col gap-3 md:flex-row items-center justify-center h-full relative"
        id="id_main_screen"
      >
        <div className="glass md:absolute top-0 px-5 py-5 rounded-xl text-center shadow-lg text-white ">
          <h1 className="text-base font-bold">
            {data.room_name} - {data.creator_data.username}
          </h1>
        </div>
        <div class="glass md:absolute left-0 p-5 rounded-xl text-center shadow-lg text-white h-24 md:h-full w-full md:w-24">
        </div>
        <div class="glass md:absolute right-0 p-5 rounded-xl text-center shadow-lg text-white h-full w-full md:w-64">
        </div>
      </div>
    </Layout>
  );
}
