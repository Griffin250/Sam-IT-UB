import React from "react";
import { useTranslation } from "react-i18next";

import ServiceImage from "../../src/assets/otherImages/SupportCommunity.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-12 px-6 md:px-16 lg:px-24 mt-2">
      <section className="min-h-screen flex items-center justify-center py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
          {/* Left Column (Text) */}
          <div className="md:w-3/4 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-600 font-serif">
              The Service You Deserve,
              <span className="block text-2xl sm:text-3xl md:text-3xl mt-4 font-bold text-gray-800 text-center">
                The Service We Give!
              </span>
            </h2>

            <p className="text-sm md:text-xl mb-8 font-serif">
              We provide tailored IT solutions with a focus on innovation,
              security, and scalability. From expert tech support to custom web
              development, our dedicated team ensures your technology works
              seamlessly for you.
            </p>
            <div className="flex justify-center md:justify-start gap-8">
              <p className="text-sm mr-2 font-serif md:text-xl">
                Curious about how SAM-IT UB can transform your digital
                experience?
                <button className="px-2 py-2 sm:px-3 sm:py-2 md:w-36 w-32 font-bold ml-4 sm:ml-8 border bg-orange-500 rounded-lg text-gray-100 text-sm sm:text-lg hover:bg-orange-600 transition-colors">
                  Find Out{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 w-4 sm:w-6"
                  />
                </button>
              </p>

              <p className="text-sm mr-2  font-serif md:text-xl">
                Explore our work in action and see why businesses and
                individuals trust us to drive their success!{" "}
                <button className="px-2 py-2 sm:px-3 sm:py-2 border-2 md:w-40 w-32 ml-4 sm:ml-8 font-bold border-orange-600 rounded-lg text-gray-800 text-sm sm:text-lg hover:bg-orange-600 transition-all">
                  Live Demo{" "}
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

      <div className="max-w-4xl mx-auto">
        <div className="border-t border-gray-500 w-4/6 mb-2 m-auto"></div>
        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-700 mb-4 text-center">
          {t("servicesHeading")}
        </h2>
        {/* Subtitle */}
        <h3 className="text-gray-600 text-2xl mb-8 text-center">
          {t("servicesSubtitle")}
        </h3>
        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          {t("servicesDescription")}
        </p>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Push to Deploy */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("features.itSupport")}
          </h3>
          <p className="text-gray-600">{t("features.itSupportDescription")}</p>
        </div>
        {/* SSL Certificates */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("features.managedServices")}
          </h3>
          <p className="text-gray-600">
            {t("features.managedServicesDescription")}
          </p>
        </div>
        {/* Simple Queues */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("features.security")}
          </h3>
          <p className="text-gray-600">{t("features.securityDescription")}</p>
        </div>
        {/* Advanced Security */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("features.helpDesk")}
          </h3>
          <p className="text-gray-600">{t("features.helpDeskDescription")}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
