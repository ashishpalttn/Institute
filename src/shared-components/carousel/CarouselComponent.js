import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import testVideo from "../../assets/videos/testVideo.mp4"


export function CarouselComponent({data, autoSlide=false, autoSlideInterval=3000}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const carouselData = homePageData.carouselData;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

useEffect(() => {
  if(autoSlide){
    const interval = setInterval(
      handleNext , autoSlideInterval);
    return () => clearInterval(interval);
  }
}, [autoSlide, autoSlideInterval]);

  const RenderImage = ({ item, index }) => {
    return (
      <div className="flex overflow-hidden rounded-xl w-full h-[32rem] ">
        {" "}
        {/*style={{transform:`translateX(-${index*100 }%)`}}*/}
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform ease-out duration-500"
        />
        {/* <video className="flex overflow-hidden rounded-xl w-full h-[32rem] " src={testVideo} autoPlay muted loop> </video> */}
      </div>
    );
  };

  return (
    <div className="overflow-hidden rounded-xl relative w-full h-[12rem] lg:h-[32rem] mb-8 ">
      {" "}
      {/* Set a fixed height for the carousel */}
      <RenderImage item={data[currentIndex]} index={currentIndex} />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2  ease-out duration-500 y-1/2 bg-white-50 hover:bg-white-700 text-gray-800 px-2 py-2 rounded-full hover:bg-white"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3  bg-white-50 hover:bg-white-700  text-gray-800 px-2 py-2 rounded-full hover:bg-white"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute flex left-0 right-0 bottom-4 justify-center">
        {data?.map((item, index) => (
          <button onClick={() => setCurrentIndex(index)}>
            <div
              class={`transition-all bg-white-50 px-4 mx-1 rounded-full text-red-800 w-2 h-2 ${
                index === currentIndex
                  ? "bg-white-500 "
                  : "bg-opacity-50"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
