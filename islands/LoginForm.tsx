import { useState } from "preact/hooks";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // set a onChangeValue function to update the formData state
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    setError("");
    e.preventDefault();
    try {
      //const res = await login(formData.email, formData.password);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const json = await res.json();

      const { user, error, status, message } = json;

      if (status === 400) {
        setError(message);
        throw Error(message);
      }
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/home";
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
        throw Error(err?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 m-3 text-white"
      onSubmit={handleLogin}
    >
      <input
        name="email"
        onChange={onChange}
        type="text"
        placeholder="name@email.com"
        className={"py-2 px-4 rounded-md bg-gray-600" +
          (error ? " border border-red-500" : "")}
      />
      <input
        name="password"
        onChange={onChange}
        type="password"
        placeholder="strong-password"
        className={"py-2 px-4 rounded-md bg-gray-600" +
          (error ? " border border-red-500" : "")}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={"bg-green-400 p-2 rounded-md text-black w-24 self-end" +
          (loading ? " opacity-50" : "")}
      >
        {loading ? <span>loading...</span> : "Sign in"}
      </button>
    </form>
  );
}
