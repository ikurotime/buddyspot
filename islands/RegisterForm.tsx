import { useState } from "preact/hooks";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeat_password: "",
  });
  // set a onChangeValue function to update the formData state
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // TODO: add register function
  const handleRegister = async (e: { preventDefault: () => void }) => {
    setError("");
    setLoading(true);
    e.preventDefault();
    if(formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    if(formData.password !== formData.repeat_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      //await login(formData.email, formData.password);

      const json = await res.json();
      console.log(json);
      const { user, error, status, message } = json;

      if (status >= 400) {
        setError(message);
        throw Error(message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw Error(err?.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-3 m-3" onSubmit={handleRegister}>
      <input
        name="email"
        onChange={onChange}
        type="email"
        placeholder="name@email.com"
        className={"py-2 px-4 rounded-md text-white bg-gray-600" + (error ? " border border-red-500" : "")}
      />
      <input
        name="password"
        onChange={onChange}
        type="password"
        placeholder="Your password"
        className={"py-2 px-4 rounded-md text-white bg-gray-600" + (error ? " border border-red-500" : "")}
      />
      <input
        name="repeat_password"
        onChange={onChange}
        type="password"
        placeholder="Repeat you password"
        className={"py-2 px-4 rounded-md text-white bg-gray-600" + (error ? " border border-red-500" : "")}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={"bg-green-400 text-black p-2 rounded-md w-24 self-end" + (loading ? " opacity-50" : "")}
      >
        {loading ? <span>loading...</span> : "Register"}
      </button>
    </form>
  );
}
