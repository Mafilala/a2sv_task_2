import React from "react";

const InfoBit = ({
  name,
  icon,
  additionalInfo,
  isDate,
}: {
  name: string;
  icon: any;
  additionalInfo: string;
  isDate: boolean;
}) => {
  function format(inp: string) {
    if (!isDate) {
      return inp;
    }
    const dateObj = new Date(inp);
    const month = dateObj.toLocaleString("en-US", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <div className="p-1 border rounded-3xl">{icon}</div>

        <div>
          <h4 className="text-gray-500 text-sm">{name}</h4>
          <p className="text-gray-700 font-bold text-sm">
            {format(additionalInfo)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBit;
