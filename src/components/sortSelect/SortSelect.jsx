"use client";
import React from "react";

const SortSelect = () => {
  return (
    <div className="w-[35%]  flex items-center border-r-2">
      <label htmlFor="sort-select" className="block text-sm text-gray-500 mr-2">
        Sort By:
      </label>
      <select
        name="sort"
        id="sort-select"
        defaultValue="1"
        className="w-2/3 text-md"
      >
        <option value="1">Most Relevant</option>
        <option value="2">Random</option>
        <option value="3">Alphabetical</option>
      </select>
    </div>
  );
};

export default SortSelect;
