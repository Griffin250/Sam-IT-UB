import React from "react";
import Team from "../assets/otherImages/Teams.png";
import CEO from "../assets/otherImages/IT_Person.jpg";
import { NavLink } from "react-router-dom";

import ProfileCard from '../pages/ProfileCard'
const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div className="bg-gray-50 mt-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 via-gray-100 text-gray-800 py-20 px-4 text-center justify-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sam-IT UB</h1>
        <p className="text-lg md:text-xl max-w-5xl mx-auto">
        SAM-IT is a student-driven company offering IT user support and
          development services for both individuals and businesses. We provide
          efficient, reliable solutions for your digital needs, whether it’s
          technical support or web development.
         
        </p><br/><br/>
        <p className="text-lg md:text-xl max-w-5xl mx-auto">
        
          At SAM-IT, we combine innovative thinking with hands-on expertise
          to provide high-quality IT services. Our team of dedicated students
          focuses on scalability, security, and seamless solutions, ensuring
          your business operates smoothly in today’s tech-driven world. From
          tailored web applications to personalized support, we’re here to
          enhance your digital experience and help you succeed.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses and individuals with
              innovative IT strategies and solutions that streamline processes,
              enhance productivity, and foster growth.
            </p>
          </div>
          <div>
            <img src={Team} alt="Mission" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the trusted partner for businesses around the world,
              offering cutting-edge IT solutions and consultancy that drive
              innovation and success.
            </p>
          </div>
          <div>
            <img src={Team} alt="Vision" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={CEO}
              alt="Expert Team"
              className="mx-auto mb-4 h-1/2 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Expert Team
            </h3>
            <p className="text-gray-600">
              Work with industry-leading professionals dedicated to providing
              exceptional IT solutions.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Team}
              alt="Tailored Solutions"
              className="mx-auto mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tailored Solutions
            </h3>
            <p className="text-gray-600">
              Receive customized strategies designed to meet your unique
              business challenges.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Team}
              alt="Proven Results"
              className="mx-auto mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Proven Results
            </h3>
            <p className="text-gray-600">
              Benefit from solutions that deliver measurable success for our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      <ProfileCard />

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-200 via-gray-100 to-blue-200 text-gray-700 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="text-lg mb-6">
          Let’s transform your business with expert IT solutions and
          consultancy.
        </p>

        <NavLink to={"/ContactForm"} onClick={scrollToTop}>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800">
            Contact Us
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUs;
