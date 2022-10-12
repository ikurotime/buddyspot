import Layout from "../../components/Layout.tsx";
import RegisterForm from "../../islands/RegisterForm.tsx";

export default function register() {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 dark:text-white px-5 py-10 rounded-xl text-center shadow-lg">
        <h1 className=" text-2xl font-bold">Register</h1>
        <p className="max-w-[30ch] m-auto my-3">
          New? Enter your details to create your account
        </p>
        <RegisterForm />
      </div>
    </Layout>
  );
}
