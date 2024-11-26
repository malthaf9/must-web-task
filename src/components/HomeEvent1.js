import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const HomeEvent1 = () => {

  const [isImageVisible, setIsImageVisible] = useState(false);


  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className=" text-black p-4 shadow-sm rounded-lg">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">또 다른 이벤트</h1>
        <span
          onClick={toggleImageVisibility}
          className="flex items-center justify-center w-8 h-8 bg-white text-[#00427A] rounded-full border border-[#00427A] cursor-pointer"
        >
          {isImageVisible ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {isImageVisible && (
        <div className="mt-4">
          <img
            src="/assets/img/Frame 1261159181 copy.png"
            alt="event"
            loading="lazy"
            className="w-full max-w-[100%] mx-auto"
          />
        </div>
      )}


      <div className="mt-2">
        <h2 className="font-bold text-2xl">연말 특별 세일</h2>
        <p className="text-[#979797]">
          할인 품목 : 전 상품 20% 할인<br />
          기간 : 1층 로비, 2층 전시관
        </p>
        <p className="font-thin mt-4 text-[#979797]">2024.12.15(금)~2024.12.31(일)</p>
      </div>
    </div>
  );
};

export default HomeEvent1;


