import { supabase } from "../utils/supabaseClient.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import { useEffect, useState } from "preact/hooks";
import { getCookies } from "../utils/cookies.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || null;
    if (!cookie) {
      return Response.redirect("http://localhost:8000/auth/login");
    }
    return ctx.render(JSON.parse(cookie));
  },
};
export default function HomeRooms({ data }: PageProps) {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [rooms, setRooms] = useState<any[]>([]);
  const fetchedRooms: any[] = [];
  console.log(data);
  /*   const enterRoom = async (room: any) => {
    setLoading(true);
    navigate('/room/' + room.id);
    dispatch({
      type: 'SET_ROOM',
      payload: room
    });
    setLoading(false);
  };
 */
  useEffect(() => {
    const suscription = supabase
      .from("rooms")
      .on("*", (payload) => {
        switch (payload.eventType) {
          case "INSERT":
            setRooms((prev) => [...prev, payload.new]);
            break;
          case "UPDATE":
            setRooms((prev) =>
              prev.map((
                room,
              ) => (room.id === payload.new.id ? payload.new : room))
            );
            break;
          case "DELETE":
            setRooms((prev) =>
              prev.filter((room) => room.id !== payload.old.id)
            );
            break;
        }
      })
      .subscribe();
    const getRoomInfo = async () => {
      const { data, error } = await supabase.from("rooms").select("*").eq(
        "user_id",
        user?.id,
      );
      if (error) throw new Error(error.message);
      setRooms(data);
      setIsFetching(false);
    };
    if (fetchedRooms.length === 0) {
      getRoomInfo();
    }
    return () => {
      supabase.removeSubscription(suscription);
    };
  }, []);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div className=" flex-1 overflow-y-scroll h-full text-black dark:text-white">
      {rooms.length === 0
        ? (
          <>
            <h2>Create your first room</h2>
            <button
              className="text-white"
              onClick={() => {
                //navigate('/home/create');
              }}
            >
              {" "}
              Create a room
            </button>
          </>
        )
        : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 ">
            {rooms.map((room: any) => (
              <div
                key={room.id}
                className="w-full max-w-sm h-72 mx-auto relative flex flex-col-reverse rounded-2xl cursor-pointer "
                onClick={() => {
                  //enterRoom(room);
                }}
              >
                <img
                  className="absolute h-full w-full object-cover rounded-2xl border-2 border-yellow-100 dark:border-gray-500"
                  src={room.room_bg_image}
                  alt="Default Image"
                />
                <div className=" bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 glass p-4 rounded-b-2xl  ">
                  <h5 className="text-white">{room.room_name}</h5>
                  <h6 className="text-white">{room.room_name}</h6>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
