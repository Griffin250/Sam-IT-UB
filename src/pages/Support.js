import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../components/ui/CodingAnimation.json";
import SmallNavBar from "../components/Navbar/SmallNavBar";
import SmallFooter from "../components/Footer/SmallFooter";

const Support = () => {
  return (
    <> 
    <SmallNavBar/>
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
    <SmallFooter/>
    </>
  );
};

export default Support;
