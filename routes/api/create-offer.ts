import { Handler } from "$fresh/server.ts";

import { supabase } from "../../utils/supabaseClient.ts";

export const handler: Handler = async (req: Request) => {
  const body = await req.json();
  const { offer, roomId } = body;
  console.log(offer);
  const user = await supabase.auth.getUser();
  console.log(user);
  
  const res = await supabase.from("offers").insert([{
    roomId,
    offer,
  }]);

  /* const { data, error } = await supabase.from("rooms").insert({
    user_id: user?.id,
    room_name: title,
    room_bg_image: image,
  }).select(); */

  console.log({ res });

  return new Response(JSON.stringify(offer), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
