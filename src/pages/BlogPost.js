import React, { useEffect, useState, useRef } from "react";
import Technician from "../assets/otherImages/BlogImages/Technician.png";
import Students from "../assets/otherImages/BlogImages/Isiah_Emma.png";
import UpcomingEvent from "../assets/otherImages/BlogImages/UpcomingEvent.png";
import Sam_IT_Poster from "../assets/otherImages/BlogImages/Chrismas_eve.png";
import AI_Robot from "../assets/otherImages/BlogImages/AI_Robot.png";
import Cyber from "../assets/otherImages/BlogImages/Cyber_Security.png";
import Support from "../assets/otherImages/BlogImages/Support.png";
import UpcomingEvent_2 from "../assets/otherImages/BlogImages/Slush'D.png";
import Impact from "../assets/otherImages/BlogImages/Impacts.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const BlogPosts = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Adjust according to the number of posts

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop back to first post
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides); // Loop to last post
  };

  useEffect(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentSlide * containerWidth, // Scroll to the current slide
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const {t} = useTranslation()

  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-gray-500 w-5/6 m-auto blog-section-divider ">
        {" "}
      </div>
      <div className="container mx-auto px-8 py-8 w-full bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
        <h1 className="text-3xl font-bold text-center mb-8 ">
        {t("blog.blogTitle")}
        </h1>
        <p className="text-center mb-8 text-lg text-gray-600">
           {t("blog.blogDesc")}.
        </p>
        <div
          ref={scrollRef}
          className="blog-section flex m-auto overflow-x-hidden space-x-4 snap-x snap-mandatory scrollbar-hidden blog-section"
        >
          {/* Repeat your blog section cards here */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start hover:shadow-xl">
            <img
              src={Students}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              {t("blog.blog_1_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_1_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_1_p1")} <br /> {t("blog.blog_1_p2")}
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600 "
            >
               {t("blog.blogLink")} &rarr;
            </a>
          </div>

          {/*  blog posts  2*/}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Support}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_2_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_2_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_2_p")}
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
             {t("blog.blogLink")} &rarr;
            </a>
          </div>
            {/*  blog posts  3*/}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-orange-700 via-orange-200 to-orange-500 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_3_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_3_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_3_p")}
            </p>

            <a
              href="https://agderfk.pameldingssystem.no/itbransjetreff240125"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>
 {/*  blog posts  4*/}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={AI_Robot}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
               {t("blog.blog_4_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_4_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_4_p")}
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>

          {/* Repeat for other 5 blog */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Technician}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_5_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_5_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_5_p")}
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600k"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>
          {/* Repeat for other 6 blog */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent_2}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-orange-700 via-orange-200 to-orange-500 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_6_h2")}
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_6_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_6_p")}
            </p>

            <a
              href="https://digin.no/events/slushd-energy/"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>
           {/* Repeat for other 7 blog */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Sam_IT_Poster}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_7_h2")}  {" "}
              
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_7_h3")}
            </h3>
            <p className="text-gray-600 text-sm">
            {t("blog.blog_7_p")}
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>
           {/* Repeat for other 8 blog */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Cyber}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Enhanced H2 Title */}
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
            {t("blog.blog_8_h2")}
            </h2>

            {/* Improved H3 Title */}
            <h3 className="font-bold text-gray-600 mb-2">
            {t("blog.blog_8_h3")}
            </h3>

            <p className="text-gray-600 text-sm">
            {t("blog.blog_8_p")}
            </p>

            <a
              href="https://agderfk.pameldingssystem.no/itbransjetreff240125"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
             {t("blog.blogLink")} &rarr;
            </a>
          </div>

           {/* Repeat for other 9 blog */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Impact}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Our Impact
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Supporting the Local Community with Technology
            </h3>
            <p className="text-gray-600 text-sm">
              Sam-IT UB empowers the local community with IT solutions,
              workshops, and tech events, helping businesses and individuals
              thrive in the digital age...
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              {t("blog.blogLink")} &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full ${currentSlide === index ? "bg-orange-700" : "bg-gray-400"}`}
            ></span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4 md:gap-80 gap-12">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={faBackwardStep} className="mr-1" /> Previous
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
          >
            Next <FontAwesomeIcon icon={faForwardStep} className="ml-2" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a href="NoLink" className="text-lg font-medium text-blue-600">
            All Posts
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
