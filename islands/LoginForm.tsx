import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
export default function LoginForm() {
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
  const handleLogin = async (e: { preventDefault: () => void }) => {
    setLoading(true);
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
      const { user } = json;
      sessionStorage.setItem("user", JSON.stringify(user));
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
        placeholder="strong-password"
        className="py-2 px-4 rounded-md border border-gray-200"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-300 dark:bg-yellow-400 p-2 rounded-md "
      >
        {loading ? <span>loading...</span> : "Sign in"}
      </button>
      <p className="max-w-[30ch] m-auto my-3 text-sm">
        - Or sign in with-
      </p>
      <div className="flex w-full justify-around gap-3  text-white">
        <Button
          className="bg-gray-100 text-black"
          label="Google"
          loading={loading}
        />
        <Button
          className="bg-blue-400"
          label="Twitter"
          loading={loading}
        />
        <Button
          className="bg-gray-900"
          label="Github"
          loading={loading}
        />
      </div>
    </form>
  );
}
