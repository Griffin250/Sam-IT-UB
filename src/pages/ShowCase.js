import React from 'react';
import faHeadset from '../assets/Icons/iconscontact.png';
import faClock from '../assets/Icons/responsive-icon-02.png'
import faClipboardCheck  from '../assets/Icons/plan-icon.png'
import faLightbulb from '../assets/Icons/solutions-icon.png'
import faUsers from '../assets/Icons/team-icon.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowCase = () => {
  useEffect(()=>{
    AOS.init({
      duration:3000,
      once:false,
  });
}, []);
  const benefits = [
    {
      icon: faHeadset,
      text: 'Each of our clients has a dedicated contact; get the same person every time you call.',
    },
    {
      icon: faClock,
      text: 'Lost time equals lost revenue. We respond immediately when issues occur.',
    },
    {
      icon: faClipboardCheck,
      text: 'A good plan mitigates many possible issues. We tailor your IT plan to meet your needs.',
    },
    {
      icon: faLightbulb,
      text: 'We are a Certified Solutions Expert for 20+ leading vendors.',
    },
    {
      icon: faUsers,
      text: 'We work as an extension of your team. We’ll help you reach your goals.',
    },
  ];

  return (
    <div className="p-6 md:p-12 rounded text-gray-800 bg-gradient-to-br from-gray-200 to-blue-200">
      {/* Section Title */}
      <div className="border-t border-gray-500 w-48 mb-4"></div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center" data-aos="fade-down">Why choose Sam-IT?</h1>
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 " data-aos="fade-up">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 shadow-md rounded-md cursor-pointer
           hover:bg-orange-600 hover:text-white hover:translate-y-3"  data-aos="fade-up">
            <div className="w-16 h-16 mb-4">
              <img src={benefit.icon} alt="icon" className="w-full h-full object-contain" />
            </div>
            <p className="text-l">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCase;
