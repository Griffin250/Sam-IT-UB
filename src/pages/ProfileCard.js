import React from "react";
import isiah from "../assets/Team/isiah--.png";
import liam from "../assets/Team/Liam--.png";
import emma from "../assets/Team/Emma--.png";
import erland from "../assets/Team/Erland--.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ name, title, description, email, phone, image }) => {
  return (
    <div className="bg-inherit h-3/4 rounded-lg shadow-lg overflow-hidden border border-gray-300 -ml-4 -mr-4 md:ml-auto md:mr-auto">
      
      {/* Image Section */}
      <img src={image} alt={name} className="w-full h-2/4 object-cover" />

      {/* Content Section */}
      
      <div className="p-6 bg-gradient-to-b from-gray-200 to-blue-200">
       
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{title}</p>
        <p className="text-gray-600 mt-2 ">{description} </p>

        {/* Contact Section */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-700">
          <FontAwesomeIcon icon={faPhone} className="mr-4 cursor-pointer hidden" />
              <path d="M2.3 4.1a1 1 0 011.4-.3L7 5.6a1 1 0 01.4 1.3 7.2 7.2 0 003.4 3.4 1 1 0 011.3.4l1.8 3.3a1 1 0 01-.3 1.4l-2.2 1.7a3 3 0 01-3.3 0A14.8 14.8 0 012 8.9a3 3 0 01.3-3.3l1.8-1.5z" />
          
            <p className="cursor-pointer font-bold hover:text-orange-600 hover:translate-x-1 hover:transition-all hidden"> <a href="tel:" >{phone}</a></p>
          </div>

          <div className="flex items-center text-gray-700">
          <FontAwesomeIcon icon={faEnvelope} className="mr-4 cursor-pointer" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8 0H8m0 0H7a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2v-4a2 2 0 00-2-2h-1"
              />
           
            <p className="cursor-pointer font-bold hover:text-orange-600 hover:translate-x-1 hover:transition-all"> <a href="mailto:sam-it-ub@hotmail.com" >{email}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  const profiles = [
    {
      name: "Liam Ribe",
      title: "CEO & Founder",
      description:
        "Liam thrives on challenges at Sam-IT, blending his passion for development and business management",
      email: "Liam.sam-it-ub@hotmail.com",
      phone: "+47 4662976",
      image: liam,
    },
    {
      name: "Isiah Tuyisenge",
      title: "CTO & Developer",
      description:
        "Isiah is a Developler exceling in both frontend and backend development, delivering seamless solutions",
      email: "Isiah.sam-it-ub@hotmail.com",
      phone: "+47 40569093",
      image: isiah,
    },
    {
      name: "Emma Heitmann",
      title: "Business & Marketing Manager",
      description:
        "Emma is a business and product manager focused on optimizing web app performance and user experience.",
      email: "Emma.sam-it-ub@hotmail.com",
      phone: "+47 90842271",
      image: emma,
    },
    {
      name: "Erlend  Terkelsen",
      title: "UI/UX & Product Designer",
      description:
        "Erlend is a UI/UX & Product Designer, skilled in server solutions, ensuring scalability and security in all projects.",
      email: "Erlend.sam-it-ub@hotmail.com",
      phone: "+47 91810356",
      image: erland,
    },
  ];

  return (
    <div className="min-h-screen -mb-40 bg-gradient-to-b from-gray-200 to-blue-200 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
