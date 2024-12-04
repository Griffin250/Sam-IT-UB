import React from "react";

const WhoAreWe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-16">
      {/* Title Section */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Who Are We?
        </h1>
        <p className="mt-4 text-lg text-gray-800 max-w-5xl mx-auto">
          SAM-IT UB is a student-driven company offering IT user support and
          development services for both individuals and businesses. We provide
          efficient, reliable solutions for your digital needs, whether it’s
          technical support or web development.
        </p>
        <br/>
        <p className="mt-4 text-lg text-gray-600 max-w-5xl mx-auto text-center justify-start">
          At SAM-IT UB, we combine innovative thinking with hands-on expertise
          to provide high-quality IT services. Our team of dedicated students
          focuses on scalability, security, and seamless solutions, ensuring
          your business operates smoothly in today’s tech-driven world. From
          tailored web applications to personalized support, we’re here to
          enhance your digital experience and help you succeed.
        </p>
      </div>

      {/* Button Section */}
      <div className="text-center">
        <a
          href="#home"
          className="mt-2 inline-block text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md text-lg"
        >
          Read More about SAM-IT
        </a>
      </div>
    </div>
  );
};

export default WhoAreWe;
