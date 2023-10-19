import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const OfferCard = ({image, title, location, cost}) => {
  return (
    <>
      <div className="bg-white w-max h-max mr-4 flex justify-centern flex-col p-4 rounded-3xl shadow-md">
        <div className=" w-48 h-32 rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex justify-between flex-col pt-3">
          <div className="mb-2">
            <h5 className=" text-base font-extrabold">{title}</h5>
          </div>
          <div className="mb-2">
            <p className="flex items-center text-sm font-medium text-gray-400">
              <span className="mr-2">
                <CiLocationOn size={18}/>
              </span>
              {location}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm">
              ${cost} <span className="text-sm text-gray-400 font-normal">/night</span>
            </p>
            <div className="w-7 h-7 p-1 ring-1 flex justify-center items-center rounded-lg text-gray-400">
              <MdFavoriteBorder size={19} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
