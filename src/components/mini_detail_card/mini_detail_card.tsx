"use client";
import { GoShareAndroid } from "react-icons/go";
import Image from "next/image";
import { VolunteeringOpportunity } from "../../lib/def";
export default function MiniCard({ data }: { data: VolunteeringOpportunity }) {
  return (
    <div className="flex justify-between border w-full p-2 rounded-2xl mb-8">
      <div className="flex gap-4 ">
        <img src={data.logoUrl} width="50" height="50" alt="company's logo" />
        <div>
          <h1 className="text-xl font-bold">{data.orgName}</h1>
          <p className="text-gray-600 text-xs">
            {`${data.whenAndWhere} · ${data.opType}`}
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
