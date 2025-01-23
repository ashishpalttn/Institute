import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GifBackgroundHeading = ({ level, text, align, gifUrl, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const HeadingTag = `h${level}`; // Dynamically set the heading level (h1, h2, etc.)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true); // Trigger visibility after 100ms
    }, 100);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  return (
    <div
      className={`relative ${
        align === "center"
          ? "text-center"
          : align === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      {/* Background GIF */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${gifUrl})`,
        }}
      ></div>

      {/* Heading Text */}
      <HeadingTag
        className={`relative z-10 transform transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${className}`}
      >
        {text}
      </HeadingTag>
    </div>
  );
};

// Default Props
GifBackgroundHeading.defaultProps = {
  level: 1,
  align: "center",
  gifUrl: "https://media.giphy.com/media/26FxcFFpHHpUmBaAA/giphy.gif", // Placeholder GIF URL
  className: "text-4xl font-bold text-white",
};

// Prop Types
GifBackgroundHeading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired, // h1 to h6
  text: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]), // Text alignment
  gifUrl: PropTypes.string.isRequired, // GIF URL for background
  className: PropTypes.string, // Additional Tailwind or custom classes
};

export default GifBackgroundHeading;
