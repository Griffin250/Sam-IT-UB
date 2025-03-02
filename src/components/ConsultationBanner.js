import React from 'react'
import backgroundImage from '../assets/otherImages/BackgroundImage.jpeg';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

export const ConsultationBanner = () => {
  const {t} = useTranslation()
const scrollToTop = () =>{
  window.scrollTo({
    top:0,
    behaviour:"smooth"
  });
}
useEffect(()=>{
  AOS.init({
    duration:1500,
    once:false,
});
}, []);
  return (
    <div
      className="relative flex items-center justify-center text-center py-24 px-4 sm:py-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    data-aos="fade-in" data-aos-duration="1500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto">
        <h3 className="text-xl font-semibold text-white sm:text-4xl" data-aos="fade-down">
          {t("banner.title1")}
          <br />
          {t("banner.title2")}
        </h3>
        <NavLink to={"/ContactForm"} onClick={scrollToTop}>  <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-700 focus:outline-none" data-aos="zoom-in">
          {t("banner.bookingBtn")}
        </button></NavLink>
      </div>
    </div>
  );
};

export default ConsultationBanner;
