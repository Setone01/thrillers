import React from "react";
import Header from "./Header/Header";
import Background from "./Hero/Background";
import Destination from "./Destination/Destination";
import Offers from "./Offers/Offers";

const Body = () => {
  return (
    <div className="ml-[17vw] px-6 w-[83%]">
      <Header />
      <Background />
      <Destination />
      <Offers />
    </div>
  );
};

export default Body;
