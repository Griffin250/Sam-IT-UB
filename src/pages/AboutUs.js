import React from "react";
import { useTranslation } from "react-i18next";
import CEO from "../assets/otherImages/Tech.png";
import Team from "../assets/Team/Liam_Emma.png";
import Developers from "../assets/otherImages/Isiah_Emma.png";
import Technician from "../assets/otherImages/Technician.png";
import { NavLink } from "react-router-dom";

import ProfileCard from "../pages/ProfileCard";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
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
    <div className="bg-gray-50 mt-5">
      {/* Navbar Language Switch */}
      <div className="flex justify-end p-4 bg-gray-200">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-2 mr-2 hidden ${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-300"
          } rounded`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("no")}
          className={`px-4 py-2 hidden ${
            i18n.language === "no" ? "bg-blue-600 text-white" : "bg-gray-300"
          } rounded`}
        >
          Norsk
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 via-gray-100 text-gray-800 py-20 px-4">
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
            <img src={CEO} alt={t("about_us.expert_team_title")} className="mx-auto mb-4 h-1/2 rounded" />
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
            <img src={Team} alt={t("about_us.proven_results_title")} className="mx-auto mb-4 rounded" />
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
        <NavLink to={"/ContactForm"} onClick={scrollToTop}>
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800">
            {t("about_us.contact_us")}
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUs;
