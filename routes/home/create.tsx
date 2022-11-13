import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "../../components/Layout.tsx";
import CreateRoom from "../../islands/CreateRoom.tsx";
import { State } from "../../types/index.ts";

const TEMPLATES = [
  /*   {
    id: '1',
    title: 'Chill Café',
    description: 'A place to chill',
    image:
      'https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true'
  }, */
  {
    id: "2",
    title: "☁️ Sky",
    description: "A place to chill",
    image:
      "https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/sky.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9za3kuanBlZyIsImlhdCI6MTY2Mjk1MzUxNywiZXhwIjoxOTc4MzEzNTE3fQ.YQH2GGG8BvnY6r47EY5hniilJnpekkBCI1ZdhmcHPoc",
  },
  {
    id: "3",
    title: "🌅 Sunset",
    description: "Sunset in the sky",
    image:
      "https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/sunset.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9zdW5zZXQuanBlZyIsImlhdCI6MTY2Mjk1MzUzNywiZXhwIjoxOTc4MzEzNTM3fQ.-LefotCTW2art5X6xUY7hA3jh11LtQL5wlpFIHZDKO8",
  },
  {
    id: "4",
    title: "🌆 City",
    description: "View of the city",
    image:
      "https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/city.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9jaXR5LmpwZWciLCJpYXQiOjE2NjI5NTM0NzIsImV4cCI6MTk3ODMxMzQ3Mn0.6xsISjBF90Ux54ZUywbCRNexXPujKSKFnoggmkcgol8",
  },
];
export const handler: Handlers<unknown, State> = {
  GET(req, ctx) {
    const user = ctx.state.user;
    return ctx.render({ user });
  },
};
export default function create({ data }: PageProps) {
  return (
    <Layout centered>
      <div className="bg-white dark:bg-gray-800 dark:text-white  w-[90vw] h-[90vh] px-5 py-10 rounded-xl text-center shadow-lg">
        <div>
          <h3 className="text-black">📝 Select from templates</h3>
        </div>
        <div>
          <h2 className="text-gray-600">
            Choose a room that matches your mood from the templates. Or create
            your from scratch!
          </h2>
          <div className="grid justify-center grid-cols-1 gap-2 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="relative flex flex-col-reverse w-full max-w-sm mx-auto border cursor-pointer h-72 rounded-2xl">
              <div className="absolute grid object-cover w-full h-full rounded-2xl place-content-center bg-gradient-to-tr from-purple-600 to-blue-600 rounded-t-xl">
                {/* <BiHelpCircle size={80} color="white" /> */}
                <img src="/question-mark.png" alt="Question mark" />
              </div>
              <div>
                <div className="p-4 text-white bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 rounded-b-2xl glass">
                  <h5>🔃 Random</h5>
                  <h6>Let us choose for you!</h6>
                </div>
              </div>
            </div>

            {TEMPLATES.map((template: any) => (
              <CreateRoom
                template={template}
                data={data}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
