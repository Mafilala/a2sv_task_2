"use client";
import { GoShareAndroid } from "react-icons/go";
import Image from "next/image";

export default function MiniCard({
  data: {
    name,
    title,
    location: { country, city },
    work_location,
    imgUrl,
  },
}) {
  return (
    <div className="flex justify-between border w-full p-2 rounded-2xl mb-8">
      <div className="flex gap-4 ">
        <Image src={imgUrl} width="50" height="50" alt="company's logo" />
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-600 text-xs">
            {`
            ${name} · ${city}, ${country} · ${work_location}`}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <GoShareAndroid />
        <div className="h-4 w-[1px] bg-gray-400"></div>
        <button className="border rounded-3xl bg-blue-600 text-gray-200 text-sm pl-5 pr-5 pt-1 pb-1">
          Apply
        </button>
      </div>
    </div>
  );
}
