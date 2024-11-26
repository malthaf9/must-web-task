import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; 
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Toggle the menu 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <header className="relative w-full">
        <div
          className="w-full h-screen bg-cover bg-center absolute top-0 left-0"
          style={{
            backgroundImage: "url('/assets/img/Background.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Logo Image */}
        <img
          src="/assets/img/logo.png"
          alt="logo"
          loading="lazy"
          className="absolute top-6 left-12 w-1/4 sm:w-1/5 lg:w-1/6 h-auto logo"
        />

        {/* Header Title Image  */}
        <img
          src="/assets/img/HeaderTitle.png"
          alt="header-title"
          loading="lazy"
          className="absolute top-[6rem] left-12 w-1/2 sm:w-2/3 md:w-1/3 lg:w-1/4 slide-in-from-top sm:top-[14rem]"
        />

        {/* Header Title Text  */}
        <div className=" absolute sm:top-[24rem] sm:left-6 sm:w-full sm:text-left z-10 top-[190px] left-6 w-full text-left ">
          <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl mb-4">
            최고의 공간을 경험하세요
          </h1>
          <p className="text-white text-sm sm:text-xl font-thin">
            국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
          </p>
        </div>

        {/* Navigation Items */}
        <div
          className={`absolute right-0 top-12 sm:hidden flex-col space-y-4 p-4 bg-black text-white ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <p className="cursor-pointer hover:underline">센터원</p>
          <p className="cursor-pointer hover:underline">이용안내</p>
          <p className="cursor-pointer hover:underline">서비스소개</p>
          <p className="cursor-pointer hover:underline">임대문의</p>
          <p className="cursor-pointer hover:underline">고객지원</p>
        </div>

        {/* Hamburger Menu Icon  */}
        <div className="absolute top-8 right-6 text-white sm:hidden">
          <button onClick={toggleMenu}>
            <FiMenu size={30} />
          </button>
        </div>

        {/* Globe Icon  */}
        <div
          className={`absolute top-8 right-6 text-white text-2xl sm:text-3xl ${
            isMenuOpen ? "hidden" : "hidden"
          } lg:block`}
        >
          <FaGlobe />
        </div>

        {/* Navigation Items */}
        <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 top-10 space-x-6 md:space-x-8 lg:space-x-16">
          <p className="text-white cursor-pointer hover:underline">센터원</p>
          <p className="text-white cursor-pointer hover:underline">이용안내</p>
          <p className="text-white cursor-pointer hover:underline">서비스소개</p>
          <p className="text-white cursor-pointer hover:underline">임대문의</p>
          <p className="text-white cursor-pointer hover:underline">고객지원</p>
        </div>
      </header>
    </div>
  );
};

export default Header;










































