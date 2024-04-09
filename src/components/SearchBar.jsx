import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center m-auto md:w-3/4  w-[80vw]  mt-8">
      <input
        className="border-2  sm:w-2/4 w-full rounded-md cursor-pointer  h-10  p-2 "
        placeholder="Search for a product "
      />
      <div className="md:w-20  border-2 h-10 w-10 rounded-md ml-4 flex items-center justify-center">
        <IoSearchOutline className="w-20 h-5  cursor-pointer rounded-lg" />
      </div>
    </div>
  );
};

export default SearchBar;
