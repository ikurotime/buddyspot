export default function Home() {
  return (
    <main className="text-center w-full min-h-screen justify-center antialiased pt-6 px-3 bg-yellow-100">
      <div className="mx-auto max-w-7xl">
        <nav class="flex items-center h-24 w-full select-none">
          <header class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
          </header>
        </nav>
        <div className="container py-16 mx-auto text-center sm:px-4 md:py-32">
          <h1 className="font-extrabold text-4xl leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            <span className="block">Serent</span>
            <span className="relative inline-block mt-3 text-gray-800 sm:text-4xl sm:leading-none md:text-5xl xl:text-6xl">
              Create and share your virtual room
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
