import React from "react";
import Gadgets from "../../src/assets/otherImages/Pc.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Product = () => {
  const scrollToTop = () => {
    Window.scrollTo({
      top: 0,
      behaviour: "smoooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-gray-50 to-orange-50 p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Discover Your Perfect Gadget
        </h1>
        <p className="text-lg text-gray-600">
          Whether you need a laptop for school, business, gaming, or personal
          work, our experts can help you choose the best quality product to meet
          your needs.
        </p>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={Gadgets} // Replace with your image URL
            alt="Consultation Service"
            className="w-96 h-auto object-contain drop-shadow-lg rounded shadow-lg border-2"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Personalized recommendations tailored to your needs.</li>
            <li>Expert guidance to ensure top quality and value.</li>
            <li>Access to exclusive deals and trusted brands.</li>
            <li>Save time and avoid confusion with professional advice.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Still not sure? Let our experts guide you!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Book a free consultation, and we'll help you make an informed decision
          based on your specific needs.
        </p>
        <NavLink to="/contactForm" onClick={scrollToTop}>
          {" "}
          <button className="btn px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg transition-all">
            Talk to an Expert{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="right-arrow ml-2 w-6"
            />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
