import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import testVideo from "../../assets/videos/testVideo.mp4"


export function CarouselComponent({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
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
    <div className="overflow-hidden rounded-xl relative mb-8 ">
      <div
        className="flex transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 bg-white-50 hover:bg-white-700 text-gray-800 px-2 py-2 rounded-full"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 bg-white-50 hover:bg-white-700 text-gray-800 px-2 py-2 rounded-full"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute flex left-0 right-0 bottom-4 justify-center">
        {slides?.map((_, index) => (
          <button onClick={() => setCurrentIndex(index)}>
          <div
            class={`transition-all bg-white-50 px-4 mx-1 rounded-full text-red-800 w-2 h-2 ${
              index === currentIndex
                ? "bg-white-700 "
                : "bg-opacity-50"
            }`}
          ></div>
        </button>
        ))}
      </div>
    </div>
  );
}
