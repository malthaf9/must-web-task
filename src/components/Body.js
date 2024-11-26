import React from "react";
import Convience from "./Convience";
import FirstCarousel from "./FirstCarousel";
import OnlyContainer from "./OnlyContainer";
import MiraeAsset from "./MiraeAsset";
import HomePage from "./HomePage";
import CenterAvenue from "./CenterAvenue";


const Body = () => {
  return (
    <div className="bg-[#242424] text-white  mt-[100vh]">
      <Convience />
      <FirstCarousel />
      <OnlyContainer />
      <HomePage />
      <CenterAvenue />
      <MiraeAsset />
    </div>
  );
};

export default Body;



