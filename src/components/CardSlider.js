import React, { useState, useEffect, useMemo } from "react";
import './CardSlider.css'; 

const CardSlider = () => {
  
  const cards = useMemo(() => [
    { id: 1, imgSrc: "/assets/img/Frame 12611591.png", text: "뚝심한우" },
    { id: 2, imgSrc: "/assets/img/food.png", text: "솔솥" },
    { id: 3, imgSrc: "/assets/img/Frame 126.png", text: "뚝심한우" },
    { id: 4, imgSrc: "/assets/img/Frame 12611.png", text: "차이797" },
    { id: 5, imgSrc: "/assets/img/Frame 1261159.png", text: "이춘복참치" },
    { id: 6, imgSrc: "/assets/img/Frame 126115918.png", text: "봉우리한정식" },
    { id: 7, imgSrc: "/assets/img/Frame 1261159189.png", text: "아티제" },
    { id: 8, imgSrc: "/assets/img/Frame 12611591.png", text: "아티제" },
    { id: 9, imgSrc: "/assets/img/Frame 126.png", text: "뚝심한우" },
    { id: 10, imgSrc: "/assets/img/Frame 12611.png", text: "차이797" },
    { id: 11, imgSrc: "/assets/img/Frame 126115918.png", text: "봉우리한정식" },
  ], []);

  
  const [visibleCards, setVisibleCards] = useState(cards);

 
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
       
        setVisibleCards(cards.slice(0, 5));
      } else {

        setVisibleCards(cards);
      }
    };


    updateVisibleCards();


    window.addEventListener('resize', updateVisibleCards);


    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, [cards]);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden mt-0 mb-4">

      <div className="flex justify-center gap-6 items-center">

        {visibleCards.map((card, index) => (
          <div
            key={card.id}
            className={`content--wrap animate-slide-in-from-top ${
              index === Math.floor(visibleCards.length / 2) ? "slick-current" : ""
            }`}
            style={{
              width: index === Math.floor(visibleCards.length / 2) ? "850px" : "350px",
              height: index === Math.floor(visibleCards.length / 2) ? "270px" : "250px",
              transition: "all 0.5s ease-in-out",
              opacity: index === Math.floor(visibleCards.length / 2) ? 1 : 0.85,
              transform: index === Math.floor(visibleCards.length / 2) ? "translateY(0px)" : "translateY(40px)",
              marginBottom: "0",
            }}
          >
            <div className="thumb--wrap position-relative">
              <img
                className="fit--img object-contain rounded-lg"
                src={card.imgSrc}
                alt={`Card ${card.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <p className="text-center mt-2">{card.text}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;


























