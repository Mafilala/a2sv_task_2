import React from "react";
import clsx from "clsx";

const ListItem = ({
  title,
  body,
  bulletIcon,
}: {
  title: string;
  body: string;
  bulletIcon: any;
}) => {
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

const CustomList = ({
  listItems,
  bulletIcon,
}: {
  listItems: string;
  bulletIcon: any;
}) => {
  let newListItems: string[];
  if (listItems) {
    newListItems = listItems.split("\n");
  } else {
    newListItems = [];
  }
  return (
    <ul className="list-disc pl-4">
      {newListItems.map((listItem) => (
        <ListItem
          key={listItem || Math.random()}
          title=""
          body={listItem}
          bulletIcon={bulletIcon}
        />
      ))}
    </ul>
  );
};

export default CustomList;
