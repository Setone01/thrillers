import React from "react";
import paris from "../../../Assets/images/paris.jpg";
import { CiLocationOn } from "react-icons/ci";
import { PiCalendarBlank } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
// import { IoIosArrowDown } from "react-icons/io";

const Background = () => {
  return (
      <div className=" w-full relative z-20">
        <div className="w-full h-[25vh] rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={paris} alt="" />
        </div>
        <div className="-translate-y-9 w-[60vw] max-h-max p-4 mx-auto flex bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="w-full flex items-center px-4">
            <form action="">
              <div className="w-full flex justify-between items-center flex-wrap">
                <div className="xs:px-0 md:px-6 xs:my-3 md:my-0 flex items-center relative">
                  <CiLocationOn className="absolute w-6 h-6 text-gray-400 pointer-events-none" />
                  <input
                    className="w-full pl-10 text-sm font-medium capitalize placeholder:text-sm placeholder:font-medium outline-none"
                    type="text"
                    placeholder="Where are you going?"
                  />
                </div>
                <div className="xs:w-full md:w-[1px] xs:h-[1px] md:h-10 bg-slate-400"></div>
                <div className="xs:px-0 md:px-6 xs:my-3 md:my-0 flex items-center relative">
                  <PiCalendarBlank className="absolute w-6 h-6 text-gray-400 pointer-events-none" />
                  <input
                    className="w-full pl-10 text-sm font-medium capitalize placeholder:text-sm placeholder:font-medium outline-none"
                    type="date"
                    placeholder="Check-in-Date"
                  />
                  <div className="">
                    {/* <IoIosArrowDown className=" ml-3" /> */}
                  </div>
                </div>
                <div className="xs:w-full md:w-[1px] xs:h-[1px] md:h-10 bg-slate-400"></div>
                <div className="xs:px-0 md:px-6 xs:my-3 md:my-0 flex items-center relative">
                  <BiUser className="absolute w-6 h-6 text-gray-400 pointer-events-none" />
                  {/* <select className="w-full outline-none" placeholder="3 Adults">

                  </select> */}
                  <input
                    className="w-full pl-10 text-sm font-medium capitalize placeholder:text-sm placeholder:font-medium placeholder:text-black outline-none"
                    type="text"
                    placeholder="3 Adults"
                  />
                </div>
                <div className=" xs:w-full md:w-[1px] xs:h-[1px] md:h-10 bg-slate-400"></div>
                <div className="xs:px-0 md:px-6 xs:pt-4 md:pt-0">
                  <button className=" bg-navyBlue text-white text-base font-semibold px-6 py-3 outline-none rounded-2xl">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Background;
