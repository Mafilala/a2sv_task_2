"use client";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import React from "react";
import MiniCard from "@/components/mini_detail_card/mini_detail_card";
import CustomList from "@/components/customList/customList";
import { usePathname, useRouter } from "next/navigation";
import { data } from "../../../../public/data";
import InfoBit from "@/components/infoBit/infoBit";
import { IoLocationOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LiaPlusCircleSolid } from "react-icons/lia";
import Button from "@/components/button/button";
const Detail = () => {
  const pathname = usePathname();
  const urlParts = pathname.split("/");
  const dynamicId = urlParts[urlParts.length - 2];

  const singleData = data?.filter((d) => d.id === Number(dynamicId))?.[0];

  if (!singleData) {
    return <div>Data not found for ID: {dynamicId}</div>;
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
              <CustomList
                listItems={singleData.additionalQualities}
                bulletIcon="•"
              />
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
                additionaInfo={singleData.jobInfo.posted_on}
                isDate={true}
              />
              <InfoBit
                name="Deadline"
                icon={
                  <AiOutlineFire
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionaInfo={singleData.jobInfo.deadline}
                isDate={true}
              />
              <InfoBit
                name="Location"
                icon={
                  <IoLocationOutline
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionaInfo={singleData.jobInfo.location}
                isDate={false}
              />
              <InfoBit
                name="Start Date"
                icon={
                  <MdDateRange style={{ color: "#93D2FF", fontSize: "20px" }} />
                }
                additionaInfo={singleData.jobInfo.startDate}
                isDate={true}
              />
              <InfoBit
                name="End Date"
                icon={
                  <FaRegCalendarCheck
                    style={{ color: "#93D2FF", fontSize: "20px" }}
                  />
                }
                additionaInfo={singleData.jobInfo.endDate}
                isDate={true}
              />
            </div>
            <div className="w-full h-[1px] bg-gray-300  mt-4"></div>
            <div>
              <h2 className="mt-4 text-lg font-extrabold mb-2">Categories</h2>
              <div className="flex gap-2">
                {singleData.categories.map((d) => (
                  <Button
                    key={d.name}
                    name={d.name}
                    color={d.color}
                    small={true}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300  mt-4"></div>
            <div>
              <h2 className="text-lg font-extrabold mb-2 mt-2">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {singleData.required_skills.map((skill) => (
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
