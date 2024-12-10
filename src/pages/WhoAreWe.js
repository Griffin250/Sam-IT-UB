import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faGithub,
     faDiscord, faXTwitter} from '@fortawesome/free-brands-svg-icons';

const WhoAreWe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-16 mt-12">
      {/* Title Section */}
      <div className=" px-4 mb-8">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-gray-900">
          Who Are We?
        </h1>
        <p className="mt-4 text-lg text-gray-800 max-w-5xl m-auto">
          SAM-IT UB is a student-driven company offering IT user support and
          development services for both individuals and businesses. We provide
          efficient, reliable solutions for your digital needs, whether it’s
          technical support or web development.
        </p>
        <br/>
        <p className="mt-4 text-lg text-gray-600 max-w-5xl m-auto">
          At SAM-IT UB, we combine innovative thinking with hands-on expertise
          to provide high-quality IT services. Our team of dedicated students
          focuses on scalability, security, and seamless solutions, ensuring
          your business operates smoothly in today’s tech-driven world. From
          tailored web applications to personalized support, we’re here to
          enhance your digital experience and help you succeed.
        </p>
      </div>

   

      {/* Button Section */}
      <div className="text-center mb-8">
        <p className="mt-2 inline-block text-gray-900 font-bold border-orange-600 border py-2 px-6 rounded-md text-4lg">
          Follow Us and Findout More!
        </p>
      </div>
      <div className="flex space-x-4 md:mt-0 m-auto">
          <a href="https://facebook.com" aria-label="Facebook" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faFacebook} className='size-8' /> 
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faInstagram} className='size-8' />
          </a>
          <a href="https://discord.gg/sBrzuMpt" aria-label="Discord" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faDiscord} className='size-8' />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" target='blank' className="text-orange-900 hover:text-orange-600">
            <FontAwesomeIcon icon={faXTwitter} className='size-8' /> 
          </a>
          <a href="https://github.com/" aria-label="GitHub" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faGithub} className='size-8' />
          </a>
          <a href="https://youtube.com/" aria-label="YouTube" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faYoutube}  className='size-8'/>  
          </a>
  
        </div>
    </div>
  );
};

export default WhoAreWe;
