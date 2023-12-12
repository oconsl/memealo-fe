"use client";
import { useState, useEffect } from "react";

export default function RoomInfo({
  description,
  time,
}: {
  description: string;
  time: number;
}) {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  return (
    <article className="flex w-96 flex-col">
      <div className="py-6 px-4 w-full h-full bg-martinique-900 mx-3 my-6 rounded-xl text-5xl text-center light-stroke text-shadow">
        {description}
      </div>
      <div className="py-6 px-4 w-full h-full bg-martinique-900 mx-3 my-6 rounded-xl text-8xl text-center light-stroke text-shadow">
        {seconds}
      </div>
    </article>
  );
}
