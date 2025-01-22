import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CEO from "../assets/otherImages/Tech.png";
import Team from "../assets/Team/Liam_Emma.png";
import Developers from "../assets/otherImages/Isiah_Emma.png";
import Technician from "../assets/otherImages/Technician.png";
import { NavLink } from "react-router-dom";

import ProfileCard from "../pages/ProfileCard";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Set a timer to handle loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle language switch
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {isLoading ? (
        <div className="bg-gradient-to-br from-blue-200 via-gray-100 to-blue-200 mt-5">
          {/* Tailwind skeleton*/}
          {/* Navbar Language Switch */}
          <div className="flex justify-end p-4 bg-gray-200">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-4 py-2 mr-2 ${
                i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-300"
              } rounded`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("no")}
              className={`px-4 py-2 mr-2 ${
                i18n.language === "no" ? "bg-blue-600 text-white" : "bg-gray-300"
              } rounded`}
            >
              Norsk
            </button>
          </div>

          {/* Loading Sections */}
          <section className="bg-gradient-to-br from-blue-300 via-gray-100 text-gray-800 py-20 px-4 animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-2/4 mx-auto"></div>
          </section>

          <section className="py-16 px-4 md:px-20 animate-pulse">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-64 bg-gray-200 rounded-lg shadow-lg"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
              <div className="md:order-2">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-64 bg-gray-200 rounded-lg shadow-lg"></div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-200 via-gray-100 to-blue-200 py-16 px-4 md:px-20 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-32 bg-gray-200 mx-auto mb-4 rounded"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="text-center">
                <div className="h-32 bg-gray-200 mx-auto mb-4 rounded"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="text-center">
                <div className="h-32 bg-gray-200 mx-auto mb-4 rounded"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-300 via-gray-100 text-gray-800 py-40 px-4">
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-4">
              {t("about_us.title")}
            </h1>
            <p className="text-lg md:text-xl max-w-5xl mx-auto">{t("about_us.intro1")}</p>
            <br />
            <p className="text-lg md:text-xl max-w-5xl mx-auto">{t("about_us.intro2")}</p>
          </section>

          {/* Mission and Vision */}
          <section className="py-16 px-4 md:px-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("about_us.mission_title")}</h2>
                <p className="text-gray-600 leading-relaxed">{t("about_us.mission")}</p>
              </div>
              <div>
                <img src={Team} alt="Mission" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
              <div className="md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("about_us.vision_title")}</h2>
                <p className="text-gray-600 leading-relaxed">{t("about_us.vision")}</p>
              </div>
              <div>
                <img src={Technician} alt="Vision" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-gray-100 py-16 px-4 md:px-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              {t("about_us.why_choose_us")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src={CEO}
                  alt={t("about_us.expert_team_title")}
                  className="mx-auto mb-4 h-1/2 rounded"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t("about_us.expert_team_title")}</h3>
                <p className="text-gray-600">{t("about_us.expert_team_desc")}</p>
              </div>
              <div className="text-center">
                <img
                  src={Developers}
                  alt={t("about_us.tailored_solutions_title")}
                  className="mx-auto mb-4 rounded h-60 w-5/6"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t("about_us.tailored_solutions_title")}</h3>
                <p className="text-gray-600">{t("about_us.tailored_solutions_desc")}</p>
              </div>
              <div className="text-center">
                <img
                  src={Team}
                  alt={t("about_us.proven_results_title")}
                  className="mx-auto mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t("about_us.proven_results_title")}</h3>
                <p className="text-gray-600">{t("about_us.proven_results_desc")}</p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <ProfileCard />

          {/* Call to Action */}
          <section className="bg-gradient-to-br from-blue-200 via-gray-100 to-blue-200 text-gray-700 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("about_us.cta_title")}</h2>
            <p className="text-lg mb-6">{t("about_us.cta_desc")}</p>
            <NavLink
              to="/contact"
              onClick={scrollToTop}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              {t("about_us.contact_us")}
            </NavLink>
          </section>
        </>
      )}
    </>
  );
};

export default AboutUs;
