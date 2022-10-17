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
export default function RegisteredEmail() {
  const [email, setEmail] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e: any) => {
    setEmail(e.target.value);
  };
  const submitEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/registered-emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((res) => {
      if (res.status === 200) {
        LaunchConfetti();
        LaunchConfetti();
        setEmail("");
        setRegisteredEmail(email);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };
  return (
    <div className="flex flex-col items-center gap-5">
      {registeredEmail
        ? (
          <>
            <span className="relative inline-block mt-3 text-gray-800 text-xl sm:text-4xl sm:leading-none md:text-5xl xl:text-3xl">
              Thank you for registering your email! &nbsp;<button
                onClick={LaunchConfetti}
              >
                🎉
              </button>
            </span>
            <span className="relative inline-block text-gray-800 text-lg sm:text-lg sm:leading-none md:text-xl xl:text-2xl">
              You will be the first to know when we launch!
            </span>
          </>
        )
        : (
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
              disabled={isLoading}
              className="p-3 rounded-r text-xl bg-gray-600 text-white"
            >
              {isLoading ? "Loading..." : "Notify me!"}
            </button>
          </form>
        )}
    </div>
  );
}
