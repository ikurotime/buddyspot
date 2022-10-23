import { dbRoom, HomeData } from "../types/index.ts";

export default function HomeRooms({ data }: HomeData) {
  return (
    <div className=" flex-1  h-full text-black dark:text-white">
      {data.roomsData.length === 0
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
            {data.roomsData.map((room: dbRoom) => (
              <div
                key={room.id}
                className="w-full max-w-sm h-72 mx-auto relative flex flex-col-reverse rounded-2xl cursor-pointer "
                onClick={() => {
                  window.location.href = "/room/" + room?.id;
                }}
              >
                <img
                  className="absolute h-full w-full object-cover rounded-2xl border-2 border-gray-500 dark:border-gray-500"
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
