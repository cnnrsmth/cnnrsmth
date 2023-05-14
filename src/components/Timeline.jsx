import React from "react";
import { useState } from "react";

function Timeline({ data, setActiveYearParent }) {
  const [activeYear, setActiveYear] = useState("2021+");

  const handleYearClick = (year) => {
    setActiveYear(year);
    setActiveYearParent(year);
  };

  return (
    <div className="h-fit flex items-center">
      <div className="relative">
        <div className="h-full border-2 border-primaryblue absolute left-1/2 transform -translate-x-1/2 z-0"></div>
        {data.map(({ dropdownItem, id }) => (
          <div
            key={id}
            className="relative transition ease-in-out duration-300"
          >
            <button
              onClick={() => handleYearClick(dropdownItem)}
              className={`sticky bg-primaryblue h-6 w-6 rounded-full border-2 border-primaryblue flex mb-36 text-xl font-bold z-10 ${
                activeYear === dropdownItem ? "bg-white " : ""
              }`}
            ></button>
            <div
              className={`absolute top-0 left-0 h-full flex items-center ml-9 font-karla text-darkgrey ${
                activeYear === dropdownItem
                  ? "text-lg pl-2 font-bold"
                  : "text-lg"
              }`}
            >
              {dropdownItem}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
