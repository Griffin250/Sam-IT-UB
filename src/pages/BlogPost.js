import React, { useEffect, useState, useRef } from 'react';
import blogImage from '../assets/otherImages/IT_Person.jpg'
import bannerImage from '../assets/otherImages/IT_Person.jpg'
import samEydeVgs from '../assets/otherImages/IT_Person.jpg'
import backgroundImage from '../assets/otherImages/IT_Person.jpg'
import HackerBanner from '../assets/otherImages/IT_Person.jpg'
const BlogPosts = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Adjust according to the number of posts

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
       
        const containerWidth = scrollRef.current.offsetWidth;
      

        const newSlide = currentSlide + 1 > totalSlides - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);

        scrollRef.current.scrollBy({
          left: containerWidth, // Scroll by the container's width
          behavior: 'smooth',
        });
      }
    }, 3500); // Every 3.5seconds scrolls to the next slide

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  return (
    <>
    <div className='bg-gradient-to-br from-orange-500 via-blue-400 to-gray-500 w-4/5 m-auto blog-section-divider'> </div>
    <div className="container mx-auto px-8 py-8 w-full bg-gradient-to-br from-white via-gray-100 to-blue-200">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News & Blogposts</h2>
      <p className="text-center mb-8 text-lg text-gray-600">Stay updated on what's happening with our latest posts.</p>
      <div
        ref={scrollRef}
        className="blog-section flex m-auto overflow-x-hidden space-x-4 snap-x snap-mandatory scrollbar-hidden"
      >
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={blogImage} alt="New offices in Arendal" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">New offices in Arendal</h3>
          <p className="text-gray-600 text-sm">We at Advantek are delighted to announce that we are expanding our presence by opening new offices in the charming town of...</p>
          <a href="#NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>

        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={bannerImage} alt="10 Ways to Create an Exceptional Corporate Culture" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">10 Ways We Create an Exceptional Corporate Culture at Advantek Digital</h3>
          <p className="text-gray-600 text-sm">At Advantek Digital, we believe that the success of our business depends on a healthy and productive corporate culture. We are proud...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>

        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={samEydeVgs} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>

        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={blogImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={backgroundImage} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Factors to consider when choosing an employer as a developer</h3>
          <p className="text-gray-600 text-sm">It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...</p>
          <a href="NoLink" className="text-blue-500 mt-4 block">Learn More &rarr;</a>
        </div>
        <div className="flex-none w-80 bg-white shadow-lg rounded-lg p-4 snap-start">
          <img src={HackerBanner} alt="Factors to consider when choosing an employer as a developer" className="w-full h-40 object-cover rounded-md mb-4" />
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

      <div className="text-center mt-8">
        <a href="#NoLink" className="text-lg font-medium text-blue-600">All Posts</a>
      </div>
    </div>
    </>
  );
};

export default BlogPosts;
