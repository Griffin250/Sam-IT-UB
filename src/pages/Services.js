import React from "react";
import { useTranslation } from "react-i18next";

import ServiceImage from '../../src/assets/otherImages/SupportCommunity.png'

const Services = () => {
  const { t} = useTranslation();


  return (
    <div className="bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-12 px-6 md:px-16 lg:px-24 mt-12">

    <section className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        
        {/* Left Column (Text) */}
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-600">
            The Service You Deserve
            <span className="block text-6xl md:text-6xl mt-4 font-bold text-gray-800">
              The Service We Give!
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-medium hover:bg-blue-700 transition-colors">
              Find Out
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-orange-600 rounded-lg text-blue-700 text-lg font-medium hover:bg-orange-600 hover:text-white transition-all">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ServiceImage} // Replace with the actual image URL
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-md "
          />
        </div>
      </div>
    </section>


    

      <div className="max-w-4xl mx-auto">

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
          <p className="text-gray-600">{t("features.managedServicesDescription")}</p>
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
