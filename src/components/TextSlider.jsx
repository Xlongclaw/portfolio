import React, { useState, useEffect } from "react";

const TextSlider = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="relative overflow-hidden h-16">
      {" "}
      {/* Adjust height as needed */}
      {texts.map((text, index) => (
        <div
          key={index}
          className={`absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-transparent transition-opacity duration-500 transform ${
            index === currentTextIndex ? "opacity-100" : "opacity-0"
          } ${
            index === currentTextIndex ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextSlider;
