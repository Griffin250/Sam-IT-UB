import React from "react";
import Gadgets from "../../src/assets/otherImages/Pc.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Product = () => {
  const { t } = useTranslation(); // Initialize the translation function

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-gray-50 to-orange-50 p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {t("product.header")} {/* Translated text */}
        </h1>
        <p className="text-lg text-gray-600">
          {t("product.subHeader")} {/* Translated text */}
        </p>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={Gadgets}
            alt={t("product.imageAlt")} // Translated text for accessibility
            className="w-96 h-auto object-contain drop-shadow-lg rounded shadow-lg border-2"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("product.whyChooseUs.title")} {/* Translated text */}
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>{t("product.whyChooseUs.point1")}</li>
            <li>{t("product.whyChooseUs.point2")}</li>
            <li>{t("product.whyChooseUs.point3")}</li>
            <li>{t("product.whyChooseUs.point4")}</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("product.cta.title")} {/* Translated text */}
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          {t("product.cta.subText")} {/* Translated text */}
        </p>
        <NavLink to="/contactForm" onClick={scrollToTop}>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg transition-all">
            {t("product.cta.buttonText")}{" "}
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
