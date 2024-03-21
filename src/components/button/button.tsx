import React from "react";
import clsx from "clsx";

const Button = ({ color, name, small = false, sharp = false }) => {
  const paddingClasses = clsx(
    "whitespace-nowrap text-center rounded-[80px] text-[12px] font-semibold border",
    small ? "p-2" : "pl-[8px] pr-[8px] pb-[6px] pt-[6px]",
    sharp ? "rounded-none border-none font-extrabold bg-[#F8F8FD]" : ""
  );

  const buttonStyles = {
    opacity: 0.9,
    borderColor: color,
    ...(small
      ? { backgroundColor: `${color}-200`, color }
      : sharp
      ? { backgroundColor: `${color}-200`, color: "#7776B7" }
      : {}),
  };

  return (
    <button style={buttonStyles} className={paddingClasses}>
      {name}
    </button>
  );
};

export default Button;
