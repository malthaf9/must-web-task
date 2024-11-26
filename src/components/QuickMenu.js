import React from 'react';

const QuickMenu = () => {
  return (
    <div className="quick--menu bg-slate-900 text-white">
      <ul className="d-flex flex-column gap-16">
        <li>
          <a 
            href="#"
            className="content--wrap d-flex flex-column justify-content-center align-items-center"
            onClick={(e) => e.preventDefault()} // Prevent default link behavior
          >
            <div className="icon--wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_3_462)">
                  <path d="M10.6667 20C10.6667 18.5273 9.4728 17.3334 8.00004 17.3334C6.52728 17.3334 5.33337 18.5273 5.33337 20V22.6667C5.33337 24.1395 6.52728 25.3334 8.00004 25.3334C9.4728 25.3334 10.6667 24.1395 10.6667 22.6667V20Z" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M26.6667 20C26.6667 18.5273 25.4728 17.3334 24 17.3334C22.5273 17.3334 21.3334 18.5273 21.3334 20V22.6667C21.3334 24.1395 22.5273 25.3334 24 25.3334C25.4728 25.3334 26.6667 24.1395 26.6667 22.6667V20Z" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5.33337 20V16C5.33337 13.1711 6.45718 10.458 8.45757 8.45757C10.458 6.45718 13.1711 5.33337 16 5.33337C18.829 5.33337 21.5421 6.45718 23.5425 8.45757C25.5429 10.458 26.6667 13.1711 26.6667 16V20" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M24 25.3334C24 26.3942 23.1571 27.4117 21.6569 28.1618C20.1566 28.9119 18.1217 29.3334 16 29.3334" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3_462">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text fs--14">주요문의처</p>
          </a>
        </li>

        <li>
          <a 
            href="#"
            className="content--wrap d-flex flex-column justify-content-center align-items-center"
            onClick={(e) => e.preventDefault()}
          >
            <div className="icon--wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_3_470)">
                  <path d="M21.3334 7.99992H25.3334C25.687 7.99992 26.0261 8.14039 26.2762 8.39044C26.5262 8.64049 26.6667 8.97963 26.6667 9.33325V23.9999C26.6667 24.7072 26.3858 25.3854 25.8857 25.8855C25.3856 26.3856 24.7073 26.6666 24 26.6666C23.2928 26.6666 22.6145 26.3856 22.1144 25.8855C21.6143 25.3854 21.3334 24.7072 21.3334 23.9999V6.66659C21.3334 6.31296 21.1929 5.97382 20.9428 5.72378C20.6928 5.47373 20.3537 5.33325 20 5.33325H6.66671C6.31309 5.33325 5.97395 5.47373 5.7239 5.72378C5.47385 5.97382 5.33337 6.31296 5.33337 6.66659V22.6666C5.33337 23.7275 5.7548 24.7449 6.50495 25.495C7.25509 26.2452 8.27251 26.6666 9.33337 26.6666H24" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.6666 10.6667H16" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.6666 16H16" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.6666 21.3333H16" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3_470">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text fs--14">임대문의</p>
          </a>
        </li>

        <li>
          <a 
            href="#"
            className="content--wrap d-flex flex-column justify-content-center align-items-center"
            onClick={(e) => e.preventDefault()}
          >
            <div className="icon--wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M10.6667 9.33333V4M21.3333 9.33333V4M9.33333 14.6667H22.6667M6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V9.33333C28 7.86057 26.8061 6.66667 25.3333 6.66667H6.66667C5.19391 6.66667 4 7.86057 4 9.33333V25.3333C4 26.8061 5.19391 28 6.66667 28Z" stroke="#00427A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <p className="text fs--14">방문예약</p>
          </a>
        </li>

        <li>
          <div className="scroll-top content--wrap d-flex flex-column justify-content-center align-items-center">
            <div className="icon--wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="0.9" y="0.9" width="24.2" height="24.2" rx="12.1" stroke="#00427A" strokeWidth="1.8"></rect>
                <path d="M13.6364 6.3636C13.2849 6.01213 12.7151 6.01213 12.3636 6.3636L6.63604 12.0912C6.28457 12.4426 6.28457 13.0125 6.63604 13.364C6.98751 13.7154 7.55736 13.7154 7.90883 13.364L13 8.27279L18.0912 13.364C18.4426 13.7154 19.0125 13.7154 19.364 13.364C19.7154 13.0125 19.7154 12.4426 19.364 12.0912L13.6364 6.3636ZM12.1 19C12.1 19.4971 12.5029 19.9 13 19.9C13.4971 19.9 13.9 19.4971 13.9 19L12.1 19ZM12.1 7L12.1 19L13.9 19L13.9 7L12.1 7Z" fill="#00427A"></path>
              </svg>
            </div>
            <p className="text fs--14">TOP</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default QuickMenu;
