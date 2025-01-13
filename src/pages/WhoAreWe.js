import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faGithub,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
const WhoAreWe = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 3000,
      once: false,
    });

    // Set a timer to handle loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // Tailwind skeleton
        <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-16 mt-12 animate-pulse">
          <div className="px-4 mb-8">
            <div className="h-8 bg-gray-200 rounded w-1/2 m-auto"></div>
            <div className="mt-4 h-6 bg-gray-200 rounded w-3/4 m-auto"></div>
            <br/>
            <div className="mt-4 h-6 bg-gray-200 rounded w-4/5 m-auto"></div>
            <br />
            <div className="mt-4 h-6 bg-gray-200 rounded w-2/3 m-auto"></div>
          </div>
          <div className="text-center mb-8">
            <div className="mt-2 inline-block h-10 bg-gray-200 rounded w-1/3 m-auto"></div>
          </div>
          <div className="flex space-x-4 md:mt-0 m-auto">
            <div className="h-8 bg-orange-100 rounded w-8"></div>
            <div className="h-8 bg-orange-200 rounded w-8"></div>
            <div className="h-8 bg-orange-300 rounded w-8"></div>
            <div className="h-8 bg-orange-400 rounded w-8"></div>
            <div className="h-8 bg-orange-300 rounded w-8"></div>
            <div className="h-8 bg-orange-200 rounded w-8"></div>
            <div className="h-8 bg-orange-100 rounded w-8"></div>
          </div>
        </div>
      ) : (
        // Main content
        <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-16 mt-12">
          {/* Title Section */}
          <div className="px-4 mb-8" data-aos="fade-up">
            <h1 className="text-4xl text-center md:text-5xl font-bold text-gray-900">
              {t("whoAreWeTitle")}
            </h1>
            <p className="mt-4 text-lg text-gray-800 max-w-5xl m-auto">
              {t("whoAreWeDescription")}
            </p>
            <br />
            <p className="mt-4 text-lg text-gray-600 max-w-5xl m-auto">
              {t("whoAreWeMoreDescription")}
            </p>
          </div>

          {/* Button Section */}
          <div className="text-center mb-8">
            <p className="mt-2 inline-block text-gray-900 font-bold border-orange-600 border py-2 px-6 rounded-md text-4lg" data-aos="fade-down">
              {t("followUs")}
            </p>
          </div>
          <div className="flex space-x-4 md:mt-0 m-auto">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faFacebook} className="size-8" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faInstagram} className="size-8" />
            </a>
            <a
              href="https://discord.gg/sBrzuMpt"
              aria-label="Discord"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faDiscord} className="size-8" />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faXTwitter} className="size-8" />
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faGithub} className="size-8" />
            </a>
            <a
              href="https://youtube.com/"
              aria-label="YouTube"
              target="blank"
              className="text-orange-900 hover:text-orange-600"
              data-aos="fade-up">
              <FontAwesomeIcon icon={faYoutube} className="size-8" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhoAreWe;
