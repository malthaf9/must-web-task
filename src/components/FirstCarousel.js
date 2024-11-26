import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FirstCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "https://s3-alpha-sig.figma.com/img/d22e/15a2/4dc58089764b0b9240a66b8fd6e3fd85?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIlTyZf71WOiIoQMOcAZzOI~wcxCaQ9bUtyOFRSP6Cz~ZgDMec7EpT96DnP9N31E4wes6nEw7BI3b7Ig-sB205d48nRnZUASVOv~Tm6pahZNVFiKM42UVlektn2Xu-VoYgn52BBMeNI4DgzMBJ1cy2PXxhI2ujcSH6HBTgSX9lrGqv~Bx8um1tKpkiYJ3mQqCfOkCEn~U9DXJHVaWny6rz40CVJiAYXeKhZZCt38B2-S6C0XniWk6erd3zw~N16X48ECNsYnQXSWeHa6ccuUIlrDiDZ9UPtkPYrCyKkW9KHQXSecj3eHEFcrnNLkvgemLJ5NSuUeVfPwoq45Hu5~eQ__",
      titleImage: "/assets/img/slide-heading.png",
      text: "서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과 퇴근길에 만나는 청계천의 여유로움은 CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다. 이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로 인증받았습니다."
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/88c0/93ef/4f5f10b82ad3f169edaddec23f228b47?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQZLjaggL7ISX304Zi2DmwhhGrPoLc2Fy~PiCDoX3ES6Ifar0bstZaJ16CCCE28ASxZZCp-cf2ae94LojDaQXP7jNasj~zFzel5F8XVtxMbK602xERRfKLLmCPb4j8zsXqCqTiPaxBbtVq4fTON4zSPxDPYaWww7xu3NGJTLacUNqoQo4NjpYDk95RDBYhxEcA-2iTpXGtl9jmPPI3zsPLlGl9Gz9CJM3KS7L2YIVaHz1HY9NXi8MGHyFYkiyuCaFwfTc3Rh4P7HclrPlt-vGJDHmNaqcVWxabFYFf8GDJaupENakG78hbz-mDAVj146~CzJtev8MLD7G9EUM~0ySA__",
      titleImage: "/assets/img/slide-heading.png",
      text: "Center1은 약 170,000m²의 건축 연면적으로 서울 도심 최대 규모의 빌딩입니다. 안정적 구조, 효율적 공간설계, 친환경 건축, 반영구적 자재, 최첨단 기술을 바탕으로 시간이 지나도 그 가치가 높아질 것입니다. 또한 편리한 접근성, 빌딩 앞 공원, 개방된 아트리움 공간 등을 통해 대중과 소통하는 새로운 시대 가치를 담고 있습니다."
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/94d5/ccb8/859e358bede22330ea654cb311f6a0fb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTS0QFTp7ES9tIuy2vZ-nlrkweIotAT7mm9RxyekF9rKH9S9mwteI-4dU1nWS37Pu4C3Kcn7BulX-NmRz7NbeGVkI~QXvKwLQfztIouK0u~MP9o8pO22z~e4sWnhukk0qe25dhofjImDUJ3jGXje0PXF7HWQJ8a1v3FdExMLtM4nFxh0-YRl2OcU7vAOkmYLI14oDqJgEfVPB9sGkY1uHzdkO5X4VWtSDDw2NvgcUD64PZuxL3qphMT7g-KmLRnoA1rAlBlRJBIzpGrzccpC9YHVLAC3hGkMMHrBFhGG1ol7cWjVzyHTRvMItSILsIVwBxmfrApyTKDrBcSfWAugWw__",
      titleImage: "/assets/img/slide-heading.png",
      text: "Center1의 건축 모티브는 음과 양 (Yin & Yang)입니다. 하나의 매스에서 분리된 두 동은 음각과 양각 형태로 마주 보고 있습니다. 외부 마감재는 자연과 조화를 이루며 주변 건물들과 차별화된 자재를 사용하였고, 알루미늄 환기창은 외기를 도입하면서도 개폐 시 외관 변화가 없도록 세심하게 설계되었습니다."
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/00e3/22c3/7e095adc4b70dacedcdc217d89b732f3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eZfr1QkpTJm0bCV7UHKd3BuM3oIgzmmjEs0vSglEU6d4BRiIeZx9XsxdR7DSM2NUgGlwaw4QsCiS4v7xcD5LrVEHNkhdEXSmOP4iBCOGsD3sfXhT4oIqwq0NT~U3TbGJ4DW5xJbqs0xtuyo0wrxlXNIP4sD-gM2uvdZFg3QUXFHWdJEa8GNV~w6FYn7QuPzmLJzyi7MQTHU1~1seju-Fhuh4xfYgtz20JRMNwM8Ly5vwb6qFxxcuzkBftKF3sCx6tSvpGUJh1Fmi~dKI3uBtML6kYBS66OvzdfdWieGym93NZq70pRPipEvLHwGmmnz5LDjxd1d9H5damf2vKbVsfA__",
      titleImage: "/assets/img/slide-heading.png",
      text: "Center1은 입주사들을 위한 철저한 보안 관리와 사고 예방을 위한 통합 시스템을 도입하여, 보안과 경비 현황을 한 곳에서 효과적으로 관리합니다. 아트리움 2층 로비에서는 방문객 출입을 관리하며, 최첨단 보안 시설을 통해 임차인들에게 높은 수준의 보안 서비스를 제공합니다. 또한, 입주사를 위한 차별화된 서비스를 제공하며, 입주사와 외부 이용객 모두가 이용할 수 있는 다양한 편의 시설을 갖추고 있습니다."
    },
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-14">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="hidden"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Header Title & Text */}
      <header className="relative w-full z-10">
        {/* Header Title Image */}
        <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25rem] mt-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 px-4">
          <img
            src={slides[activeIndex].titleImage}
            alt="header-title"
            loading="lazy"
            className="w-full h-auto max-h-40 sm:max-h-52 md:max-h-60 lg:max-h-64"
          />
        </div>

        {/* Text Section */}
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4">
          <div className="relative mb-4">
            <div className="border-t-2 border-white w-1/3 sm:w-[40%] md:w-[50%] lg:w-[25%]">
              <div className="absolute top-0 left-0 w-1/6 h-full bg-white"></div>
            </div>
          </div>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed break-words line-clamp-4 text-left">
            {slides[activeIndex].text}
          </p>

          {/* View More button */}
          <button
            className="mt-4 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-white text-white bg-transparent rounded-lg text-sm sm:text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            View More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </header>

      {/* Slider Indicators  */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 sm:w-10 h-2 sm:h-2 rounded-sm ${
              activeIndex === index ? "bg-orange-400" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FirstCarousel;
























