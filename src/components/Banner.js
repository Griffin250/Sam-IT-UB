import React from 'react'
import bannerImage from '../assets/otherImages/Sameyde.vgs.jpg';

export const Banner = () => {

  return (
    <div
      className="relative flex items-center justify-center text-center py-24 px-4 sm:py-32"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto">
        <h3 className="text-xl font-semibold text-white sm:text-4xl">
        When it comes to your IT, everything is mission critical. <br/> We stand by the expertise and consulting we provide.
        </h3>
      </div>
    </div>
  );
};

export default Banner;



