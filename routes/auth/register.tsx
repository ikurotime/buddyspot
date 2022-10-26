import { Handlers } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import RegisterForm from "../../islands/RegisterForm.tsx";
import { getCookies } from "../../utils/cookies.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || null;
    if (cookie) {
      const domain = req.headers.get("host");
      if (domain === "localhost:8000") {
        return Response.redirect("http://localhost:8000/home");
      }
      return Response.redirect(`https://${domain}/home`);
    }
    return ctx.render(null);
  },
};
export default function register() {
  return (
    <Layout centered>
      <div className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white px-5 py-5 rounded-xl text-center shadow-lg">
        <h1 className=" text-2xl font-bold">Register</h1>
        <p className="max-w-[30ch] m-auto my-3">
          New? Enter your details to create your account
        </p>
        <RegisterForm />
      </div>
    </Layout>
  );
}
