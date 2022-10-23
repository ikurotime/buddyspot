import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import RegisteredEmail from "../islands/RegisteredEmail.tsx";
interface UnderConstruction {
  BUILDING_FLAG?: string;
  emailRegistered?: string;
}
export const handler: Handlers<UnderConstruction | null> = {
  GET(_, ctx) {
    const BUILDING_FLAG: string | undefined = Deno.env.get("BUILDING_FLAG");
    if (BUILDING_FLAG === "true") {
      return ctx.render({ BUILDING_FLAG });
    }

    return ctx.render();
  },
};
export default function Home({ data }: PageProps<UnderConstruction | null>) {
  return (
    <Layout>
      <nav class="flex items-center h-24 w-full select-none">
        <header class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
        </header>
      </nav>
      <div className="container py-16 mx-auto text-center sm:px-4 md:py-32">
        <h1 className="font-extrabold text-4xl leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
          <span className="block text-gray-200">BuddySpot</span>
          <span className="relative inline-block mt-3 text-gray-400 text-2xl sm:text-4xl sm:leading-none md:text-5xl xl:text-6xl">
            Create and share your virtual room ☕️🐸
          </span>
          <div className="flex flex-col items-center gap-5">
            {data?.BUILDING_FLAG && (
              <span className="relative inline-block mt-3 text-gray-400 text-xl sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl">
                Website currently under construction &nbsp;🚧👷‍♂️
              </span>
            )}
            <RegisteredEmail />
          </div>
        </h1>
      </div>
      <footer class=" absolute bottom-7 w-full text-center font-bold text-gray-300">
        Made with 🤍 by David Huertas
      </footer>
    </Layout>
  );
}
