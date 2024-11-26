import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#242424] shadow mt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">


          <div className="flex items-start order-1 md:order-1">
            <button 
              onClick={() => window.location.href = '/'} 
              className="flex items-center mb-4 space-x-3 rtl:space-x-reverse cursor-pointer"
            >
              <img src="/assets/img/logo.png" className="h-8" alt="Flowbite Logo" />
            </button>
          </div>

  
          <div className="order-2 md:order-2"> 
            <div className="flex flex-col md:flex-row md:items-center md:justify-end md:space-x-4 space-y-4 md:space-y-0">
              <h1 className="text-white text-xl cursor-pointer">개인정보처리방침</h1>

              <select className="p-4 rounded-lg cursor-pointer bg-white text-black">
                <option className="text-gray-700" value="option1">Family Site</option>
                <option className="text-gray-700" value="option2">미래에셋</option>
                <option className="text-gray-700" value="option3">미래에셋</option>
              </select>
            </div>
          </div>


          <div className="order-3 md:order-3"> 
            <p className="text-white mt-6">주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구 을지로 5길 26 )</p>
            <p className="text-white mt-2 mb-4">대표번호 : 02-6030-0100</p>
          </div>

        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © COPYRIGHT(C) 2011 MIRAE ASSET CORPORATION. CO., Ltd. ALL RIGHT RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;













