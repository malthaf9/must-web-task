import React from "react";
import './OnlyContainer.css'; 

const OnlyContainer = () => {
  return (
    <div className="ml-[32px] mt-[5rem] sm:ml-4 sm:mt-[3rem]">

      <img
        src="/assets/img/only.png"
        alt="only"
        loading="lazy"
        className="w-[30rem] animate-slide-in-from-top sm:w-full md:w-[30rem]" // Adjust width for larger devices
      />

      <p className="text-white text-2xl mt-4 animate-slide-in-from-top sm:text-xl sm:mt-6 md:text-2xl">
        미래에셋센터원에서 경험하는{" "}
        <span className="text-orange-400 font-thin text-2xl sm:text-lg">
          특별한 서비스
        </span>
      </p>

      {/* Cards  */}
      <div className="flex gap-6 mt-10 flex-col sm:flex-row sm:flex-wrap sm:gap-4 sm:mt-6 sm:justify-center">
        {/* First Card */}
        <div className="max-w-sm w-full rounded-lg shadow group relative transition duration-1000 ease-in-out hover:scale-105">
          <img
            className="rounded-t-lg w-full"
            src="/assets/img/Frame 1261159181.svg"
            alt="Blog"
            loading="lazy"
          />

          {/* Text Content */}
          <div className="mt-10 sm:mt-6">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220] sm:text-2xl">
              프라임 서비스
            </h5>
            <p className="mb-3 font-normal text-white">
              임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등 입주사
              임직원을 위한 차별화된 서비스를 제공합니다.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-sm w-full rounded-lg shadow group relative transition duration-1000 ease-in-out hover:scale-105">
          <img
            className="rounded-t-lg w-full"
            src="/assets/img/다운로드 1.png"
            alt="Blog"
            loading="lazy"
          />

          {/* Text Content */}
          <div className="mt-10 sm:mt-6">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220] sm:text-2xl">
              E-pit 전기차 충전소
            </h5>
            <p className="mb-3 font-normal text-white">
              미래에셋센터원 주차장에는 전기차 이용자들을 위해 일반 충전소 외에도
              E-pit 전기차 충전소가 마련되어 있습니다.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm w-full rounded-lg shadow group relative transition duration-1000 ease-in-out hover:scale-105">
          <img
            className="rounded-t-lg w-full"
            src="/assets/img/미래에셋센터원_045 1.png"
            alt="Blog"
            loading="lazy"
          />

          {/* Text Content */}
          <div className="mt-10 sm:mt-6">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220] sm:text-2xl">
              주차요금 할인
            </h5>
            <p className="mb-3 font-normal text-white">
              오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 최대 8천원으로
              부담없이 미래에셋센터원을 즐길 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyContainer;








