import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../assets/Icons/Language_1.png";
import website_logo from "../../assets/otherImages/Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Boolean to toggle navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Number to track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // User is scrolling up, show the navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  //Scroll to Top when a navLink is clicked!
  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behaviour:"smooth"
    });
  }
  return (
      <div
      className={`bg-gray-900 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      id="navBar"
    >
      <div className="flex items-center justify-between max-w-full mx-auto px-4 py-2">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={website_logo}
            alt=""
            className="rounded-full w-auto sm:w-40 sm:h-30"
          />
        
        </div>

        {/* Navigation Links - Hidden on small screens */}

        <div className="hidden md:flex items-center space-x-6 text-gray-400">
          <ul className="hidden md:flex items-center space-x-6 text-gray-400">
            <NavLink to="/" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Home
              </li>
            </NavLink>

            <NavLink to="/aboutus" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                About
              </li>
            </NavLink>
            <NavLink to="/projects" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Projects <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>
            <NavLink to="/services" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Services <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>
            
            <NavLink to="/contactForm" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Contact
              </li>
            </NavLink>
          </ul>
          <form>
            <input type="search" placeholder="Search here..." className="bg-inherit border border-gray-400 rounded p-1 outline-none"/>
          </form>
        </div>

        {/* Right side - New Job Button, Notification Icon, Profile */}
        <div className="flex items-center space-x-6">
          <form className="searchForm flex" method="get">
            <input type="seacrh" placeholder="Search here..."  className="hidden"/> 
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 hover:text-white cursor-pointer h-6 md:block"
          />
          </form>
         
          <NavLink to={"/loginSignup"} onClick={scrollToTop}>
            {" "}
            <button className="hidden md:flex items-center space-x-1 border-orange-600 border hover:bg-orange-600 text-white py-1 px-3 rounded-lg font-bold text-xl">
              <span className="">Join Us</span>
            </button>
          </NavLink>

          <img
            src={profileImage} // Replace with actual profile image URL
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer hidden md:block"
          />

          {/* Hamburger Menu - Visible on small screens */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-gray-400 p-4 space-y-2">
          <ul className="md:flex items-center space-x-6 text-gray-400">
            <NavLink to={"/"}  onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} >
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Home
              </li>{" "}
            </NavLink>
            <NavLink to="/aboutus" onClick={()=>{scrollToTop(); setMobileMenuOpen(false);}}>
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                About
              </li>
            </NavLink>
            <NavLink to="/services" onClick={()=>{scrollToTop(); setMobileMenuOpen(false);}}>
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Services <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>
            <NavLink to="/projects" onClick={()=> {scrollToTop(); setMobileMenuOpen(false);}}>
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Projects <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>
          
            <NavLink to="/contactForm" onClick={()=> {scrollToTop(); setMobileMenuOpen(false); }}>
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Contact
              </li>
            </NavLink>
          </ul>
          <NavLink to={"/loginSignup"} onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}>
            {" "}
            <button className="md:flex items-center space-x-1 bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
              <span>Join Us</span>
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default Navbar;
