import {
  faClose,
  faMinus,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import ChatAi from "./ChatAi";
import AOS from "aos";
import "aos/dist/aos.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    localStorage.removeItem("chat_history"); // Clears chat history
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-14 right-8 z-50">
      {/* Chatbot Popup */}
      {isOpen && (
        <div
          className="bg-gray-900 p-4 rounded-lg shadow-lg w-80 h-auto border border-orange-500"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl text-white text-center m-auto">
              SAM-IT AI Bot
            </h2>
            <div>
              <button
                onClick={toggleChat} // Minimize button (Keeps messages)
                className="text-gray-900 hover:text-gray-700 focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  className="h-6 w-6 text-orange-700 px-2"
                  title="Minimize Chat Window"
                />
              </button>
              <button
                onClick={closeChat} // Close button (Clears messages)
                className="text-gray-900 hover:text-gray-700 focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className="h-6 w-6 text-orange-700 px-2"
                  title="End Chat & Clear Messages"
                />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-y-auto h-80">
            <p className="text-sm text-white">
              Hello! How can I assist you today?
            </p>

            <ChatAi />
          </div>

          <p className="text-white">
            Your use of this Chatbot is governed by this{" "}
            <a href="#disclaimer" className="text-blue-400">
              disclaimer.
            </a>
          </p>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-orange-700 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FontAwesomeIcon icon={faRobot} className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
