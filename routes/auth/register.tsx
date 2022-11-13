import Layout from "../../components/Layout.tsx";
import RegisterForm from "../../islands/RegisterForm.tsx";

export default function register() {
  return (
    <Layout centered>
      <div className="px-5 py-5 text-center text-white bg-gray-800 shadow-lg dark:bg-gray-800 dark:text-white rounded-xl">
        <h1 className="text-2xl font-bold ">Register</h1>
        <p className="max-w-[30ch] m-auto my-3">
          New? Enter your details to create your account
        </p>
        <RegisterForm />
      </div>
    </Layout>
  );
}
