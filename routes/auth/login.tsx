import LoginForm from "../../islands/LoginForm.tsx";

export default function login() {
  return (
    <main className="flex items-center text-center w-full min-h-screen justify-center antialiased pt-6 px-3 bg-yellow-100">
      <div className="mx-auto max-w-7xl grid place-content-center h-full">
        <div className="bg-white dark:bg-gray-800 dark:text-white px-5 py-10 rounded-xl text-center shadow-lg">
          <h1 className=" text-2xl font-bold">Login</h1>
          <p className="max-w-[30ch] m-auto my-3">
            Hey, enter your details to continue to your account
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
