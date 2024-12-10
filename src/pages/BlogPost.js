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

  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-gray-500 w-4/5 m-auto blog-section-divider">
        {" "}
      </div>
      <div className="container mx-auto px-8 py-8 w-full bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Latest News & Blog Posts
        </h1>
        <p className="text-center mb-8 text-lg text-gray-600">
          Stay updated on what's happening with our latest posts.
        </p>
        <div
          ref={scrollRef}
          className="blog-section flex m-auto overflow-x-hidden space-x-4 snap-x snap-mandatory scrollbar-hidden blog-section"
        >
          {/* Repeat your blog section cards here */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Students}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Our Office Location
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Welcom to our offices in Arendal
            </h3>
            <p className="text-gray-600 text-sm">
              At Sam-IT UB, we're excited to announce our expanded presence in
              Arendal, where we continue to offer IT support and solutions to
              everyone. <br />
              Our new office in Arendal serves as a hub for innovation and
              collaboration, where...
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600 "
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Support}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              User Support
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              5 Common IT Problems and How to Solve Them
            </h3>
            <p className="text-gray-600 text-sm">
              Sam-IT UB provides reliable IT support services, including
              troubleshooting, software installation, and cybersecurity. Our
              team ensures smooth and secure operations...
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-orange-700 via-orange-200 to-orange-500 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Upcoming Event!
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              IT Networking Event at Sam Eyde Vgs
            </h3>
            <p className="text-gray-600 text-sm">
              We at Sam-IT UB are excited to announce that we will be present at
              the TECH scene's new offices at Sam Eyde High School, where we
              will...
            </p>

            <a
              href="https://agderfk.pameldingssystem.no/itbransjetreff240125"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={AI_Robot}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              The Future of IT
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Trends to Watch in 2024 and Beyond
            </h3>
            <p className="text-gray-600 text-sm">
              As technology evolves rapidly, staying ahead of key IT trends in
              2024 and beyond is crucial for businesses and individuals to
              maintain a competitive edge and therefore, Sam-IT is...
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Technician}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Are You Hiring an IPS?
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              What to Look for When Choosing an IT Service Provider
            </h3>
            <p className="text-gray-600 text-sm">
              It is important to find an employer that aligns with your values
              and work style. If you value work-life balance, you should...
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600k"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent_2}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-orange-700 via-orange-200 to-orange-500 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Upcoming Event!
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Slush'D Energy 2025-Are Your Coming?
            </h3>
            <p className="text-gray-600 text-sm">
              Digin is co-hosting Slush'D Energy on March 12, 2025, in Mandal,
              bringing together startups, investors, and industry leaders to
              focus on sustainability, clean-tech, energy, AI...
            </p>

            <a
              href="https://digin.no/events/slushd-energy/"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Sam_IT_Poster}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              {" "}
              Sam-IT UB Day
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Launching Our Project Posters to the Public
            </h3>
            <p className="text-gray-600 text-sm">
              Sam-IT UB are thrilled to announce that we will soon begin
              distributing our project posters as part of our advertising
              campaign....
            </p>
            <a
              href="NoLink"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Cyber}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Enhanced H2 Title */}
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Cyber Security
            </h2>

            {/* Improved H3 Title */}
            <h3 className="font-bold text-gray-600 mb-2">
              Cybersecurity Best Practices for Businesses
            </h3>

            <p className="text-gray-600 text-sm">
              In today’s digital world, protecting your business from cyber
              threats is vital. Sam-IT UB wants to share key practices to secure
              data, prevent breaches, and keep your business...
            </p>

            <a
              href="https://agderfk.pameldingssystem.no/itbransjetreff240125"
              target="blank"
              className="text-blue-300 mt-4 block hover:border-b-2 hover:text-blue-600"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}

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
              Learn More &rarr;
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
