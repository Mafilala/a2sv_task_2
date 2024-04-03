"use client";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import MiniCard from "@/components/mini_detail_card/mini_detail_card";
import CustomList from "@/components/customList/customList";
import { usePathname, useRouter } from "next/navigation";
import InfoBit from "@/components/infoBit/infoBit";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LiaPlusCircleSolid } from "react-icons/lia";
import Button from "@/components/button/button";
import axios from "axios";
import { VolunteeringOpportunity } from "../../../lib/def";
import { Stack } from "@mui/material";

const lister = (li: string[]) => {
  const newList = [];
  for (let i = 0; i < li.length; i++) {
    const nl = li[i].split("and");
    newList.push(...nl);
  }
  return newList;
};

interface Props {
  data: VolunteeringOpportunity;
}

const Detail = ({ data }: Props) => {
  const [singleData, setSingleData] = useState(data);

  const pathname = usePathname();
  const urlParts = pathname.split("/");
  const dynamicId = urlParts[urlParts.length - 2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://akil-backend.onrender.com/opportunities/${dynamicId}`
        );
        const fetchedData = await response.data;
        setSingleData(fetchedData.data);
      } catch (error) {
        console.log(dynamicId);
      }
    };
    fetchData();
  }, [dynamicId]);

  if (!singleData) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-screen flex justify-between">
      <div className="mt-2 w-[80%]">
        <MiniCard data={singleData} />
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 mt-8 ml-4">
            <div className="mt-8">
              <h2 className="text-lg font-extrabold mb-2">Description</h2>
              <p>{singleData.description}</p>
            </div>
            <div className="mt-8">
              <h2 className="mb-2 text-lg font-extrabold ">Responsiblities</h2>
              <CustomList
                listItems={singleData.responsibilities}
                bulletIcon={
                  <IoCheckmarkCircleOutline
                    style={{
                      color: "green",
                      fontSize: "1rem",
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "0.5rem",
                    }}
                  />
                }
              />
            </div>
            <div className="mt-8">
              <h2 className="mb-2 text-lg font-extrabold ">
                Ideal Candidates we want
              </h2>
              <CustomList listItems={singleData.requirements} bulletIcon="•" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-extrabold mb-2">About</h2>
            <div>
              <InfoBit
                name="Posted On"
                icon={
                  <LiaPlusCircleSolid
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionalInfo={singleData.datePosted}
                isDate={true}
              />
              <InfoBit
                name="Deadline"
                icon={
                  <AiOutlineFire
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionalInfo={singleData.deadline}
                isDate={true}
              />
              <InfoBit
                name="Location"
                icon={
                  <IoLocationOutline
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionalInfo={singleData.location[0]}
                isDate={false}
              />
              <InfoBit
                name="Start Date"
                icon={
                  <MdDateRange style={{ color: "#93D2FF", fontSize: "20px" }} />
                }
                additionalInfo={singleData.startDate}
                isDate={true}
              />
              <InfoBit
                name="End Date"
                icon={
                  <FaRegCalendarCheck
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionalInfo={singleData.endDate}
                isDate={true}
              />
            </div>
            <div className="w-full h-[1px] bg-gray-300  mt-4"></div>
            <div>
              <h2 className="mt-4 text-lg font-extrabold mb-2">Categories</h2>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                {lister(singleData.categories).map((d, idx) => (
                  <Button
                    key={d}
                    name={d}
                    color={idx % 2 == 0 ? "#FFB836" : "#4640DE"}
                    small={true}
                  />
                ))}
              </Stack>
            </div>
            <div className="w-full h-[1px] bg-gray-300  mt-4"></div>
            <div>
              <h2 className="text-lg font-extrabold mb-2 mt-2">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {singleData.requiredSkills.map((skill) => (
                  <Button
                    key={skill}
                    color="#8785BF"
                    name={skill}
                    sharp={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
