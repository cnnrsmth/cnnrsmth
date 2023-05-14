import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ data, setActiveYearParent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState("2021+");

  const handleDataObjClick = (dataObj) => {
    setActiveYearParent(dataObj.dropdownItem);
    setDropDownTitle(dataObj.dropdownItem);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative flex flex-col items-center rounded-lg w-[20%]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-200 hover:bg-gray-300 duration-100 text-gray-500 hover:text-gray-600 p-1 w-full flex items-center justify-between font-bold text-base rounded-lg tracking-wider border-4 border-transparent font-karla"
      >
        {dropDownTitle}
        {!isOpen ? (
          <FontAwesomeIcon icon={faCircleArrowDown} className="h-4" />
        ) : (
          <FontAwesomeIcon icon={faCircleArrowUp} className="h-4" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-12 bg-white rounded-lg p-1 w-full border border-gray-300 drop-shadow z-50">
          {data.map((dataObj, id) => (
            <div className="hover:bg-blue-50 cursor-pointer rounded" key={id}>
              <h3
                className="hover:text-primaryblue p-1 text-gray-500 font-semibold duration-0 font-karla"
                onClick={() => handleDataObjClick(dataObj)}
              >
                {dataObj.dropdownItem}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
