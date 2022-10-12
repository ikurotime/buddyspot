import { useState } from "preact/hooks";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
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
  // TODO: add register function
  const handleLogin = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
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
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw Error(err?.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-3 m-3" onSubmit={handleLogin}>
      <input
        name="email"
        onChange={onChange}
        type="text"
        placeholder="name@email.com"
        className="py-2 px-4 rounded-md border border-gray-200"
      />
      <input
        name="password"
        onChange={onChange}
        type="password"
        placeholder="Your password"
        className="py-2 px-4 rounded-md border border-gray-200"
      />
      <input
        name="repeat_password"
        onChange={onChange}
        type="password"
        placeholder="Repeat you password"
        className="py-2 px-4 rounded-md border border-gray-200"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-300 dark:bg-yellow-400 p-2 rounded-md "
      >
        {loading ? <span>loading...</span> : "Register"}
      </button>
    </form>
  );
}
