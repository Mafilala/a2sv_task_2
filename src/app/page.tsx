"use client";
import JobCard from "@/components/card/card";
import axios from "axios";
import * as React from "react";
import SortSelect from "@/components/sortSelect/SortSelect";
import { useState, useEffect } from "react";
import { VolunteeringOpportunity } from "../../src/lib/def";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://akil-backend.onrender.com/opportunities/search"
        );
        const fetchedData = await response.data;
        const trimmedData = fetchedData.data.slice(2);
        setData(trimmedData);
      } catch {
        console.error("unable to fetch card data");
      }
    };

    fetchData();
  }, []);
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
        {data?.map((cardInfo: VolunteeringOpportunity) => {
          return <JobCard key={cardInfo.id} cardInfo={cardInfo} />;
        })}
      </div>
    </div>
  );
}

export default App;
