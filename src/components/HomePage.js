 import React from "react";
import HomeEvent from "./HomeEvent";
import HomeEvent1 from "./HomeEvent1";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-6 bg-[#ECEFF1] p-6">
      <HomeEvent />
      <HomeEvent1 />
    </div>
  );
};

export default HomePage; 












