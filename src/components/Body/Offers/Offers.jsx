import React from "react";
import SubHeader from "../../SubHeading/index";
import OfferCard from "./OfferCard";
import { bestOffers } from "../../../Assets/defaultData";

const Offers = () => {
  return (
    <div className="w-[100%] h-max pb-8">
      <div className=" ">
        <div className="w-full flex justify-between mb-3">
          <SubHeader Header={"Best Offer"} />
          <div className="">
            <button className="text-sm font-medium capitalize">view all</button>
          </div>
        </div>
        <div className="w-full pb-4 flex  overflow-x-auto" id="wrapper">
          {bestOffers.map((item) => (
            <OfferCard
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              cost={item.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
