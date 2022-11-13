import Layout from "../../components/Layout.tsx";
import LoginForm from "../../islands/LoginForm.tsx";

export default function login() {
  return (
    <Layout centered>
      <div className="px-5 py-5 text-center text-white bg-gray-800 shadow-lg dark:bg-gray-800 dark:text-white rounded-xl ">
        <h1 className="text-2xl font-bold ">Login</h1>
        <p className="max-w-[30ch] m-auto my-3">
          Hey, enter your details to continue to your account
        </p>
        <LoginForm />
      </div>
    </Layout>
  );
}
