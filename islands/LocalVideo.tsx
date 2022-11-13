import { useEffect, useRef } from "preact/hooks";
import { createOffer, getUserMedia } from "../utils/WebRTC.ts";

export default function LocalVideo({ roomId }: { roomId: string }) {
  let localVideoRef: any = useRef();
  let pc: any = useRef();
  useEffect(() => {
    getUserMedia({localVideoRef,pc});
    createOffer({pc,roomId});
  }, []);
  return (
    <div class="glass md:absolute left-0 p-5 rounded-xl text-center shadow-lg text-white h-auto md:h-full w-full md:w-auto">
      <video
        class="rounded w-24 h-24 object-cover hover:cursor-pointer hover:scale-110 transition-all duration-200"
        ref={localVideoRef}
        autoPlay
      />
    </div>
  );
}
