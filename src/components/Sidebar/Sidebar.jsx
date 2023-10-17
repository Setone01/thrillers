import React from "react";
import user from "../../Assets/images/passport.jpeg";
import { IoLogOutOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { dLink } from "../../Assets/defaultData";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#2b3467" : " ",
    };
}

  return (
    <div className=" xs:hidden  md:block w-[17%] h-[100dvh] left-0 px-6 rounded-r-3xl bg-white fixed z-40">
      <div className=" w-full h-full py-8 flex justify-between flex-col">
        <div className="">
          <div className="mb-9">
            <Link to={"/"}>
              <h1 className=" text-[22px] font-bold text-center text-[#2B3467]">
                Mima<span className="text-[#787d8d]">Booking</span>
              </h1>
            </Link>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <div className=" w-[95px] h-[95px] bg-smokeWhite slate-300 ring-1 ring-navyBlue rounded-full mb-6 relative">
              <img className=" rounded-full p-1 " src={user} alt="" />
              <div className="absolute -bottom-3 right-8  top-100 flex justify-center items-center bg-navyBlue w-[25px] h-[25px] rounded-full">
                <LiaUserEditSolid size={18} className="text-white" />
              </div>
            </div>

            <p className=" capitalize text-gray-400 text-[15px] font-medium">
              Jane Dapson
            </p>
          </div>
        </div>
        <div className="-mt-10">
          <ul className="flex justify-center flex-col gap-3">
            {dLink.map((item) => (
              <NavLink
                style={navLinkStyles}
                key={item.id}
                className="text-[16px] text-gray-400 font-medium active:text-navyBlue flex items-center "
                to={item.path}
              >
                <span className="mr-3">{item.icon}</span>
                {item.link}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="flex items-center text-[16px] text-gray-400 font-medium hover:text-navyBlue">
            <span className="mr-3">
              <IoLogOutOutline size={21} />
            </span>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
