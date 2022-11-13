// Default configuration - Change these if you have a different STUN or TURN server.
const configuration = {
  iceServers: [
    {
      urls: [
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};

export const getUserMedia = ({localVideoRef,pc}: any) => {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  }).then((stream) => {
    localVideoRef.current.srcObject = stream;
  }).catch((err) => {
    console.log(err);
  });
  const _pc = new RTCPeerConnection();
  _pc.onicecandidate = (e) => {
    if (e.candidate) {
      console.log(e.candidate);
    }
  };
  _pc.oniceconnectionstatechange = (e) => {
    console.log(e);
  };
  _pc.ontrack = (e) => {
    console.log(e);
  };
  pc.current = _pc;
};
export const createOffer = ({pc,roomId}:any) => {
  pc.current.createOffer({
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1,
  }).then((offer: any) => {
    console.log(offer); // send to supabase
    fetch("/api/create-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offer,
        roomId,
      }),
    });
    pc.current.setLocalDescription(offer);
  }).catch((err: Error) => {
    console.log(err);
  });
};