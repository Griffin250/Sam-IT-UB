import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import language_1 from "../../assets/Icons/Language_1.png";
import language_2 from "../../assets/Icons/Language_2.png";
import website_logo from "../../assets/Website_logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Boolean to toggle navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Number to track last scroll position
 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsDropdownOpen(false); // Close the dropdown
  };

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
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
          <NavLink to="/" onClick={scrollToTop}>
            {" "}
            <img
              src={website_logo}
              alt=""
              className="rounded-full sm:w-30 sm:h-20 w-3/5 sm:w-52 sm:h-30"
            />
          </NavLink>
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-16 text-gray-200 h-5 cursor-pointer hover:text-orange-600 md:hidden"
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

            <NavLink to="/services" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Services
              </li>
            </NavLink>
            <NavLink to="/support" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Support{" "}
                {/*.....<FontAwesomeIcon icon={faChevronDown} />......*/}
              </li>
            </NavLink>

            <NavLink to="/contactForm" onClick={scrollToTop}>
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Contact
              </li>
            </NavLink>
          </ul>

          <form className="searchForm flex items-center w-4/5" method="get">
            <label className="relative flex items-center w-3/4 ml-12">
              <input
                type="search"
                placeholder="Search here..."
                className="w-full p-2 pl-4 pr-10 text-gray-100 border bg-inherit rounded-lg shadow-sm outline-none focus:ring-orange-400"
              />
              <button
                type="submit"
                className="border border-none absolute right-0 top-3"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-3 text-gray-300  text-xl cursor-pointer hover:text-orange-600"
                />{" "}
              </button>
            </label>
          </form>
        </div>

        {/* Right side - New Job Button, Notification Icon, Profile */}
        <div className="flex items-center space-x-6">
          <NavLink to={"/loginSignup"} onClick={scrollToTop}>
            {" "}
            <button className="hidden md:flex items-center space-x-1  bg-orange-600 hover:bg-orange-700 text-white py-1 px-3 rounded-lg font-bold text-xl">
              <span className="">Join Us</span>
            </button>
          </NavLink>

          <div className="relative languages">
      {/* Trigger for Dropdown */}
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center cursor-pointer p-2  rounded-md"
      >
        <img
          src={selectedLanguage === "English" ? language_1 : language_2} // Display current language icon
          alt="Selected Language"
          className="w-6 h-6 rounded-full mr-2"
        />
        <p className="text-gray-100 font-bold">{selectedLanguage}</p>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-gray-900 text-white rounded-md shadow-lg w-full sm:w-40 z-10">
          {selectedLanguage !== "English" && (
            <button
              className="px-4 py-2 hover:bg-gray-700 flex items-center w-full text-left"
              onClick={() => handleLanguageChange("English")}
            >
              <img
                src={language_1} // English icon/image
                alt="English"
                className="w-5 h-5 rounded-full mr-2"
              />
              English
            </button>
          )}
          {selectedLanguage !== "Norsk" && (
            <button
              className="px-4 py-2 hover:bg-gray-700 flex items-center w-full text-left"
              onClick={() => handleLanguageChange("Norsk")}
            >
              <img
                src={language_2} // Norsk icon/image
                alt="Norsk"
                className="w-5 h-5 rounded-full mr-2"
              />
              Norsk
            </button>
          )}
        </div>
      )}
    </div>

    
          {/* Hamburger Menu - Visible on small screens */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 hover:text-orange-600"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-gray-400 p-4 space-y-2">
          <ul className="md:flex items-center space-x-6 text-gray-400">
            <NavLink
              to={"/"}
              onClick={() => {
                scrollToTop();
                setMobileMenuOpen(false);
              }}
            >
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Home
              </li>{" "}
            </NavLink>
            <NavLink
              to="/aboutus"
              onClick={() => {
                scrollToTop();
                setMobileMenuOpen(false);
              }}
            >
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                About
              </li>
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => {
                scrollToTop();
                setMobileMenuOpen(false);
              }}
            >
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Services <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>
            <NavLink
              to="/support"
              onClick={() => {
                scrollToTop();
                setMobileMenuOpen(false);
              }}
            >
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Support <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </NavLink>

            <NavLink
              to="/contactForm"
              onClick={() => {
                scrollToTop();
                setMobileMenuOpen(false);
              }}
            >
              {" "}
              <li className="hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Contact
              </li>
            </NavLink>
          </ul>
          <NavLink
            to={"/loginSignup"}
            onClick={() => {
              scrollToTop();
              setMobileMenuOpen(false);
            }}
          >
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
