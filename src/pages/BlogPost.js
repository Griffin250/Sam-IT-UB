import React, { useEffect, useState, useRef } from 'react';
import Team from '../assets/otherImages/BlogImages/Liam_Emma.png';
import Developer from '../assets/otherImages/BlogImages/Developer.JPG';
import samEydeVgs from '../assets/otherImages/IT_Person.jpg';
import backgroundImage from '../assets/otherImages/IT_Person.jpg';
import HackerBanner from '../assets/otherImages/IT_Person.jpg';
import Students from '../assets/otherImages/BlogImages/Isiah_Emma.png';
import UpcomingEvent from '../assets/otherImages/BlogImages/Upcoming_event.png';

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
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <>
      <div className='bg-gradient-to-br from-blue-500 via-blue-400 to-gray-500 w-4/5 m-auto blog-section-divider'> </div>
      <div className="container mx-auto px-8 py-8 w-full bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News & Blogposts</h2>
        <p className="text-center mb-8 text-lg text-gray-600">Stay updated on what's happening with our latest posts.</p>
        <div
          ref={scrollRef}
          className="blog-section flex m-auto overflow-x-hidden space-x-4 snap-x snap-mandatory scrollbar-hidden blog-section"
        >
          {/* Repeat your blog section cards here */}
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={Students} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
            <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={HackerBanner} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
            <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
            <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>
          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={UpcomingEvent} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
            <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={Students} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
            <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={samEydeVgs} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
            <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
            <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={backgroundImage} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
            <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={HackerBanner} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
            <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
            <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={Team} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
            <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
            <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>

          {/* Repeat for other blog posts */}

          <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
            <img src={Developer} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
            <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
            <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full ${currentSlide === index ? 'bg-orange-700' : 'bg-gray-400'}`}
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
          <a href="#NoLink" className="text-lg font-medium text-blue-600">All Posts</a>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
