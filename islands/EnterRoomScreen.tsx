import { useEffect, useRef, useState } from "preact/hooks";
import { getUserMedia } from "../utils/WebRTC.ts";
import LocalVideo from "./LocalVideo.tsx";

export default function EnterRoomScreen({ data }: any) {
  const [enterRoom, setEnterRoom] = useState<string>("");
  const [changeComponent, setChangeComponent] = useState<boolean>(false);
  let localVideoRef: any = useRef();
  let pc: any = useRef();
  const transitionScreen = () => {
    console.log(data)
    setEnterRoom("opacity-0");
    setTimeout(() => {
      setChangeComponent(true);
    }, 300);
  };
  useEffect(() => {
    getUserMedia({ localVideoRef, pc });
  }, []);
  return (
    changeComponent
      ? (
        <div
          className="flex flex-col gap-3 md:flex-row items-center justify-center h-full relative"
          id="id_main_screen"
        >
          <div className="glass md:absolute top-0 px-5 py-5 rounded-xl text-center shadow-lg text-white ">
            <h1 className="text-base font-bold">
              {data.roomsData.room_name} -{" "} 
              {data.roomsData.creator_data.username}
            </h1>
          </div>
          <LocalVideo roomId={data?.roomId} />
          <div class="glass md:absolute right-0 p-5 rounded-xl text-center shadow-lg text-white h-full w-full md:w-64">
          </div>
        </div>
      )
      : (
        <div
          class={"absolute top-0 left-0 w-screen h-screen glass grid place-content-center transition-all duration-300 " +
            enterRoom}
        >
          <div className="flex flex-col bg-gray-800 dark:bg-gray-800 dark:text-white px-5 py-7 rounded-xl text-center shadow-lg text-white items-center justify-center gap-5 h-96">
            <h1 className="text-2xl font-bold">
              {data.roomsData.room_name} -{" "}
              {data.roomsData.creator_data.username}
            </h1>
            <h2 className="text-2xl font-bold">Is your camera configured?</h2>
            <video
              class={`rounded-full w-36 h-36 object-cover  hover:scale-110 transition-all duration-200 ${
                enterRoom ? "hover:cursor-default" : "hover:cursor-pointer"
              }`}
              ref={localVideoRef}
              autoPlay
            />
            <button
              className={`bg-green-400 px-4 py-2 rounded-md text-black ${
                enterRoom ? "hover:cursor-default" : "hover:cursor-pointer"
              }`}
              onClick={transitionScreen}
            >
              Enter Room
            </button>
          </div>
        </div>
      )
  );
}
