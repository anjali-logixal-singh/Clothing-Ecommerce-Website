import React, { useState } from "react";
import data from "../data.json";

export default function Slide() {

  const slides = data.main.slides;
   
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => (
    currentIndex== 0 ? setCurrentIndex((slides.length)-1) : setCurrentIndex(currentIndex-1)
  )

  const lastSlide = () => {
    currentIndex== (slides.length)-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)
  }

  return (
    <div className="">
      <div className="relative overflow-hidden hidden lg:block md:block">
        <img src={slides[currentIndex].img} className="duration-500"/>
        <div className="absolute top-[40%] inset-0 hover:scale-12
        5 duration-500 text-white ">
          <p className="pb-2">{slides[currentIndex].text.para}</p>
          <p className="text-4xl py-2 font-bold">{slides[currentIndex].text.header}</p>
          <button className="my-2 py-1 px-2 border hover:bg-white hover:text-amber-500">{slides[currentIndex].button}</button>
        </div>
        <div className="absolute top-[50%] left-[2%]">
          <button className="bg-transparent text-gray-300 hover:text-amber-600" onClick={prevSlide}>
          <i class="las la-chevron-circle-left lg:text-5xl text-2xl"></i>
          </button>
        </div>
        <div className="absolute top-[50%] right-[2%]">
          <button className="bg-transparent text-gray-300 hover:text-amber-600" onClick={lastSlide}>
          <i class="las la-chevron-circle-right lg:text-5xl text-2xl"></i>          
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden lg:hidden md:hidden block">
        <img src={slides[currentIndex].imgSm} className="duration-500"/>
        <div className="absolute top-[20%] inset-0 hover:scale-12
        5 duration-500 text-white ">
          <p className="pb-2">{slides[currentIndex].text.para}</p>
          <p className="text-4xl py-2 font-bold">{slides[currentIndex].text.header}</p>
          <button className="my-2 py-1 px-2 border hover:bg-white hover:text-amber-500">{slides[currentIndex].button}</button>
        </div>
        <div className="absolute top-[50%] left-[2%]">
          <button className="bg-transparent text-gray-300 hover:text-amber-600" onClick={prevSlide}>
          <i class="las la-chevron-circle-left lg:text-5xl text-2xl"></i>
          </button>
        </div>
        <div className="absolute top-[50%] right-[2%]">
          <button className="bg-transparent text-gray-300 hover:text-amber-600" onClick={lastSlide}>
          <i class="las la-chevron-circle-right lg:text-5xl text-2xl"></i>          
          </button>
        </div>
      </div>

    

    </div>
  );
}
