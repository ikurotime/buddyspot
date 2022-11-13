import { Handler } from "$fresh/server.ts";
import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { title, image } = body;
  const { data } = await supabase.auth.getUser();
  console.log(data);

  const { data: sbData, error } = await supabase.from("rooms").insert({
    user_id: data.user?.id,
    room_name: title,
    room_bg_image: image,
  }).select();
  if (error) {
    console.log(error);
  }

  return new Response(JSON.stringify(sbData![0]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
