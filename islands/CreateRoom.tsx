type Props = {
  template: Record<string, never>;
  data: Record<string, never>;
};

export default function CreateRoom({ template, data }: Props) {
  const createRoom = async (template: any) => {
    const res = await fetch("/api/create-room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: data.user,
        title: template.title,
        image: template.image,
      }),
    });
    const json = await res.json();
    window.location.href = `/home/room/${json.id}`;
  };
  return (
    <div
      key={template.id}
      className="relative flex flex-col-reverse w-full max-w-sm mx-auto border cursor-pointer h-72 rounded-2xl"
      onClick={() => {
        createRoom(template);
      }}
    >
      <img
        className="absolute object-cover w-full h-full rounded-2xl"
        src={template.image}
        alt="Default Image"
      />

      <div className="p-4 text-white bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 rounded-b-2xl glass ">
        <h5>{template.title}</h5>
        <h6>{template.description}</h6>
      </div>
    </div>
  );
}
