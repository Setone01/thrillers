import React from "react";
import Header from "./Header/Header";
import Background from "./Hero/Background";
import Destination from "./Destination/Destination";
import Offers from "./Offers/Offers";

const Body = () => {
  return (
    <div className=" xs:ml-0 lg:ml-[17vw] xs:px-2 md:px-6 xs:w-screen lg:w-[83%] max-h-content overflow-y-hidden">
      <Header />
      <Background />
      <Destination />
      <Offers />
    </div>
  );
};

export default Body;
