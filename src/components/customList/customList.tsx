import React from "react";
import clsx from "clsx";

const ListItem = ({ title, body, bulletIcon }) => {
  return (
    <li className="flex mb-2">
      <p className="inline">
        {bulletIcon}
        {title && <span className="font-bold mr-1">{title}:</span>}
        {body}
      </p>
    </li>
  );
};

const CustomList = ({ listItems, bulletIcon }) => {
  return (
    <ul className="list-disc pl-4">
      {listItems.map((listItem) => (
        <ListItem
          key={listItem.title || Math.random()}
          title={listItem.title}
          body={listItem.body}
          bulletIcon={bulletIcon}
        />
      ))}
    </ul>
  );
};

export default CustomList;
