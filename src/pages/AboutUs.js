import React from "react";
import Team from "../assets/otherImages/Teams.png";
import CEO from "../assets/otherImages/IT_Person.jpg";
import { NavLink } from "react-router-dom";
import Liam from '../assets/Team/Liam.png'
import Isiah from '../assets/Team/Isiah.png'
import Emma from '../assets/Team/Emma.png'
import Erland from '../assets/Team/Erland.png'

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
      <section className="bg-gradient-to-br from-blue-200 via-gray-100 text-gray-800 py-20 px-4 text-center justify-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Sam-IT UB is a network of technology companies dedicated to
          innovation, specializing in advanced solutions for digitalization,
          engineering, and project management across diverse industries.
          <br />
          Our operations extend throughout Agder, from the beautiful coastline
          of Sam Eyde Vgs to the scenic regions of Nothern Norway. We are
          committed to delivering high-quality services and support to
          businesses across the continent.
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
      <section className="py-4 px-4 md:px-8 bg-gradient-to-tl from-blue-200 via-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src={Liam}
              alt="Team Member 1"
              className="rounded-full mx-auto mb-4 h-40 w-40"
            />
            <h3 className="text-xl font-semibold text-gray-700">Liam Ribe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src={Isiah}
              alt="Team Member 2"
              className="rounded-full mx-auto mb-4 h-40 w-40"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              I互iah Tuyisenge
            </h3>
            <p className="text-gray-600">CTO & Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src={Emma}
              alt="Team Member 3"
              className="rounded-full mx-auto mb-4 h-40 w-40"
            />
            <h3 className="text-xl font-semibold text-gray-700">Emma Heitmann  </h3>
            <p className="text-gray-600">Business Manager</p>
          </div>
             {/* Team Member 4 */}
             <div className="text-center">
            <img
              src={Erland}
              alt="Team Member 3"
              className="rounded-full mx-auto mb-4 h-40 w-40"
            />
            <h3 className="text-xl font-semibold text-gray-700">Erland Terkelsen</h3>
            <p className="text-gray-600">UI/UX Desinger & Product Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-200 via-gray-400 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="text-lg mb-6">
          Let’s transform your business with expert IT solutions and
          consultancy.
        </p>

        <NavLink to={"/ContactForm"} onClick={scrollToTop}>
          <button
            className="px-6 py-3 bg-white text-orange-700 font-bold rounded-lg shadow-lg hover:bg-gray-100">
            Contact Us
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUs;
