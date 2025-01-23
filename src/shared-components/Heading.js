import React from "react";
import PropTypes from "prop-types";

const Heading = ({ level, text, align, className, showDecoration, icon }) => {
    const HeadingTag = `h${level}`; // Dynamically set the heading level (h1, h2, etc.)

    return (
        <div
            className={`flex items-center my-4 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""
                }`}
        >
            {showDecoration && (
                <div className="flex items-center">
                    <div className="">
                        <div className="flex-grow ml-auto w-14 h-[3px] bg-gray-400 mb-1"></div>
                        <div className="flex-grow w-20 h-[3px] bg-gray-400"></div>
                    </div>
                    {icon && <span className="text-primary-500 text-xl mr-2">{icon}</span>}
                </div>
            )}
            <HeadingTag className={`px-4 ${className}`}>{text}</HeadingTag>
            {showDecoration && (
                <div className="flex items-center">
                    {icon && <span className="text-primary-600 text-xl ml-2">{icon}</span>}
                    <div>
                        <div className="flex-grow w-14 h-[3px] bg-gray-400 mb-1"></div>
                        <div className="flex-grow w-20 h-[3px] bg-gray-400"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Default Props
Heading.defaultProps = {
    level: 1,
    align: "center",
    className: "",
    showDecoration: true,
    icon: "★", // Default decorative icon
};

// Prop Types
Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired, // h1 to h6
    text: PropTypes.string.isRequired,
    align: PropTypes.oneOf(["left", "center", "right"]), // Text alignment
    className: PropTypes.string, // Additional Tailwind or custom classes
    showDecoration: PropTypes.bool, // Show or hide left/right decorations
    icon: PropTypes.node, // Custom icon or shape (e.g., emoji, SVG)
};

export default Heading;
