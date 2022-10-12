type Props = {
  children: preact.ComponentChildren;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flex items-center text-center w-full min-h-screen justify-center antialiased pt-6 px-3 bg-yellow-100">
      <div className="mx-auto max-w-7xl grid place-content-center h-full">
        {children}
      </div>
    </main>
  );
}
