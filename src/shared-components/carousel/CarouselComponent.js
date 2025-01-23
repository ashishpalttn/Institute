import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import testVideo from "../../assets/videos/testVideo.mp4"
import { useTranslation } from "react-i18next";



export function CarouselComponent({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
  const {t} = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(handleNext, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative mb-8 ">
      <div
        className="flex transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 bg-primary-700 hover:bg-primary-500 text-gray-800 px-2 py-2 rounded-full"
      >
        <ChevronLeftIcon />
      </button>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary-800">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          {t('welcome')}
        </h1>
        <p className="text-lg ">
          Empowering students to achieve their academic goals.
        </p>
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 bg-primary-700 hover:bg-primary-500 text-gray-800 px-2 py-2 rounded-full"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute flex left-0 right-0 bottom-4 justify-center">
        {slides?.map((_, index) => (
          <button onClick={() => setCurrentIndex(index)}>
          <div
            class={`transition-all bg-white-50 px-4 mx-1 rounded-full text-red-800 w-2 h-2 ${
              index === currentIndex
                ? "bg-primary-500 "
                : "bg-primary-800"
            }`}
          ></div>
        </button>
        ))}
      </div>
    </div>
  );
}
