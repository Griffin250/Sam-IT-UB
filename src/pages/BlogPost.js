import React, { useEffect, useState, useRef } from "react";
import Team from "../assets/otherImages/BlogImages/Liam_Emma.png";
import Developer from "../assets/otherImages/BlogImages/Developer.JPG";

import Technician from "../assets/otherImages/BlogImages/Technician.png";
import HackerBanner from "../assets/otherImages/IT_Person.jpg";
import Students from "../assets/otherImages/BlogImages/Isiah_Emma.png";
import UpcomingEvent from "../assets/otherImages/BlogImages/Upcoming_event.png";
import Sam_IT_Poster from "../assets/otherImages/BlogImages/Sam_IT_Poster.png";

const BlogPosts = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Adjust according to the number of posts

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
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest News & Blogposts
        </h2>
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
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">Our Location</h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Welcom to our offices in Arendal
            </h3>
            <p className="text-gray-600 text-sm">
              We at Sam-IT UB are delighted to announce that we are expanding
              our presence by opening new offices in the charming town of...
            </p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">
              Learn More &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={HackerBanner}
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
              It is important to find an employer that aligns with your values
              and work style. If you value work-life balance, you should...
            </p>
            <a href="NoLink" className="text-blue-500 mt-4 block">
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-50 bg-gradient-to-r from-blue-500 to-blue-200 rounded-md py-2 px-3 mb-4 text-center shadow-md">
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
              className="text-blue-500 mt-4 block"
            >
              Learn More &rarr;
            </a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Students}
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
              We at Advantek are delighted to announce that we are expanding our
              presence by opening new offices in the charming town of...
            </p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">
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
            <h3 className="font-bold text-gray-600 mb-2">
              What to Look for When Choosing an IT Service Provider
            </h3>
            <p className="text-gray-600 text-sm">
              It is important to find an employer that aligns with your values
              and work style. If you value work-life balance, you should...
            </p>
            <a href="NoLink" className="text-blue-500 mt-4 block">
              Learn More &rarr;
            </a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={Sam_IT_Poster}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {" "}
              Sam-IT UB Day
            </h2>
            <h3 className="font-bold text-gray-600 mb-2">
              Launching Our Project Posters to the Public
            </h3>
            <p className="text-gray-600 text-sm">
              We at Sam-IT UB are thrilled to announce that we will soon begin
              distributing our project posters as part of our advertising
              campaign....
            </p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">
              Learn More &rarr;
            </a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Enhanced H2 Title */}
            <h2 className="text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md py-2 px-3 mb-4 text-center shadow-md">
              Upcoming Event!
            </h2>

            {/* Improved H3 Title */}
            <h3 className="text-md font-semibold text-gray-700 mb-2 text-center">
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
              className="text-blue-500 mt-4 block hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={HackerBanner}
              alt="Factors to consider when choosing an employer as a developer"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How Our Team at Sam-IT UB Is Helping the Local Community
            </h3>
            <p className="text-gray-600 text-sm">
              It is important to find an employer that aligns with your values
              and work style. If you value work-life balance, you should...
            </p>
            <a href="NoLink" className="text-blue-500 mt-4 block">
              Learn More &rarr;
            </a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img
              src={UpcomingEvent}
              alt="New offices in Arendal"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">
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
              className="text-blue-500 mt-4 block"
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
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Next
          </button>
        </div>

        <div className="text-center mt-8">
          <a href="#NoLink" className="text-lg font-medium text-blue-600">
            All Posts
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
