import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const SearchBox = ({ setSearchInput }) => {

  return (
    <div className="w-full">
      <div className="flex items-center px-2 py-1 bg-gray-100 rounded-lg">
        <IoIosSearch />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className="ml-2 focus:outline-none bg-gray-100 w-full"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
