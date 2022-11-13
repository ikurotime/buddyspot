import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "../../../components/Layout.tsx";
import EnterRoomScreen from "../../../islands/EnterRoomScreen.tsx";
import { supabase } from "../../../utils/supabaseClient.ts";
export const handler: Handlers = {
  async GET(req, ctx) {
    const user = await supabase.auth.getUser();
    if (user.data.user === null) {
      return Response.redirect("http://localhost:8000/auth/login");
    }
    const roomId = ctx.params.name;
    const { data: roomsData, error } = await supabase.from("rooms").select(
      "*,creator_data:profiles(id,username)",
    ).eq(
      "id",
      roomId,
    ).eq("user_id", user.data.user?.id);

    if (error) {
      return Response.redirect("http://localhost:8000/home");
    }
    return ctx.render({ roomsData: roomsData![0], roomId });
  },
};
export default function Greet({ data }: PageProps) {
  return (
    <Layout>
      <img
        src={data.roomsData.room_bg_image}
        alt="Room backgound"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
      />
      <EnterRoomScreen data={data} />
    </Layout>
  );
}
