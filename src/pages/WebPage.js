import React from "react";
import logo from "../assets/samit_logo.png";

const WebPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden">
      {/* Main Section */}
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Trenger du en imponerende nettside?
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          I Frameworks finner du folk som kun bygger gode nettsider og webapper.
          Vi sier ja til utfordringer andre ikke klarer å løse, hjelper deg med
          å være kreativ og bryr oss om deg og bedriften din.
        </p>
      </div>

      {/* Logo Section with Infinite Scroll */}
      <div className="relative w-full overflow-hidden mt-12">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {/* Duplicate the logos to create a seamless loop */}
          {[...Array(12)].map((_, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebPage;
