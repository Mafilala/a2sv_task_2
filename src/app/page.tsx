"use client";
import JobCard from "@/components/card/card";
import { data } from "../../public/data";
import * as React from "react";
import SortSelect from "@/components/sortSelect/SortSelect";

function App() {
  return (
    <div className="w-[50vw] self-center">
      <div className="flex justify-between mb-10 mt-5">
        <div>
          <h1 className="text-3xl font-bold"> Opportunities</h1>
          <p className="text-sm text-gray-400">{`Showing ${data.length} results`}</p>
        </div>
        <SortSelect />
      </div>
      <div className="flex flex-col justify-center  h-auto gap-4">
        {data.map((cardInfo) => {
          return <JobCard key={cardInfo.description} cardInfo={cardInfo} />;
        })}
      </div>
    </div>
  );
}

export default App;
