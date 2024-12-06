import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../components/ui/CodingAnimation.json";

const Support = () => {
  return (
    <div className="bg-gray-100">
     
      {/* Resize animation using style prop */}
      <div className="flex justify-center">
        <Lottie
          animationData={codingAnimation}
          loop={true}
          style={{ width: "700px", height: "600px" }} // Adjust size here
        />
      </div>
    </div>
  );
};

export default Support;
