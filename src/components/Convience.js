import React from "react";
import './Convience.css'; 

const Convience = () => {
  return (
    <div className="ml-[32px] mt-[5rem]">

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in">Convience</h1>
      <p className="text-white text-xl sm:text-2xl md:text-3xl mt-4 animate-slide-in">
        미래에셋센터원에서 경험하는{" "}
        <span className="text-orange-400 text-2xl sm:text-3xl">특별한 서비스</span>
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {/* First Card */}
        <div className="max-w-sm shadow-lg rounded-lg group relative h-[620px] flex flex-col justify-end transition duration-1000 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-end">
            <img
              className="rounded-t-lg w-full"
              src="/assets/img/KF-gallery.png"
              alt="kf-gallery"
              loading="lazy"
            />

            {/* Text content */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220]">
                KF GALLERY
              </h5>
              <p className="mb-3 font-normal text-white">
                국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제
                교류를 촉진하는 다양한 전시와 행사에 참여해보세요.
              </p>
            </div>

            {/* Border Line */}
            <div className="relative w-full h-1.5 mt-4">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#F58220] transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-sm rounded-lg shadow group relative h-[620px] flex flex-col justify-center transition duration-1000 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-center">
            <img
              className="rounded-t-lg w-full"
              src="/assets/img/1페이지_이미지 1.svg"
              alt="kf-gallery"
              loading="lazy"
            />

            {/* Text content */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220]">
                센터원 Wellness
              </h5>
              <p className="mb-3 font-normal text-white">
                피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나,
                PT(퍼스널트레이닝) 등 운영 바쁜 일상과 업무에서 잠시 휴식을
                취해보세요.
              </p>
            </div>

            {/* Border Line */}
            <div className="relative w-full h-1.5 mt-4">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#F58220] transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm rounded-lg shadow group relative transition duration-1000 ease-in-out hover:scale-105">
          <img
            className="rounded-t-lg w-full"
            src="/assets/img/웰니스_1 1.svg"
            alt="Blog"
            loading="lazy"
          />

          {/* Text Content */}
          <div className="mt-10 p-5">
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#F58220]">
              SPARKPLUS
            </h5>
            <p className="mb-3 font-normal text-white">
              국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제
              교류를 촉진하는 다양한 전시와 행사에 참여해보세요.
            </p>
          </div>

          {/* Border Line */}
          <div className="relative w-full h-1.5 mt-4">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#F58220] transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convience;





