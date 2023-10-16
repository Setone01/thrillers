import React from "react";
import DestinationCard from "./DestinationCard";
import { location } from "../../../Assets/defaultData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubHeader from "../../SubHeading/index";
// import paris from "../../Assets/images/passport.jpeg";

const Destination = () => {
  return (
    <div className="w-full h-52 bg-inherit mb-4 z-50">
      <div className=" flex justify-between items-center mb-4">
        <SubHeader Header={"Trending Destination"} />
        <div className=" flex justify-center items-center gap-3">
          <div className="w-6 h-6 ring-1 flex items-center justify-center text-navyBlue rounded-md">
            <IoIosArrowBack />
          </div>
          <div className="w-6 h-6 ring-1 flex items-center justify-center text-white bg-navyBlue rounded-md">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 w-[1440px]">
        {location.map((item) => (
          <DestinationCard
            key={item.id}
            image={item.image}
            location={item.location}
            rating={item.rating}
            desc={item.comment}
            cost={item.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;
