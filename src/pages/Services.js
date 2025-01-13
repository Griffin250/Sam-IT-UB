import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../components/Layout/Languages/i18n.js";
import ServiceImage from "../../src/assets/otherImages/SupportCommunity.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-5 px-6 md:px-16 lg:px-24 mt-2">
      {/* Language Toggle Buttons */}
      <div className="flex justify-end space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => changeLanguage("no")}
        >
          Norsk
        </button>
      </div>

      <section className="min-h-screen flex items-center justify-center py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
          {/* Left Column (Text) */}
          <div className="md:w-3/4 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-600 font-serif bg-gradient-to-r from-blue-600 via-orange-700 80% to-blue-500 bg-clip-text text-transparent">
              {t("serviceTitle")}
              <span className="block text-2xl sm:text-3xl md:text-3xl mt-4 font-bold text-orange-600 text-center">
                {t("serviceSubtitle")}
              </span>
            </h2>
            <p className="text-sm md:text-xl mb-8 font-serif">{t("serviceDescription")}</p>
            <div className="flex justify-center md:justify-start gap-8">
              <p className="text-sm mr-2 font-serif md:text-xl">
                {t("curiousAbout")}
                <button className="px-2 py-2 sm:px-3 sm:py-2 md:w-36 w-32 font-bold ml-4 sm:ml-8 border bg-orange-500 rounded-lg text-gray-100 text-sm sm:text-lg hover:bg-orange-600 transition-colors">
                  {t("findOut")}{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 w-4 sm:w-6"
                  />
                </button>
              </p>

              <p className="text-sm mr-2 font-serif md:text-xl">
                {t("exploreWork")}{" "}
                <button className="px-2 py-2 sm:px-3 sm:py-2 border-2 md:w-40 w-32 ml-4 sm:ml-8 font-bold border-orange-600 rounded-lg text-gray-800 text-sm sm:text-lg hover:border-orange-700 bg-transparent transition-all">
                  {t("liveDemonstartion")}{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-1 sm:w-6 w-4"
                  />
                </button>
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={ServiceImage}
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-md "
            />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
        <div className="border-t border-gray-500 w-4/6 mb-2 m-auto"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold text-gray-800 mb-4">{t("ourServices")}</h2>
          <h2 className="text-gray-700 text-2xl mb-8 sm:text-3xl md:text-3xl">{t("serviceHeading")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">{t("serviceDetails")}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
