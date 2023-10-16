import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="w-full h-20 top-0 bg-white rounded-3xl flex items-center mb-6 ">
      <div className=" w-full flex justify-between items-center px-6">
        <div className="">
          <form action="">
            <div className="relative flex items-center">
              <FiSearch className="absolute ml-3 text-gray-400 pointer-events-none" />
              <input
                className="pl-10 ring-[1.5px] ring-gray-500/20 rounded-md py-[8px] px-2 w-[20vw] text-sm outline-none "
                type="search"
                placeholder="Search any thing ..."
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <p className=" text-sm text-navyBlue font-medium">
            {date.toLocaleString("en-IN", options)}
          </p>
          <div className=" relative flex">
            <div className="w-max ring-[1.5px] ring-gray-400/20 p-1 rounded-lg">
              <IoNotificationsOutline size={21} />
            </div>
            <div className=" absolute -top-2 -left-2 w-4 h-4 bg-red-600 flex justify-center text-center rounded-full">
              <span className="text-xs font-semibold text-white">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
