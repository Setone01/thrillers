import React from "react";
import user from "../../Assets/images/passport.jpeg";
import { IoLogOutOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { TbGridDots, TbSettings2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-[17%] h-[100dvh] left-0 bg- pl-8 rounded-r-3xl bg-white fixed">
      <div className=" w-full h-full py-8 flex justify-between flex-col">
        <div className="">
          <div className="mb-4">
            <h1 className=" text-[20px] font-bold text-[#2B3467]">
              Mima<span className="text-[#787d8d]">Booking</span>
            </h1>
          </div>
          <div className="">
            <div className=" w-[80px] h-[80px] bg-smokeWhite slate-300 ring-1 ring-navyBlue rounded-full mb-6 relative">
              <img className=" rounded-full p-1 " src={user} alt="" />
              <div className="absolute -bottom-3 right-8  top-100 flex justify-center items-center bg-navyBlue w-[25px] h-[25px] rounded-full">
                <LiaUserEditSolid size={18} className="text-white" />
              </div>
            </div>

            <p className=" capitalize text-gray-500 text-sm font-medium">
              Jane Dapson
            </p>
          </div>
        </div>
        <div className="">
          <ul className="flex justify-center flex-col gap-3">
            <li className="flex items-center text-[15px]">
              <span className="mr-3">
                <GoHomeFill />
              </span>
              Dashboard
            </li>
            <li className="flex items-center text-[15px]">
              {" "}
              <span className=" mr-3">
                <TbGridDots />
              </span>{" "}
              Explore City
            </li>
            <li className="flex items-center text-[15px]">
              <span className="mr-3">
                <FaRegEnvelopeOpen />
              </span>{" "}
              Ticket
            </li>
            <li className="flex items-center text-[15px]">
              <span className="mr-3">
                <MdFavoriteBorder/>
              </span>{" "}
              Favorites
            </li>
            <li className="flex items-center text-gray-400 text-[15px]">
              <span className="mr-3">
                <TbSettings2 />
              </span>{" "}
              Settings
            </li>
          </ul>
        </div>
        <div className="">
          <p className="flex items-center">
            <span className="mr-3">
              <IoLogOutOutline />
            </span>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
