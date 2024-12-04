import React from 'react';
import website_logo from "../../assets/otherImages/Logo.png";
import { NavLink } from 'react-router-dom';

const SmallNavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center sm:justify-start items-center sm:items-start ml-5">
      <NavLink to="/" onClick={scrollToTop}>
        <img
          src={website_logo}
          alt="Website Logo"
          className="rounded-full w-2/4 sm:w-40 sm:h-30 m-auto"
        />
      </NavLink>
    </div>
  );
};

export default SmallNavBar;
