import confetti from "confetti";
import { useState } from "preact/hooks";
const LaunchConfetti = () => {
  confetti({
    particleCount: 70,
    angle: 60,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 70,
    angle: 120,
    origin: { x: 1 },
  });
};

export default function Confetti() {
  const [email, setEmail] = useState("");
  const onChange = (e: any) => {
    setEmail(e.target.value);
  };
  const submitEmail = (e: any) => {
    e.preventDefault();
    console.log(email);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((res) => {
      if (res.status === 200) {
        LaunchConfetti();
      }
    });

    if (email) {
      LaunchConfetti();
      setEmail("");
    }
  };
  return (
    <form className="flex" onSubmit={submitEmail}>
      <input
        className="rounded-l text-base px-3 w-72"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={onChange}
      />
      <button
        type="submit"
        className="p-3 rounded-r text-xl bg-gray-600 text-white"
      >
        Notify me!
      </button>
    </form>
  );
}
