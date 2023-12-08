export default function RoomInfo({
  topDescription,
  bottomDescription,
}: {
  topDescription: string;
  bottomDescription?: string;
}) {
  return (
    <article className="flex w-96 flex-col">
      <div className="py-6 px-4 w-full h-full bg-martinique-900 mx-3 my-6 rounded-xl text-5xl text-center light-stroke text-shadow">
        {topDescription}
      </div>
      {bottomDescription && (
        <div className="py-6 px-4 w-full h-full bg-martinique-900 mx-3 my-6 rounded-xl text-8xl text-center light-stroke text-shadow">
          {bottomDescription}
        </div>
      )}
    </article>
  );
}
