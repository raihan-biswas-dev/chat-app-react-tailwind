import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Search() {
  return (
    <div className="">
      <div className="relative">
        <input
          type="text"
          className="p-2.5 w-[427px] rounded-lg drop-shadow-md outline-none pl-10"
          placeholder="search"
        />
        <FiSearch className="absolute left-[15px] top-[17px] text-primary" />
        <BsThreeDotsVertical className="absolute right-[15px] top-[17px] text-primary" />
      </div>
    </div>
  );
}

export default Search;
