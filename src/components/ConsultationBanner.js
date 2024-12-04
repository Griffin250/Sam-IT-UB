import React from 'react'
import backgroundImage from '../assets/otherImages/BackgroundImage.jpeg';
import { NavLink } from 'react-router-dom';

export const ConsultationBanner = () => {
const scrollToTop = () =>{
  window.scrollToTop({
    top:0,
    behaviour:"smooth"
  })
}
  return (
    <div
      className="relative flex items-center justify-center text-center py-24 px-4 sm:py-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto">
        <h3 className="text-xl font-semibold text-white sm:text-4xl">
          When it comes to your IT, everything is mission critical.
          <br />
          We stand by the expertise and consulting we provide.
        </h3>
        <NavLink to={"/ContactForm"} onClick={scrollToTop}>  <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-700 focus:outline-none">
          BOOK A CONSULTATION
        </button></NavLink>
      </div>
    </div>
  );
};

export default ConsultationBanner;
