import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t} = useTranslation();


  return (
    <div className="bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-12 px-6 md:px-16 lg:px-24 mt-12">
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
