import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faGithub,
  faDiscord,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/samit_logo.png';

const SmallFooter = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pb-4 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-200 text-lg">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Copyright Text */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2024 Sam-IT, Inc. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://"
            aria-label="Discord"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://youtube.com/"
            aria-label="YouTube"
            target="blank"
            className="text-orange-900 hover:text-orange-600 text-2xl"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;
