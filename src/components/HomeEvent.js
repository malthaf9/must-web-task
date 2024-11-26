import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const HomeEvent = () => {

  const [isImageVisible, setIsImageVisible] = useState(true);


  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className=" text-black p-4 shadow-sm rounded-lg">
      {/* Header  title and icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">지금 살펴봐야할 이벤트</h1>
        <span
          onClick={toggleImageVisibility}
          className="flex items-center justify-center w-8 h-8 bg-white text-[#00427A] rounded-full border border-[#00427A] cursor-pointer"
        >
          {isImageVisible ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {/* Conditionally render the image */}
      {isImageVisible && (
        <div className="mt-4">
          <img
            src="/assets/img/Frame 1261159181.png"
            alt="home"
            loading="lazy"
            className="w-full max-w-[100%] mx-auto"
          />
        </div>
      )}

      {/* Text */}
      <div className="mt-2">
        <h2 className="font-bold text-2xl">미래에셋센터원 크리스마스 작은 음악회</h2>
        <p className="text-[#979797]">
          공연 주제 : 재즈 공연<br />
          장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및 커피 배포)
        </p>
        <p className="font-thin mt-4 text-[#979797]">2024.12.20(금)~2024.12.20(금)</p>
      </div>
    </div>
  );
};

export default HomeEvent;









