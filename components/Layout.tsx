type Props = {
  children: preact.ComponentChildren;
  centered?: boolean;
};

import { Head } from "$fresh/src/runtime/head.ts";
import { asset } from "$fresh/src/runtime/utils.ts";
export default function Layout({ children, centered = false }: Props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("../globals.css")} />
      </Head>
      <main
        className={`flex ${
          centered ? "items-center justify-center text-center" : ""
        } w-full min-h-screen  antialiased py-6 px-3  dark:bg-gray-500 opacity-80 `}
      >
        <div
          className={` min-h-full flex-1 ${
            centered ? "max-w-7xl mx-auto grid place-content-center" : "block"
          }`}
        >
          {children}
        </div>
      </main>
    </>
  );
}
