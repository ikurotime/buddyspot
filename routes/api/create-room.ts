import { Handler } from "$fresh/server.ts";
import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { user, title, image } = body;

  const { data, error } = await supabase.from("rooms").insert({
    user_id: user?.id,
    room_name: title,
    room_bg_image: image,
  }).select();
  if (error) {
    console.log(error);
  }
  console.log(data);

  console.log(data);

  return new Response(JSON.stringify(data![0]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
